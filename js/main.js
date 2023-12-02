$(".menu a, .scroll a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    tops = top - 80;
    $('body,html').animate({ scrollTop: tops }, 1500);
});

$(function () {
    let header = $('.header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            header.addClass('header-fixed');
        } else {
            header.removeClass('header-fixed');
        }
    });
});

$('a[href="' + this.location.pathname + '"]').parent().addClass('header-fixed');

const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.menu__link').forEach((link) => {
                let id = link.getAttribute('href').replace('#', '');
                if (id === entry.target.id) {
                    link.classList.add('link-active');
                } else {
                    link.classList.remove('link-active');
                }
            });
        }
    });
}, {
    threshold: 0.5
});// для подсветки пунктов меню

document.querySelectorAll('.section').forEach(section => { observer.observe(section) });

$(".trust__star").rateYo({
    rating: 3,
    starWidth: "15px",
    spacing: "7px",
    ratedFill: "#E27B3A",
    normalFill: "#E2E2E2"
});

$('.trust__slider').slick({
    arrows: true,
    infinite: false,
    nextArrow: '<button type="button"class="slick-next"><img class="next" src="images/icons/arrow_top.svg"></button>',
    prevArrow: '<button type="button"class="slick-prev"><img class="prev" src="images/icons/arrow_top.svg"></button>',
});

$('.menu__btn, .menu a').on('click', function () {
    $('.menu__btn, .menu__items').toggleClass('active');
    // для крестика и для меню и что бы закрывалось меню после выбора сcылки
});