$(function () {
  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="./images/prev.svg" alt="prev_icon" /></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="./images/next.svg" alt="next_icon" /></button>',
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {},
      // },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
