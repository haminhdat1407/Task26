$(document).ready(function(){
  $('.c-design__item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<a href="#!" class="c-slick__arrow c-icon__arrowleft"><img src="./assets/img/icon/icon-arrow-left.svg" alt="Arrow left"></a>`,
    nextArrow: `<a href="#!"  class="c-slick__arrow c-icon__arrowright"><img src="./assets/img/icon/icon-arrow-right.svg" alt="Arrow right"></a>`,
    settings: {
      slidesToShow: 1,
      arrows: false,
      infinite: false,
    },
  });
});
