# Digital Clock 

![This is Digital Clock image](/image/github-clock.png)
[The Digital Clock]("https://nisoojadhav.github.io/clock")

## About Project
Digital Clock made using simple JavaScript and setting background images randomly using jQuery.
[Site lives]("https://nisoojadhav.github.io/clock")

## Skills
- HTML
- CSS
- JavaScript

##  What did I use in this project this project?

1. Math.floor(),
2. Math.random(),
3. JS Date object,
4. getHours(), getMinutes(), getSeconds(),
5. string.prototype.padStar().

## Features

- code 👇

     const randomRng = Math.floor(Math.random() * 1000) + 0;

     document.body.style.cssText = `background-image: url(https://picsum.photos/seed/${randomRng}/1920/1080)`;


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

----------

## Notice


- Please give a star on Github
- Also you can contribute in this project.