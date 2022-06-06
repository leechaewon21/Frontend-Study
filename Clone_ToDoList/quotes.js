const quotes = [
    {quote:"Costantly think about how you could be doing things better and question yourself.", author:"Elon Musk"},
    {quote:"Do not put off. Act Now!!!", author:"Bill Gates"},
    {quote:"Done is better than perfect.", author:"Mark Zuckerberg"},
    {quote:"Be poor, humble and driven. Don't be afraid to shift or pivot.", author:"Alex Rodriguez"},
    {quote:"Be carefule about reading health books. You may die of a misprint", author:"Mark Twain"},
    {quote:"Forgive your enemies but never forget their names", author:"John F.Kennedy"},
    {quote:"Maybe this world is another planet's hell", author:"Aldous Huxley"}
];
const imgs = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"];

const quote = document.querySelector("#quote span:first-child");
//const author = document.querySelector("#quote span:last-child");

const chosenQuote = quotes[Math.floor(Math.random()*quotes.length)];
const chosenImg = imgs[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = `"${chosenQuote.quote}"<br>from ${chosenQuote.author}`;
//author.innerHTML = `from ${chosenQuote.author}`;

document.body.style.backgroundImage = `url(img/${chosenImg})`;

//const bgImg = document.createElement("img");
//bgImg.src = `img/${chosenQuote.img}`;
//document.body.appendChild(bgImg);
