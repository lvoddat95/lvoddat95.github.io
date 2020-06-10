   // Card actions
// -------------------------

// Reload card (uses BlockUI extension)
var _cardActionReload = function() {
    $('.card [data-action=reload]:not(.disabled)').on('click', function (e) {
        e.preventDefault();
        var $target = $(this),
            block = $target.closest('.card');
        
        // Block card
        $(block).block({ 
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
            $(block).unblock();
        }, 2000); 
    });
};

// Collapse card
var _cardActionCollapse = function() {
    var $cardCollapsedClass = $('.card-collapsed');

    // Hide if collapsed by default
    $cardCollapsedClass.children('.card-header').nextAll().hide();

    // Rotate icon if collapsed by default
    $cardCollapsedClass.find('[data-action=collapse]').addClass('rotate-180');

    // Collapse on click
    $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
        var $target = $(this),
            slidingSpeed = 150;

        e.preventDefault();
        $target.parents('.card').toggleClass('card-collapsed');
        $target.toggleClass('rotate-180');
        $target.closest('.card').children('.card-header').nextAll().slideToggle(slidingSpeed);
    });
};

// Remove card
var _cardActionRemove = function() {
    $('.card [data-action=remove]').on('click', function (e) {
        e.preventDefault();
        var $target = $(this),
            slidingSpeed = 150;

        // If not disabled
        if(!$target.hasClass('disabled')) {
            $target.closest('.card').slideUp({
                duration: slidingSpeed,
                start: function() {
                    $target.addClass('d-block');
                },
                complete: function() {
                    $target.remove();
                }
            });
        }
    });
};

// Card fullscreen mode
var _cardActionFullscreen = function() {
    $('.card [data-action=fullscreen]').on('click', function (e) {
        e.preventDefault();

        // Define vars
        var $target = $(this),
            cardFullscreen = $target.closest('.card'),
            overflowHiddenClass = 'overflow-hidden',
            collapsedClass = 'collapsed-in-fullscreen',
            fullscreenAttr = 'data-fullscreen';

        // Toggle classes on card
        cardFullscreen.toggleClass('fixed-top h-100 rounded-0');

        // Configure
        if (!cardFullscreen.hasClass('fixed-top')) {
            $target.removeAttr(fullscreenAttr);
            cardFullscreen.children('.' + collapsedClass).removeClass('show');
            $('body').removeClass(overflowHiddenClass);
            $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').removeClass('d-none');
        }
        else {
            $target.attr(fullscreenAttr, 'active');
            cardFullscreen.removeAttr('style').children('.collapse:not(.show)').addClass('show ' + collapsedClass);
            $('body').addClass(overflowHiddenClass);
            $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').addClass('d-none');
        }
    });
};











$(function(){
    _cardActionReload();
    _cardActionCollapse();
    _cardActionRemove();
    _cardActionFullscreen();

    $("#input-chk-all").click(function () {
        $('.input-chk').not(this).prop('checked', this.checked);
    });

    

    if ($('.collapse-group').length > 0) {
        $('.cls_ckb').each(function (index) {
            var v_check = $(this).parent().next().hasClass('collapsed');
            if (v_check) {
                $(this).attr('checked', false);
                $(this).closest('.c-item').removeClass('open');
            } else {
                $(this).attr('checked', true);
                $(this).closest('.c-item').addClass('open');
            }
            $(this).change(function () {
                $(this).parent().next().trigger("click");
                var v_check = $(this).parent().next().hasClass('collapsed');
                if (v_check) {
                    $(this).closest('.c-item').removeClass('open');
                } else {
                    $(this).closest('.c-item').addClass('open');
                }
            });
        });
    }

    if ($().datepicker) {
        $('.datepicker').datepicker({
            language: "vi",
            todayBtn: "linked",
        });
    }
    $('[data-popup="popover"]').popover();

    $('.input-money').toArray().forEach(function (field) {
        new Cleave(field, {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
        });
    });

    $('.input-date').toArray().forEach(function (field) {
        new Cleave(field, {
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y'],
            copyDelimiter: true,
        });
    });

    $('.input-time').toArray().forEach(function (field) {
        new Cleave(field, {
            time: true,
            timePattern: ['h', 'm'],
            copyDelimiter: true,
        });
    });

    $('.input-float').toArray().forEach(function (field) {
        new Cleave(field, {
            numericOnly: true,
            delimiter: '.',
            blocks: [2, 4],
            copyDelimiter: true,
        });
    });
    $('.input-number').toArray().forEach(function (field) {
        new Cleave(field, {
            numericOnly: true,
        });
    });
    $('.input-phone').toArray().forEach(function (field) {
        new Cleave(field, {
            phone: true,
            phoneRegionCode: 'VN',
        });
    });
    
    if ($('.lich-thanh-toan').length > 0) {
        $('.lich-thanh-toan').repeater({
            show: function () {
                $(this).slideDown();
            },
            hide: function (deleteElement) {
                if(confirm('Xoa dong nay ?')) {
                    $(this).slideUp(deleteElement);
                }
            }
        });
    }






});


var on_change_dkbs = function() {
    var v_sum = 0;
    $('.dkbs > input:checked').each(function(i,obj) {
    });
}
