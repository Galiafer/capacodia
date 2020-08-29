
  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1000);
            return false;
    });
});

$(document).ready(function(){
    $('.about__container').slick({
        arrows: true,
        nextArrow: '<img class="about__arrow about__arrow-next" src="img/arrow__next.svg">',
        prevArrow: '<img class="about__arrow about__arrow-prev" src="img/arrow__prev.svg">',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
            }
          }
        ],
        swipe: true,
        swipeToSlide: true,
    });
});

  $(document).ready(function(){
    $('.trip__container').slick({
        arrows: true,
        nextArrow: '<img class="trip__arrow trip__arrow-next" src="img/arrow__next.svg">',
        prevArrow: '<img class="trip__arrow trip__arrow-prev" src="img/arrow__prev.svg">',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
            }
          }
        ],
        swipe: true,
        swipeToSlide: true,
    });
});

let phoneNorm = document.querySelector(".header__phone");

phoneNorm.addEventListener("mouseenter",function(){
  phoneNorm.classList.add("header__phone--show");
});
phoneNorm.addEventListener("mouseleave",function(){
  phoneNorm.classList.remove("header__phone--show");
});