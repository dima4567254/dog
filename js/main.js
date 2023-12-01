
$(".trust__star").rateYo({
    rating: 3,
    starWidth: "15px",
    spacing: "7px",
    ratedFill: "#E27B3A",
    normalFill: "#E2E2E2"
});

$('.trust__slider').slick({
    // dots: true,
    arrows: true,
    // slidesToShow: 1,
    infinite: false,
    // slidesToShow: 2,
    // slidesToScroll: 1,

    // потом добавить в гайд и в снипеты
    // responsive: [
    //     {
    //         breakpoint: 1150,
    //         settings: {
    //             slidesToShow: 4,
    //         }
    //     },
    //     {
    //         breakpoint: 1000,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     },
    //     {
    //         breakpoint: 620,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //         }
    //     },
    // ],

    nextArrow: '<button type="button"class="slick-next"><img class="next" src="images/icons/arrow_top.svg"></button>',
    prevArrow: '<button type="button"class="slick-prev"><img class="prev" src="images/icons/arrow_top.svg"></button>',
});

$('.menu__btn').on('click', function () {
    $('.menu__items, .menu__btn').toggleClass('active');

    /*$('.header__logo').toggleClass('menu__list--active');
    $('.intro__btn').toggleClass('menu__list--active');*/
});

// $('.menu__btn').on('click', function () {
//     $('.menu__btn').toggleClass('active');

// });
/*	$(".menu a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    /*для закрыть меню*/
/*
          $('.menu__btn').on('click', function () {
              $('.menu__items').toggleClass('menu__items--active');
          });
          $('.menu__btn').on('click', function () {
              $('.menu__btn').toggleClass('active');
          });
       
     
       
       
       */