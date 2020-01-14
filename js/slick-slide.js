$('.photos__container').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $('.photos__arrow-left'),
    nextArrow: $('.photos__arrow-right'),
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    pauseOnHover: false,
    cssEase: 'linear'
});