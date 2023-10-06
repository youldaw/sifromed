$(function () {


  // Header menu
  $('.header .menu-add').on('click', function (e) {
    e.preventDefault();
    if ($('.header .modal__menu').hasClass('active')) {
      $('body').css('overflow', 'auto');
    } else {
      $('body').css('overflow', 'hidden');
    }
    $('.header .modal__menu').toggleClass('active');
  });


  // Header fixed menu
  $('.header__fixed .menu-add').on('click', function (e) {
    e.preventDefault();
    if ($('.header__fixed .modal__menu').hasClass('active')) {
      $('body').css('overflow', 'auto');
    } else {
      $('body').css('overflow', 'hidden');
    }
    $('.header__fixed .modal__menu').toggleClass('active');
  });



  // Header scroll 
  $(document).ready(function () {
    let headerFixed = $(".header__fixed");
    let scrollThreshold = 80;

    $(window).scroll(function () {
      if ($(this).scrollTop() > scrollThreshold) {
        headerFixed.addClass("active");
      } else {
        headerFixed.removeClass("active");
      }
    });
  });



  // Swiper1
  var swiper1 = new Swiper(".main__slide-mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 1000,
    autoplay: {
      delay: 700,
    },
  });


  // Swiper2
  var swiper2 = new Swiper(".main__info-slide .mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 17,
    speed: 1000,
    autoplay: {
      delay: 700,
    },
  });


});
