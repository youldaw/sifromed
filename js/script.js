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

  // add to card animation
  $(".main__info-item").on("click", function () {
    var $btn = $(this);
    var $li = $btn.closest('.main-info-block');
    var btnOffsetTop = $btn.offset().top;
    var btnOffsetRight = window.innerWidth - $btn.offset().left;
    $li.find('.icon')
      .clone()
      .css({ top: btnOffsetTop, right: btnOffsetRight })
      .addClass("goo")
      .appendTo($li);

    setTimeout(function () {
      $(".goo").remove();
    }, 1000);
  });


  // show-more content
  $(".main-info-block").slice(0, 4).show();
  $("#show-more").on('click', function (e) {
    e.preventDefault();
    $(".main-info-block:hidden").slice(0, 4).slideDown();
    if ($(".main-info-block:hidden").length == 0) {
      $("#show-less").fadeIn('slow');
      $("#show-more").hide();
      // $("#loadMore").text('Load only the first 4');
    }
  });

  $("#show-less").on('click', function (e) {
    e.preventDefault();
    $('.main-info-block:not(:lt(4))').fadeOut();
    $("#show-more").fadeIn('slow');
    $("#show-less").hide();
  });


  // show-more content
  $(".info__card").slice(0, 2).show();
  $("#load-More").on('click', function (e) {
    e.preventDefault();
    $(".info__card:hidden").slice(0, 2).slideDown();
    if ($(".info__card:hidden").length == 0) {
      $("#load-Less").fadeIn('slow');
      $("#load-More").hide();
      // $("#loadMore").text('Load only the first 4');
    }
  });

  $("#load-Less").on('click', function (e) {
    e.preventDefault();
    $('.info__card:not(:lt(2))').fadeOut();
    $("#load-More").fadeIn('slow');
    $("#load-Less").hide();
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
    slidesPerView: 3.4,
    spaceBetween: 17,
    speed: 1000,
    autoplay: {
      delay: 700,
    },
  });


});


AOS.init({
  duration: 1000 //global duration
});