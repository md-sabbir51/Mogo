//Header-slider start
$(".header-slider").owlCarousel({
    // autoplay: true,
    // loop: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
//Header-slider end
// counter start
$(".counter").counterUp({
  delay: 10,
  time: 2000,
  offset: 70,
  formatter: function (n) {
    return n.replace(/,/g, ".");
  },
});
// counter end
// Service Animation-click start
const iconAnimation = document.querySelector('.iconAnimation');
const icon = document.querySelector('.icon')

iconAnimation.addEventListener('click', function(){
  icon.classList.toggle('animate')
});

const iconAnimation2 = document.querySelector('.iconAnimation2');
const icon2 = document.querySelector('.icon2')

iconAnimation2.addEventListener('click', function(){
  icon2.classList.toggle('animate2')
});

const iconAnimation3 = document.querySelector('.iconAnimation3');
const icon3 = document.querySelector('.icon3')

iconAnimation3.addEventListener('click', function(){
  icon3.classList.toggle('animate3')
});
// Service Animation-click end
//Header-slider start
$(".jon-slider").owlCarousel({
  // autoplay: true,
  // loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
//Header-slider end

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const mobilenav = document.querySelector('.mobilenav');

hamburger.addEventListener('click', function(){
    bar1.classList.toggle('animateBar1')
    bar2.classList.toggle('animateBar2')
    bar3.classList.toggle('animateBar3')
    mobilenav.classList.toggle('openDarwer')
})