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
  delay: 12,
  time: 2500,
  offset: 70,
  formatter: function (n) {
    return n.replace(/,/g, ".");
  },
});
// counter end