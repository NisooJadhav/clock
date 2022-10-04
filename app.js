const bgImg = [
    //ink in water 1
    'https://images.unsplash.com/photo-1567095751004-aa51a2690368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    //ink in water 2
    'https://images.unsplash.com/photo-1608501821300-4f99e58bba77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

    //apartment windows
    'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',

    //leaves
    'https://images.unsplash.com/photo-1552152974-19b9caf99137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    //waves
    'https://images.unsplash.com/photo-1448067686092-1f4f2070baae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    //man mirrors
    'https://images.unsplash.com/photo-1499428665502-503f6c608263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    //forest from below
    'https://images.unsplash.com/photo-1446729444801-31245ddba81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    //hills
    'https://images.unsplash.com/photo-1521489871110-81dc5a61dbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',

    //leaves
    'https://images.unsplash.com/photo-1636047152186-7bd1d7a8a6ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',

    //rocks
    'https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    //black mountain
    'https://images.pexels.com/photos/991422/pexels-photo-991422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    //b&w forest
    'https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    //mountains
    'https://images.pexels.com/photos/5459512/pexels-photo-5459512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    //black rose
    'https://images.pexels.com/photos/614874/pexels-photo-614874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    //white flowers
    'https://images.pexels.com/photos/4118106/pexels-photo-4118106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    //nyc street
    'https://images.pexels.com/photos/1722179/pexels-photo-1722179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    //sitting man
    'https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

    //swan
    'https://images.unsplash.com/photo-1477132394330-d2376dc4c091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',

    //petals
    'https://images.unsplash.com/photo-1507998021208-973afeacd022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

    //woods
    'https://images.unsplash.com/photo-1596477225155-7d6a69493463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

    'https://i.ibb.co/LdQzP9j/wall1.jpg',
    'https://i.ibb.co/pKPKR1v/wall0.jpg',
];

function bgSwitch(array) {
    const randomRng =
        Math.floor(Math.random() * (array.length - 1 - 0 + 1)) + 0;
    let current = bgImg[randomRng];
    document.body.style.cssText = `background-image: url(${current})`;
}

bgSwitch(bgImg), 1000;

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
    document.querySelector('time').innerHTML = h + ':' + m + ':' + s+" "+ session;
}
setInterval(clock, 1000);
