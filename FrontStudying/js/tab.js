const nav = document.querySelectorAll('.tab_btn');
const cont = document.querySelectorAll('.tab_cont');

// Get Tab Count
let tabCount = nav.length;
const countElem = document.getElementById('tab_count');
countElem.innerHTML = `Tab Count : ${tabCount}`; 

// Tab Click Event
nav.forEach((n) => {
    n.addEventListener('click', (e) => {
        if(!e.target.classList.contains('tab_btn')) return;
    
        const selectedTab = e.target.dataset.id;
    
        // Show and Hidden Content
        cont.forEach((c) => {
            if(c.id === selectedTab)
                c.classList.remove("hidden");
            else
                c.classList.add("hidden");
        });     
        
        // Change Button
        nav.forEach((n) => {
            if(n==e.target) 
                n.classList.add("clicked");
            else
                n.classList.remove("clicked");
        });
    });
});
