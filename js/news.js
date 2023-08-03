$(document).ready(function () {
    $('.n-list').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        swipe: true,
        autoplaySpeed: 7000,
        infinite: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: true,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });
});
