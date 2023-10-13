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
  // stickiy header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('header').addClass("sticky");
    }
    else {
      $('header').removeClass("sticky");
    }
  });

  // add to card counter
  var cartCounter = 0;
  $('.addToCart').click(function () {
    cartCounter++;
    var buttonCount = setTimeout(function () {
      $('.header__menu-shopping').attr('data-count', cartCounter);
    }, 100);
  });


  // add to card animation
  $('.addToCart').click(function () {
    var target = $('.cart').first(),
      target_offset = target.offset();

    var target_x = target_offset.left,
      target_y = target_offset.top;

    console.log('target: ' + target_x + ', ' + target_y);

    var obj_id = 1 + Math.floor(Math.random() * 100000),
      obj_class = 'cart-animation-helper',
      obj_class_id = obj_class + '_' + obj_id;

    var obj = $("<div>", {
      'class': obj_class + ' ' + obj_class_id
    });

    $(this).parent().parent().append(obj);

    var obj_offset = obj.offset(),
      dist_x = target_x - obj_offset.left + 10,
      dist_y = target_y - obj_offset.top + 10,
      delay = 0.8; // seconds

    console.log('obj_off: ' + obj_offset.left + ', ' + obj_offset.top);

    setTimeout(function () {
      obj.css({
        'transition': 'transform ' + delay + 's ease-in',
        'transform': "translateX(" + dist_x + "px)"
      });
      $('<style>.' + obj_class_id + ':after{ \ transform: translateY(' + dist_y + 'px); \ opacity: 1; \ max-height: 20px; \ max-width: 20px; margin: 0; \ }</style>').appendTo('head');
    }, 0);


    obj.show(1).delay((delay + 0.02) * 1000).hide(1, function () {
      $(obj).remove();
    });
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


  // comment show-more content
  $(".comment-block").slice(0, 3).show();
  $("#show-more").on('click', function (e) {
    e.preventDefault();
    $(".comment-block:hidden").slice(0, 3).slideDown();
    if ($(".comment-block:hidden").length == 0) {
      $("#show-less").fadeIn('slow');
      $("#show-more").hide();
      // $("#loadMore").text('Load only the first 4');
    }
  });
  $("#show-less").on('click', function (e) {
    e.preventDefault();
    $('.comment-block:not(:lt(3))').fadeOut();
    $("#show-more").fadeIn('slow');
    $("#show-less").hide();
  });

  // catalog analize show-more content
  $(".cat-analize").slice(0, 5).show();
  $("#show-more").on('click', function (e) {
    e.preventDefault();
    $(".cat-analize:hidden").slice(0, 5).slideDown();
    if ($(".cat-analize:hidden").length == 0) {
      $("#show-less").fadeIn('slow');
      $("#show-more").hide();
      // $("#loadMore").text('Load only the first 4');
    }
  });
  $("#show-less").on('click', function (e) {
    e.preventDefault();
    $('.cat-analize:not(:lt(5))').fadeOut();
    $("#show-more").fadeIn('slow');
    $("#show-less").hide();
  });


  // basket(cart) delete card
  $('.delete-btn').on('click', function () {
    $(this).parent().parent().addClass('d-none');
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
      delay: 1000,
    },
  });


  // Swiper2
  var swiper2 = new Swiper(".main__info-slide .mySwiper", {
    slidesPerView: 3.4,
    spaceBetween: 17,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
  });


  // calendar
  flatpickr('#calendar-ru', {
    disableMobile: "true",
    "locale": "ru",
    "dateFormat": "Y/m/d",
  });


  // comment slide
  var swiper1 = new Swiper(".comment-slide", {
    lidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    pagination: {
      clickable: true,
    },
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      300: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        // centered: true,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,

      },
    },
  });




  // custom select
  $(".custom-select").each(function () {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
      template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });


});




$(function () {
  // yandex map
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.754960, 37.619118],
      zoom: 11
    }),
      // Создаем метку с помощью вспомогательного класса.
      myPlacemark1 = new ymaps.Placemark([55.717522, 37.554680], {
        // Свойства.
        // iconContent: '1',
        // hintContent: 'Стандартный значок метки',
        balloonContent: '<div class="map-title"><span class="map-address">Ростов-на-Дону, ул. Социалистическая, д. 238/51</span><div class="map-info"><span class="address-time">Пн-Пт: 7:30-17:00</span><span class="address-time">Сб-Вс: 8:00-14:00</span></div></div>'
      }, {
        // Опции.
        // Своё изображение иконки метки.
        iconImageHref: '../images/map-icon.svg',
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // iconImageOffset: [33, -42]
      }),

      // metka 2
      myPlacemark2 = new ymaps.Placemark([55.758189, 37.579990], {
        // Свойства.
        balloonContent: '<div class="map-title"><span class="map-address">Ростов-на-Дону, ул. Социалистическая, д. 238/51</span><div class="map-info"><span class="address-time">Пн-Пт: 7:30-17:00</span><span class="address-time">Сб-Вс: 8:00-14:00</span></div></div>'
      }, {
        // Опции.
        // Своё изображение иконки метки.
        iconImageHref: '../images/map-icon.svg',
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // iconImageOffset: [33, -22]
      });

    // metka 3
    myPlacemark3 = new ymaps.Placemark([55.753166, 37.631207], {
      // Свойства.
      // iconContent: '1',
      balloonContent: '<div class="map-title"><span class="map-address">Ростов-на-Дону, ул. Социалистическая, д. 238/51</span><div class="map-info"><span class="address-time">Пн-Пт: 7:30-17:00</span><span class="address-time">Сб-Вс: 8:00-14:00</span></div></div>'
    }, {
      // Опции.
      // Своё изображение иконки метки.
      iconImageHref: '../images/map-icon.svg',
      // Размеры метки.
      iconImageSize: [30, 30],
      // Смещение левого верхнего угла иконки относительно
      // iconImageOffset: [33, -42]
    }),

      // metka 4
      myPlacemark4 = new ymaps.Placemark([55.723732, 37.688150], {
        // Свойства.
        // iconContent: '1',
        balloonContent: '<div class="map-title"><span class="map-address">Ростов-на-Дону, ул. Социалистическая, д. 238/51</span><div class="map-info"><span class="address-time">Пн-Пт: 7:30-17:00</span><span class="address-time">Сб-Вс: 8:00-14:00</span></div></div>'
      }, {
        // Опции.
        // Своё изображение иконки метки.
        iconImageHref: '../images/map-icon.svg',
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // iconImageOffset: [33, -42]
      }),

      // metka 5
      myPlacemark5 = new ymaps.Placemark([55.765363, 37.704374], {
        // Свойства.
        // iconContent: '1',
        balloonContent: '<div class="map-title"><span class="map-address">Ростов-на-Дону, ул. Социалистическая, д. 238/51</span><div class="map-info"><span class="address-time">Пн-Пт: 7:30-17:00</span><span class="address-time">Сб-Вс: 8:00-14:00</span></div></div>'
      }, {
        // Опции.
        // Своё изображение иконки метки.
        iconImageHref: '../images/map-icon.svg',
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // iconImageOffset: [33, -42]
      }),

      // Добавляем все метки на карту.
      myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5);
  }
});





