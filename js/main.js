





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
        460: {
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
      // autoplay: {
      //     delay: 10000,
      //     disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-paginationbanner",
        clickable: true,
      },
    })



    var swiper3 = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper4 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper3,
      },
    });

    $(".Categories button").click(function() {
        $(this).toggleClass("active")
    })
    $(".sortbtn").click(function(e) {
      e.preventDefault()
        $(".sortbtn").removeClass("active")
        $(this).addClass("active")
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
      $(".mobilenav.active img").attr("src",`webImages/close.webp`);
      $(".header__left-menu").toggleClass("active")
      $(".backBOx").toggleClass("active")
    })
    $(".backBOx").click(function () {
      let img = $(".mobilenav img").attr(`data-srcs`)
      $(".mobilenav").removeClass(`active`)
      $(".mobilenav img").attr("src",`${img}`)
      $(".header__left-menu").toggleClass("active")
      $(".backBOx").toggleClass("active")
    })



    $(".section1btn").click(function (e) {
      e.preventDefault()
      $(this).addClass("active")
    })
    $(".sortttab li input").change(function (e) {
      // e.preventDefault()
      $(this).closest("li").toggleClass("active")
    })



    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
          $('.header').addClass('go-top');
      } else {
          $('.header').removeClass('go-top');
      }
    })


    $(".sectionBrandMain__leftBox-top span").click(function () {
      $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
          $(this).parent(".sectionBrandMain__leftBox-top").next().css("maxHeight",$(this).parent(".sectionBrandMain__leftBox-top").next().get(0).scrollHeight);
          
        }
        else {
          $(this).parent(".sectionBrandMain__leftBox-top").next().css("maxHeight",0);
  
        }
    // }
  });


//   function getLanguageParameter() {
//     return "ar" == new URL(window.location.href).pathname.split("/")[1]
// }

$(".languagess a").click(function(e) {
  e.preventDefault()
  $("body").toggleClass("arabic");
})

// var language = getLanguageParameter();
// language ? $("body").addClass("arabic") : console.log("Language parameter not found in the URL.");