$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.search_icon').click(function () {
        $('.search_input').toggleClass('active')
    })
})

//Adaptive functions
$(window).resize(function (event) {
    adaptive_function();
});
function adaptive_header(w, h) {
    var headerMenu = $('.adpt_social');
    var headerLang = $('.social');
    if (w < 769) {
        if (!headerLang.hasClass('done')) {
            headerLang.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerLang.hasClass('done')) {
            headerLang.removeClass('done').prependTo($('.main_social'));
        }
    }
}
function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();


$(window).resize(function (event) {
    adaptive_function2();
});
function adaptive_header2(w, h) {
    var headerMenu2 = $('.adpt_search');
    var headerLang2 = $('.search');
    if (w < 769) {
        if (!headerLang2.hasClass('done')) {
            headerLang2.addClass('done').appendTo(headerMenu2);
        }
    } else {
        if (headerLang2.hasClass('done')) {
            headerLang2.removeClass('done').prependTo($('.main_search'));
        }
    }
}
function adaptive_function2() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header2(w, h);
}
adaptive_function2();

// $(document).ready(function () {
//     $('.header__link').hover(function (event) {
//         $('.menu_drop').toggleClass('active');
//     });
// });

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});