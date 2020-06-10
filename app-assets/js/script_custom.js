
$(function(){

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

    $('.noti-list').perfectScrollbar();

    $('.dropdown-scrollable').perfectScrollbar();

$('.nav-group-sub').perfectScrollbar();



});


var on_change_dkbs = function() {
    var v_sum = 0;
    $('.dkbs > input:checked').each(function(i,obj) {
    });
}
