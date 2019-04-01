//Put Javascript here
  document.addEventListener('DOMContentLoaded', () => {

  //Slick Carousel for viewing car photos
    $('.single-item').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed: 100,
      centerMode: true,
      fade: true,
      cssEase: 'ease-in-out',
      arrows: true,
  });

  //Slick Carousel To show Photos on bottom as well as the one in the carousel
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true,
    nextArrow: '<i class="fa fa-chevron-right nav-button-right"></i>',
    prevArrow: '<i class="fa fa-chevron-left nav-button-left"></i>',
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

});
