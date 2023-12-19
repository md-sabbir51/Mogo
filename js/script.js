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