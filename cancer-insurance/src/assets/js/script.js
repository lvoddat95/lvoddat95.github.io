$(document).ready(function () {

    $('.ci-package-slider').slick({
        infinite: false,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    if ($('#main-menu').length > 0) {
        if (typeof hcOffcanvasNav == 'undefined') {
            console.warn('Warning - hcOffcanvasNav Js is not loaded.');
            return;
        }
        if ($(".navbar-toggle").length == 0) {
            console.warn('Warning - Thieu button sidebar-mobile-main-toggle. Kiem tra lai HTML!');
            return;
        }
        var $nav = $('#main-menu').hcOffcanvasNav({
            disableAt: 1200,
            customToggle: '.navbar-toggle',
            levelSpacing: 0,
            navTitle: 'Danh Sách Menu',
            levelTitles: true,
            levelTitleAsBack: true,
            // pushContent: '#ci-content',
            labelBack: 'Quay lại',
            labelClose: '',
        });
        var Nav = $nav.data('hcOffcanvasNav');
    }


    $('.ci-btn').on("click", function () {
        $('html, body').animate({
            scrollTop: $("#ci-package-block").offset().top
        }, 900)
    });

    FLoatLabel();
    function FLoatLabel() {
        $(".float-label input").on("focus", function () {
            var _parent = $(this).parent();
            var _label = _parent.find('label');
            _label.addClass('label-focus');
        }).blur(function () {
            var _label = $(this).parent().find('label');
            if ($(this).val().trim() === '') {
                _label.stop().removeClass('label-focus');
            }
        });

         
    }

});

$(window).on('scroll', function (e) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    if ($('.ci-about-block').length > 0) {
        if ($(window).scrollTop() >= ($(".ci-about-block").offset().top - ($(window).height()))) {
            if (!$(".ci-about-block").hasClass("animated")) {
                $('.ci-count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(numberWithCommas(Math.ceil(now)));
                        }
                    });
                });
                // $("#triggered").addClass("show");
                $(".ci-about-block").addClass("animated");
            }
        }
    }
});