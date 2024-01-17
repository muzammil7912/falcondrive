





var Swipes2 = new Swiper(".section10mySwiper", {
      loop:true,
        speed: 500,
      slidesPerView: 7,
      grabCursor: false,
    //   allowTouchMove: false,
      centeredSlides: true,
      autoplay: {
          delay: 10000,
          disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        410: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        // when window width is <= 999px
        999: {
          spaceBetween: 30
        }
    }
    })
var Swipes2 = new Swiper(".whatweofferswiper", {
  spaceBetween: 10,
        speed: 500,
      slidesPerView: 1,
      grabCursor: false,
    //   allowTouchMove: false,
      centeredSlides: true,
      autoplay: {
          delay: 10000,
          disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
var Swipes2 = new Swiper(".BookingProcessswiper", {
  spaceBetween: 10,
        speed: 500,
      slidesPerView: 1,
      grabCursor: false,
    //   allowTouchMove: false,
      centeredSlides: true,
      autoplay: {
          delay: 10000,
          disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })




var Swipes2 = new Swiper(".sliderbanner", {
        // effect: "coverflow",
        speed: 500,
      slidesPerView: 1,
      grabCursor: false,
      autoplay: {
          delay: 10000,
          disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-paginationbanner",
        clickable: true,
      },
    })


    $(".Categories button").click(function() {
        $(this).toggleClass("active")
    })


    $(".section9_Body-Box-top").click(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).next().css("maxHeight", 0);
      } else {
        $(".section9_Body-Box-top").removeClass("active");
        $(".section9_Body-Box-bottom").css("maxHeight", 0);
        $(this).addClass("active");
        $(this).next().css("maxHeight", $(this).next().get(0).scrollHeight);
      }
    });

    $(".mobilenav").click(function () {
      let img = $(".mobilenav img").attr(`data-srcs`)
      $(".mobilenav").toggleClass(`active`)
      $(".mobilenav img").attr("src",`${img}`)
      $(".mobilenav.active img").attr("src",`webImages/close.png`);
      $(".header__left-menu").toggleClass("active")
    })



    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
          $('.header').addClass('go-top');
      } else {
          $('.header').removeClass('go-top');
      }
    })