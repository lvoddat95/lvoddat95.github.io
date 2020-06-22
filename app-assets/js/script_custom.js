
$(function(){

    $("#input-chk-all").click(function () {
        $('.input-chk').not(this).prop('checked', this.checked);
    });


    $(document).on('click', function() {
        if ($('.card-search').length > 0) {
            $('.card-search').removeClass('overlay');
        }
    });
    
    
    $(".card-search").children().on('click', function (e) {
        e.stopPropagation();
        if ($(this).parent().hasClass('card-collapsed')) return false;

        $(this).parent().addClass('overlay');
    });
    
    if ($('.side-box').length > 0) {
        $(".side-box").on('click','.side-btn', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(this).parent().toggleClass('open');
        });
        $(".side-btn-close").click(function (e) {
            e.preventDefault();
            $(this).closest('.side-box').removeClass('open');
        });
    }
    

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
            blocks: [2, 4],
            numeral: true,
            delimiter: '',
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

    $('.media-list').perfectScrollbar();

    $('.dropdown-scrollable').perfectScrollbar();

    $('.nav-group-sub').perfectScrollbar();

    if( $('.chat-box').length > 0 ){
        
        $("#chat-circle").click(function() {    
            $(".chat").addClass('open');
        })
        
        $(".cb-toggle-close").click(function() {
            $(".chat").removeClass('open');

        })
    }

    
    $(".go-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 500);
    });

});

var _xoa_dong = function(p_this) {
    var r =confirm("Xoa doi tuong nay!");
    if (r == true) {
        $(p_this).closest('tr').remove();
    }
}

var on_change_dkbs = function() {
    var v_sum = 0;
    $('.dkbs > input:checked').each(function(i,obj) {
    });
}
