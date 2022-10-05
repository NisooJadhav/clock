# Digital Clock 

![This is Digital Clock image](/image/github-clock.png)
[The Digital Clock](https://nisoojadhav.github.io/clock)

## About Project
Digital Clock made using simple JavaScript and setting background images randomly using jQuery.

### You can pin 📌 this [site](https://nisoojadhav.github.io/clock) in your browser, that will serve as Aesthetic Clock + Wallpaper + Daily Quotes(coming soon!) Site.

![pin](https://user-images.githubusercontent.com/68807845/194076153-be4ca8cb-cf55-4359-99d6-af2cb17856ae.png)


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

### - Show your love 💛 give us a star 🌟
### - You can contribute to this project.

## Contributors
<a href="https://github.com/nisoojadhav/clock/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nisoojadhav/clock" />
</a>
