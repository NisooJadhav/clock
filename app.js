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
        session='PM';
    }
    else{
        session='AM';
    }
    document.querySelector('time').innerHTML = h + ':' + m + ':' + s;
    document.querySelector('.ampm').innerHTML = session;
}
setInterval(clock, 1000);
