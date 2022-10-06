const randomRng = Math.floor(Math.random() * 1000) + 0;
document.body.style.cssText = `background-image: url(https://picsum.photos/seed/${randomRng}/1920/1080)`;

// bgSwitch(bgImg), 1000;

//CLOCK
function clock() {
    const d = new Date();
    let h = d.getHours().toString().padStart(2, '0');
    let m = d.getMinutes().toString().padStart(2, '0');
    let s = d.getSeconds().toString().padStart(2, '0');
    let session='PM';
    if(h>=12){
        h = (h-12).toString().padStart(2, '0');
        session='PM';
    }
    else{
        session='AM';
    }
    document.querySelector('time').innerHTML = h + ':' + m + ':' + s;
    document.querySelector('.ampm').innerHTML = session;
}
setInterval(clock, 1000);


// Quotes
const quote = document.querySelector('q');
const cite = document.querySelector('cite');

updateQuote();

// API -> https://github.com/lukePeavey/quotable
async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
    // Update DOM elements
    quote.innerText = data.content;
    cite.textContent = '- ' + data.author + ' -';
    } else {
    quote.textContent = "An error occured";
    console.log(data);
    }
}
