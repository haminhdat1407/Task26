$(document).ready(function(){
  
  $('.c-design__imglist').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    autoplay: true,
        autoplaySpeed: 2000,
    prevArrow: `<a href="#">
    <img class="c-buttonleft" src="assets/icon/button-left.svg" alt="Design">
  </a>`,
    nextArrow:  ` <a href="#">
    <img class="c-buttonright" src="assets/icon/button-right.svg" alt="Design">
  </a>`,
    settings: {
      slidesToShow: 1,
      arrows: false,
      infinite: false,
      
    },
  });
});
