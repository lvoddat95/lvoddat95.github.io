$(function () {
    if ($('.ci-package-slider').length > 0) {
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
                }
            ]
        });

    }

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


    $('.ci-btn-mua-bh').on("click", function () {
        $('html, body').animate({
            scrollTop: $("#ci-package-block").offset().top
        }, 900)
    });

    // Len dau trang
    $(".go-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    /* Script nav*/
    $(function () {
        var $window = $(window);
        var lastScrollTop = 0;
        var $header = $('#ci-header');
        var $footer = $('#footer');
        var headerHeight = $header.outerHeight();

        $(window).on("scroll", function () {
            var windowTop = $window.scrollTop();

            if (windowTop >= headerHeight) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky').removeClass('show');
                $footer.removeClass('show');
            }
            if ($header.hasClass('sticky')) {
                if (windowTop < lastScrollTop) {
                    $header.addClass('show');
                    $footer.addClass('show');
                } else {
                    $header.removeClass('show');
                    $footer.removeClass('show');
                }
            }
            if (windowTop < lastScrollTop) {
                $footer.addClass('show');
            } else {
                $footer.removeClass('show');
            }
            lastScrollTop = windowTop;
        });
    })




    SlickSlider();

    function SlickSlider() {
        if ($('.data-slick-slider').length > 0) {
            $('.data-slick-slider').each(function (e) {
                var seff = $(this);
                var otps = JSON.parse(JSON.stringify(seff.data('slick')));
                console.log(otps);
                console.log(typeof otps);

                seff.not('.slick-initialized').slick(otps);
            });
        }
    }

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

    $('.package-select-control').on("change", function () {
        var val = $(this).val();
        var sotienbh = $("#package-sotienbh").find(".sotienbh > span");
        var phibh = $("#package-phibh").find(".phibh > span");

        switch (val) {
            case "100":
                sotienbh.html('100.000.000');
                phibh.html('100.000');
                break;
            case "200":
                sotienbh.html('200.000.000');
                phibh.html('200.000');
                break;
            case "300":
                sotienbh.html('300.000.000');
                phibh.html('300.000');
                break;
            case "400":
                sotienbh.html('400.000.000');
                phibh.html('400.000');
                break;
            case "500":
                sotienbh.html('500.000.000');
                phibh.html('500.000');
                break;

            default:
                break;
        }
    });


});

// Show pass
var show_password = function (p_this) {
    var x = document.getElementById("password-input");
    if (x.type === "password") {
        x.type = "text";
        $(p_this).addClass('show');
    } else {
        x.type = "password";
        $(p_this).removeClass('show');
    }
}

var fancybox_modal = function (source, closeMethod = 'true') {

    if (closeMethod == false) {
        clickSlide = false;
        clickOutside = false;
    } else {
        clickSlide = 'close';
        clickOutside = 'close';
    }

    $.fancybox.open({
        src: source,
        opts: {
            // btnTpl: {
            //     smallBtn: "",
            // },
            touch: false,
            clickSlide: clickSlide,
            clickOutside: clickOutside
        }
    });
}

var AlertMessage = function (source, urlBack) {
    Swal.fire({
        template: '#alert-message-template',
        title: '<strong>THÔNG BÁO</strong>',
        html: $(source).html(),
        width: 600,
        backdrop: `rgba(0,0,0,.8)`,
        position: 'center',
        showCancelButton: false,
        showDenyButton: false,
        customClass: {
            htmlContainer: 'entry_content',
            confirmButton: 'btn ci-btn ci-bg-sub-color',
        },
        buttonsStyling: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = urlBack;
        }
    })
}

if ($('.prgoress_indicator').length) {
    if ($('.prgoress_indicator path').length) {
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
    }
    var offset = 250;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
        } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
        }
    });
    // jQuery('.prgoress_indicator').on('click', function (event) {
    //     event.preventDefault();
    //     jQuery('html, body').animate({
    //         scrollTop: 0
    //     }, duration);
    //     return false;
    // });
}

var fancybox_new_modal = function (source) {
    parent.jQuery.fancybox.getInstance().close();
    fancybox_modal(source, false);
}

var show_package_select = function (p_this) {
    $('.package-select').slideToggle("fast");
}

var chose_payment = function (p_this) {
    var input = $(p_this).find("input[type=radio]");
    input.prop("checked", true);

    var payment = input.val();
    var payment_info = $('#payment-info').data("info");

    if (payment == payment_info) {
        $('#payment-info').slideDown();
    } else {
        $('#payment-info').slideUp();
    }
}

var chosse_bank = function (p_this) {

}

$('#payment-info .img-bank').on('click', function (e) {
    $('#payment-info .img-bank').removeClass('active');
    $(this).addClass('active');
    let currentTab = $(this).attr('href');
    $('.bank-info ul').hide().removeClass('active');
    $(currentTab).show().addClass('active');
    return false;
});

var copy_text = function (element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).prev().text()).select();
    document.execCommand("copy");
    $(element).text("Đã sao chép");
    $temp.remove();
}

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

// UPload file
$(document).ready(function () {

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function formatDate(date) {
        return [
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
            date.getFullYear(),
        ].join('/');
    }

    $('.input-file').each(function (index, elem) {
        let file_list = $(elem).closest('tr').find('.input-list-files');
        $(elem).on('change', function (event) {
            var files = event.target.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                console.log(file);
                var html = `<div class="file-item">
                                <div class="file-item__text">${file.name}</div>
                                <div class="file-item__datetime">Ngày tải lên: ${formatDate(file.lastModifiedDate)}</div>
                                <div class="file-item__remove" data-id="${file.name}">Xoá</div>
                            </div>`;
                file_list.append(html);
            }
        });
    });


    $('body').on('click', '.file-item__remove', function () {
        $(this).parent('.file-item').remove();
    });

});

// $("[validation='true']").validate({
//     ignore: "[select2]",
//     rules: {
//         firstname: "required",
//         lastname: "required",
//         username: {
//             required: true,
//             minlength: 2
//         },
//         password: {
//             required: true,
//             minlength: 5
//         },
//         confirm_password: {
//             required: true,
//             minlength: 5,
//             equalTo: "#password"
//         },
//         email: {
//             required: true,
//             email: true
//         },
//         topic: {
//             required: "#newsletter:checked",
//             minlength: 2
//         },
//         agree: "required"
//     },
//     messages: {
//         firstname: "Please enter your firstname",
//         lastname: "Please enter your lastname",
//         username: {
//             required: "Please enter a username",
//             minlength: "Your username must consist of at least 2 characters"
//         },
//         password: {
//             required: "Please provide a password",
//             minlength: "Your password must be at least 5 characters long"
//         },
//         confirm_password: {
//             required: "Please provide a password",
//             minlength: "Your password must be at least 5 characters long",
//             equalTo: "Please enter the same password as above"
//         },
//         email: "Please enter a valid email address",
//         agree: "Please accept our policy",
//         topic: "Please select at least 2 topics"
//     }
// });


var toc = document.querySelector( '.toc' );
var tocPath = document.querySelector( '.toc-marker path' );
var tocItems;

// Factor of screen size that the element must cross
// before it's considered visible
var TOP_MARGIN = 0.1,
    BOTTOM_MARGIN = 0.2;

var pathLength;

var lastPathStart,
		lastPathEnd;

window.addEventListener( 'resize', drawPath, false );
window.addEventListener( 'scroll', sync, false );

drawPath();

function drawPath() {
  
  tocItems = [].slice.call( toc.querySelectorAll( 'li' ) );

  // Cache element references and measurements
  tocItems = tocItems.map( function( item ) {
    var anchor = item.querySelector( 'a' );
    var target = document.getElementById( anchor.getAttribute( 'href' ).slice( 1 ) );

    return {
      listItem: item,
      anchor: anchor,
      target: target
    };
  } );

  // Remove missing targets
  tocItems = tocItems.filter( function( item ) {
    return !!item.target;
  } );

  var path = [];
  var pathIndent;

  tocItems.forEach( function( item, i ) {

    var x = item.anchor.offsetLeft - 5,
        y = item.anchor.offsetTop,
        height = item.anchor.offsetHeight;

    if( i === 0 ) {
      path.push( 'M', x, y, 'L', x, y + height );
      item.pathStart = 0;
    }
    else {
      // Draw an additional line when there's a change in
      // indent levels
      if( pathIndent !== x ) path.push( 'L', pathIndent, y );

      path.push( 'L', x, y );
      
      // Set the current path so that we can measure it
      tocPath.setAttribute( 'd', path.join( ' ' ) );
      item.pathStart = tocPath.getTotalLength() || 0;
      
      path.push( 'L', x, y + height );
    }
    
    pathIndent = x;
    
    tocPath.setAttribute( 'd', path.join( ' ' ) );
    item.pathEnd = tocPath.getTotalLength();

  } );
  
  pathLength = tocPath.getTotalLength();
  
  sync();
  
}

function sync() {
  
  var windowHeight = window.innerHeight;
  
  var pathStart = pathLength,
      pathEnd = 0;
  
  var visibleItems = 0;
  
  tocItems.forEach( function( item ) {

    var targetBounds = item.target.getBoundingClientRect();
    
    if( targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * ( 1 - BOTTOM_MARGIN ) ) {
      pathStart = Math.min( item.pathStart, pathStart );
      pathEnd = Math.max( item.pathEnd, pathEnd );
      
      visibleItems += 1;
      
      item.listItem.classList.add( 'visible' );
    }
    else {
      item.listItem.classList.remove( 'visible' );
    }
    
  } );
  
  // Specify the visible path or hide the path altogether
  // if there are no visible items
  if( visibleItems > 0 && pathStart < pathEnd ) {
    if( pathStart !== lastPathStart || pathEnd !== lastPathEnd ) {
      tocPath.setAttribute( 'stroke-dashoffset', '1' );
      tocPath.setAttribute( 'stroke-dasharray', '1, '+ pathStart +', '+ ( pathEnd - pathStart ) +', ' + pathLength );
      tocPath.setAttribute( 'opacity', 1 );
    }
  }
  else {
    tocPath.setAttribute( 'opacity', 0 );
  }
  
  lastPathStart = pathStart;
  lastPathEnd = pathEnd;

}