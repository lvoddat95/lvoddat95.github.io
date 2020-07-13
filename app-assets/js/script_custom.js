$(function(){

    if ($('[data-tooltip="tipsy"]').length > 0) {

        if (!$().tipsy) {
            console.warn('Warning - Tipsy js is not loaded.');
        }

        $('[data-tooltip="tipsy"]').each(function (index) {
            var $this = $(this);
            var v_gravity = '';
            var v_pos = $this.data('position');

            // Mac dinh hien thi "top"
            if (!v_pos){
                v_gravity = 's';
            }else if( v_pos == 'bottom' ){
                v_gravity = 'n';
            }else if( v_pos == 'left' ){
                v_gravity = 'e';
            }else if( v_pos == 'right' ){
                v_gravity = 'w';
            }else if( v_pos == 'bottom-left' ){
                v_gravity = 'ne';
            }else if( v_pos == 'bottom-right' ){
                v_gravity = 'nw';
            }else if( v_pos == 'top-left' ){
                v_gravity = 'se';
            }else if( v_pos == 'top-right' ){
                v_gravity = 'sw';
            }

            $this.tipsy({
                gravity: v_gravity,
            });
        });

    }

    if ($('[select2]').length > 0) {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
        }
        $('[select2]').each(function (i, obj) {
            if ( obj.length > 0 ){
                $(obj).select2({ 
                    language: "vi",
                    minimumResultsForSearch: 5,
                    width: '100%',
                });
            }
        });
    }



    $("#input-chk-all").click(function () {
        $('.input-chk').not(this).prop('checked', this.checked);
    });

    $(".btn-act-toggle").click(function () {
        $(this).parents('.quick-action').toggleClass('toggle');
    });

    // $(document).on('click', function() {
    //     if ($('.card-search').length > 0) {
    //         $('.card-search').removeClass('overlay');
    //     }
    // });
    
    
    // $(".card-search").children().on('click', function (e) {
    //     e.stopPropagation();
    //     if ($(this).parent().hasClass('card-collapsed')) return false;

    //     $(this).parent().addClass('overlay');
    // });
    
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
        if (!$().repeater) {
            console.warn('Warning - repeater js is not loaded.');
        }
        $('.lich-thanh-toan').each(function( index ) {
            $(this).repeater({
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    if(confirm('Xoa dong nay ?')) {
                        $(this).slideUp(deleteElement);
                    }
                }
            });
        });

    }

    if ($().perfectScrollbar) {
        $('.dropdown-scrollable').perfectScrollbar();
        $('.nav-group-sub').perfectScrollbar();
    }

    if( $('.chat-box').length > 0 ){
        
        $(".chat-circle").click(function() {    
            $(".chat").toggleClass('open');
        })
        
        $(".cb-toggle-close").click(function() {
            $(".chat").removeClass('open');

        })
    }



    $(".go-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 500);
    });

    includeHTML();

});
function includeHTML() {
    alert('asd')
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
};

var on_change_hinh_thuc_khai_thac = function(p_this){
    console.log(p_this.value);
    if(p_this.value == 'tai-bh'){
        $('#tai-bh').slideDown();
        $('#dong-bh').slideUp();
    }else if(p_this.value == 'dong-bh'){
        $('#tai-bh').slideUp();
        $('#dong-bh').slideDown();
    }else{
        $('#tai-bh, #dong-bh').slideUp();
    }
    
}

var on_change_kenh_khai_thac = function(p_this){
    if(p_this.value == 'daili'){
        $('#moigioi').hide();
        $('#daili').show();
    }else if(p_this.value == 'moigioi'){
        $('#daili').hide();
        $('#moigioi').show();
    }else{
        $('#daili, #moigioi').show();
    }
}

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


var list_view = function(p_this){
    $(p_this).closest('.f-right').removeClass('grid').addClass('list');
}
var grid_view = function(p_this){
    $(p_this).closest('.f-right').removeClass('list').addClass('grid');
}

$(function(){
    var $window       = $(window);
    var lastScrollTop = 0;
    var $header       = $('.header-top');
    var $footer       = $('.mobile-bottom');
    var headerHeight  = $header.outerHeight();

    $(window).scroll(function() {
        var windowTop  = $window.scrollTop();

        if ( windowTop >= headerHeight ) {
            $header.addClass( 'sticky' );
        } else {
            $header.removeClass( 'sticky' ).removeClass( 'show' );
            $footer.removeClass( 'show' );
        }
        if ( $header.hasClass( 'sticky' ) ) {
            if ( windowTop < lastScrollTop ) {
                $header.addClass( 'show' );
                $footer.addClass( 'show' );
            } else {
                $header.removeClass( 'show' );
                $footer.removeClass( 'show' );
            }
        }
        if ( windowTop < lastScrollTop ) {
            $footer.addClass( 'show' );
        } else {
            $footer.removeClass( 'show' );
        }
        lastScrollTop = windowTop;
    } );
})


