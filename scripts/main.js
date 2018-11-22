
/*----------------LOADER------------------*/
document.addEventListener('DOMContentLoaded', () => {

})
/*----------------LOADER------------------*/


/*----------------PAGE TRANSITION------------------*/
let down1 = document.getElementById("down1"),
    down2 = document.getElementById("down2"),
    down3 = document.getElementById("down3"),
    up1 = document.getElementById("up1"),
    up2 = document.getElementById("up2"),
    up3 = document.getElementById("up3"),
    section1 = document.getElementById("first"),
    section2 = document.getElementById("second"),
    section3 = document.getElementById("third"),
    section4 = document.getElementById("fourth"),
    overlay1 = document.getElementById("morph1"),
    overlay2 = document.getElementById("morph2"),
    overlay3 = document.getElementById("morph3");

var morphingShow1 = anime({
    targets: '#morph1 #n1',
    points: [
      { value: '0 0.1 1920 0.1 1920 0 0 0' },
      { value: '0 500 1920 100 1920 0 0 0 0 600' },
      { value: '0 692.5 1920 692.5 1920 0 0 0 0 692.5' }
    ],
    easing: 'easeInQuart',
    duration: 1000,
    loop: false,
    autoplay: false
  });
var morphingHide1 = anime({
    targets: '#morph1 #n1',
    points: [
      { value: '0 500 1920 100 1920 0 0 0 0 600' },
      { value: '0 0.1 1920 0.1 1920 0 0 0' }
    ],
    easing: 'easeInQuart',
    duration: 1000,
    loop: false,
    autoplay: false
  });

 var morphingShow2 = anime({
    targets: '#morph2 #n2',
    points: [
      { value: '0 0.1 1920 0.1 1920 0 0 0' },
      { value: '0 500 1920 100 1920 0 0 0 0 600' },
      { value: '0 692.5 1920 692.5 1920 0 0 0 0 692.5' }
    ],
    easing: 'easeInQuart',
    duration: 1000,
    loop: false,
    autoplay: false
  });
var morphingHide2 = anime({
    targets: '#morph2 #n2',
    points: [
      { value: '0 500 1920 100 1920 0 0 0 0 600' },
      { value: '0 0.1 1920 0.1 1920 0 0 0' }
    ],
    easing: 'easeInQuart',
    duration: 1000,
    loop: false,
    autoplay: false
  });

var morphingShow3 = anime({
    targets: '#morph3 #n3',
    points: [
      { value: '0 0.1 1920 0.1 1920 0 0 0' },
      { value: '0 500 1920 100 1920 0 0 0 0 600' },
      { value: '0 692.5 1920 692.5 1920 0 0 0 0 692.5' }
    ],
    easing: 'easeInQuart',
    duration: 1000,
    loop: false,
    autoplay: false
  });
var morphingHide3 = anime({
    targets: '#morph3 #n3',
    points: [
      { value: '0 500 1920 100 1920 0 0 0 0 600' },
      { value: '0 0.1 1920 0.1 1920 0 0 0' }
    ],
    easing: 'easeInQuart',
    duration: 1000,
    loop: false,
    autoplay: false
});

down1.addEventListener('click', function(){
    morphingHide1.restart();
    overlay1.classList.add('pointer');
    

    down1.classList.remove('displayShow');
    down2.classList.remove('displayHide');
    up1.classList.add('displayShow');
    down1.classList.add('displayHide');
    section1.classList.add('displayHide');
    section1.classList.remove('displayShowAnime');
    function hide(){
        overlay1.classList.add('displayHide');
        overlay1.classList.remove('displayShow');
        overlay1.classList.remove('displayShowAnime');
        overlay2.classList.remove('displayShowAnime');
    }
    setTimeout(hide, 1000);

    overlay2.classList.add('displayShow');
    section2.classList.add('displayShow');
    section2.classList.remove('displayShowAnime');
    down2.classList.add('displayShow');
})

down2.addEventListener('click', function(){
    morphingHide2.restart();
    
    up2.classList.remove('displayHide');
    up2.classList.add('displayShow');
    up1.classList.remove('displayShow');
    up1.classList.add('displayHide');
    down2.classList.add('displayHide');
    down2.classList.remove('displayShow');
    section2.classList.add('displayHide');
    function hide(){
        overlay2.classList.remove('displayShow');
        section2.classList.remove('displayShow');
    }
    setTimeout(hide, 2000);

    overlay3.classList.add('displayShow');
    overlay3.classList.remove('displayShowAnime');
    section3.classList.add('displayShow');
    down3.classList.remove('displayHide');
    down3.classList.add('displayShow');
})

down3.addEventListener('click', function(){
    morphingHide3.restart();
    
    up3.classList.remove('displayHide');
    up3.classList.add('displayShow');
    up2.classList.remove('displayShow');
    up2.classList.add('displayHide');
    down3.classList.remove('displayShow');
    down3.classList.add('displayHide');
    section3.classList.add('displayHide');
    function hide(){
        overlay3.classList.remove('displayShow');
        section3.classList.remove('displayShow');
        section3.classList.remove('displayShowAnime');
    }
    setTimeout(hide, 2000);

    section4.classList.add('displayShow');
})

up1.addEventListener('click', function(){
  morphingShow1.restart();

  up1.classList.remove('displayShow');
  down1.classList.remove('displayHide');
  down1.classList.add('displayShow');
  down2.classList.add('displayHide');
  down2.classList.remove('displayShow');
  overlay1.classList.remove('displayHide');
  overlay1.classList.add('displayShowAnime');
  function hide(){
    section1.classList.remove('displayHide');
    section1.classList.add('displayShowAnime');
  }
  setTimeout(hide, 1000);
})

up2.addEventListener('click', function(){
  morphingShow2.restart();

  down2.classList.add('displayShow');
  down2.classList.remove('displayHide');
  down3.classList.add('displayHide');
  down3.classList.remove('displayShow');
  up1.classList.remove('displayHide');
  up1.classList.add('displayShow');
  up2.classList.add('displayHide');
  up2.classList.remove('displayShow');
  overlay2.classList.remove('displayHide');
  overlay2.classList.add('displayShowAnime');
  function hide(){
    section2.classList.remove('displayHide');
    section2.classList.add('displayShowAnime');
  }
  setTimeout(hide, 1000);
})

up3.addEventListener('click', function(){
  morphingShow3.restart();

  down3.classList.add('displayShow');
  down3.classList.remove('displayHide');
  up2.classList.remove('displayHide');
  up2.classList.add('displayShow');
  up3.classList.add('displayHide');
  up3.classList.remove('displayShow');
  overlay3.classList.remove('displayHide');
  overlay3.classList.add('displayShowAnime');
  function hide(){
    section3.classList.remove('displayHide');
    section3.classList.add('displayShowAnime');
  }
  setTimeout(hide, 1000);
})

/*----------------PAGE TRANSITION------------------*/