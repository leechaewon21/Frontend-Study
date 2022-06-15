const loginForm = document.querySelector(".login");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

const USER = "savedUser"; // localStorage key
const HIDDEN = "hidden"; // Class Addition

//Event Handler
function handleLoginSubmit(event) {
    event.preventDefault();
    const savedUser = loginInput.value;
    paintGreeting(savedUser);
    saveName(savedUser);
}

function paintGreeting(text) {

    console.log(text);

    loginForm.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
    greeting.innerText = `Hi, ${text}`;
}

function askName() {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit",handleLoginSubmit);
}

function saveName(text) {
    localStorage.setItem(USER,text);
}

function loadName() {
    const savedUser = localStorage.getItem(USER);

    if(savedUser=== null) {
        askName();
    } else {
        paintGreeting(savedUser);
    }
}

function init() {
    loadName();
}

function deleteLocalStorage() {
    localStorage.removeItem(USER);
}


//deleteLocalStorage();
init();