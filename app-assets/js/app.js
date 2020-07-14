var App = function () {


    //
    // Setup module components
    //

    // Transitions
    // -------------------------

    // Disable all transitions
    var _transitionsDisabled = function() {
        $('body').addClass('no-transitions');
    };

    // Enable all transitions
    var _transitionsEnabled = function() {
        $('body').removeClass('no-transitions');
    };


    // Sidebars
    // -------------------------

    //
    // On desktop
    //

    // Resize main sidebar
    var _sidebarMainResize = function() {

        // Flip 2nd level if menu overflows
        // bottom edge of browser window
        var revertBottomMenus = function() {
            $('.sidebar-main').find('.nav-sidebar').children('.nav-item-submenu').hover(function() {
                var totalHeight = 0,
                    $this = $(this),
                    navSubmenuClass = 'nav-group-sub',
                    navSubmenuReversedClass = 'nav-item-submenu-reversed';

                totalHeight += $this.find('.' + navSubmenuClass).filter(':visible').outerHeight();
                if($this.children('.' + navSubmenuClass).length) {
                    if(($this.children('.' + navSubmenuClass).offset().top + $this.find('.' + navSubmenuClass).filter(':visible').outerHeight()) > document.body.clientHeight) {
                        $this.addClass(navSubmenuReversedClass)
                    }
                    else {
                        $this.removeClass(navSubmenuReversedClass)
                    }
                }
            });
        }

        // If sidebar is resized by default
        if($('body').hasClass('sidebar-xs')) {
            revertBottomMenus();
        }

        // Toggle min sidebar class
        $('.sidebar-main-toggle').on('click', function (e) {
            e.preventDefault();

            $('body').toggleClass('sidebar-xs').removeClass('sidebar-mobile-main');
           
            revertBottomMenus();
        });
    };

    // Toggle main sidebar
    var _sidebarMainToggle = function() {
        $(document).on('click', '.sidebar-main-hide', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-main-hidden');
        });
    };

    // Toggle content sidebar
    var _sidebarComponentToggle = function() {
        $(document).on('click', '.sidebar-component-toggle', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-component-hidden');
        });
    };


    //
    // On mobile
    //


    // Toggle main sidebar on mobile
    var _sidebarMobileMainToggle = function() {
        $('.sidebar-mobile-main-toggle').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-right');
            $('.page-content').prepend('<div class="sb-overlay"></div>');
            
            if($('.sidebar-main').hasClass('sidebar-fullscreen')) {
                $('.sidebar-main').removeClass('sidebar-fullscreen');
            }
        });

        $('.sidebar-mobile-main-close').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('sidebar-mobile-main');
            $('.sb-overlay').remove();
        });

       

    };
    $('body').on('click', '.sb-overlay', function(e) {
        e.preventDefault();
        $('body').removeClass('sidebar-mobile-main');
        $(this).remove();
    });

    // Toggle component sidebar on mobile
    var _sidebarMobileComponentToggle = function() {
        $('.sidebar-mobile-component-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-component');
        });
    };


    // Navigations
    // -------------------------

    // Sidebar navigation
    var _navigationSidebar = function() {

        // Define default class names and options
        var navClass = 'nav-sidebar',
            navItemClass = 'nav-item',
            navItemOpenClass = 'nav-item-open',
            navLinkClass = 'nav-link',
            navSubmenuClass = 'nav-group-sub',
            navSlidingSpeed = 250;

        // Configure collapsible functionality
        $('.' + navClass).each(function() {
            $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
                e.preventDefault();

                // Simplify stuff
                var $target = $(this),
                    $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass);

                // Collapsible
                if($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
                    $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
                else {
                    $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
                }

                // Accordion
                if ($target.parents('.' + navClass).data('nav-type') == 'accordion') {
                    $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
            });
        });

        // Disable click in disabled navigation items
        $(document).on('click', '.' + navClass + ' .disabled', function(e) {
            e.preventDefault();
        });

        // Scrollspy navigation
        $('.nav-scrollspy').find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).off('click');
    };

    // Navbar navigation
    var _navigationNavbar = function() {

        // Prevent dropdown from closing on click
        $(document).on('click', '.dropdown-content', function(e) {
            e.stopPropagation();
        });

        // Disabled links
        $('.navbar-nav .disabled a, .nav-item-levels .disabled').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // Show tabs inside dropdowns
        $('.dropdown-content a[data-toggle="tab"]').on('click', function(e) {
            $(this).tab('show');
        });
    };


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
        $cardCollapsedClass.find('[data-action=collapse]');

        // Collapse on click
        $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
            var $target = $(this),
                slidingSpeed = 150;

            e.preventDefault();
            $target.parents('.card').toggleClass('card-collapsed');
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


    // Misc
    // -------------------------

    // Dropdown submenus. Trigger on click
    var _dropdownSubmenu = function() {

        // All parent levels require .dropdown-toggle class
        $('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            // Remove "show" class in all siblings
            $(this).parent().siblings().removeClass('show').find('.show').removeClass('show');

            // Toggle submenu
            $(this).parent().toggleClass('show').children('.dropdown-menu').toggleClass('show');

            // Hide all levels when parent dropdown is closed
            $(this).parents('.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show, .dropdown-submenu.show').removeClass('show');
            });
        });
    };

    // Header elements toggler
    var _headerElements = function() {

        // Toggle visible state of header elements
        $('.header-elements-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).parents('[class*=header-elements-]').find('.header-elements').toggleClass('d-none');
        });

        // Toggle visible state of footer elements
        $('.footer-elements-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).parents('.card-footer').find('.footer-elements').toggleClass('d-none');
        });
    };


    // Components
    // -------------------------

    // Tooltip
    var _component_tooltip = function() {

        // Initialize
        $('[data-popup="tooltip"]').tooltip();

        // Demo tooltips, remove in production
        var demoTooltipSelector = '[data-popup="tooltip-demo"]';
        if($(demoTooltipSelector).is(':visible')) {
            $(demoTooltipSelector).tooltip('show');
            setTimeout(function() {
                $(demoTooltipSelector).tooltip('hide');
            }, 2000);
        }
    };

    // Popover
    var _component_popover = function() {
        $('[data-popup="popover"]').popover();
    };

    // Datatable 
    var _component_datatable = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }
    
        // Setting datatable defaults
        $.extend( $.fn.dataTable.defaults, {
            autoWidth: false,
            responsive: true,
            dom: '<"datatable-header"f><"datatable-body"t><"datatable-footer"<"datatable-li"li>p>',
            language: {
                decimal:        "",
                emptyTable:     "Không có dữ liệu trong bảng",
                info:           " Tổng số _TOTAL_ bản ghi",
                infoEmpty:      "Không có bản ghi nào",
                infoFiltered:   "(filtered from _MAX_ total entries)",
                infoPostFix:    "",
                thousands:      ",",
                lengthMenu:     " _MENU_ ",
                loadingRecords: "Đang tải...",
                processing:     "Đang xử lý...",
                search:         "",
                searchPlaceholder: 'Tìm kiếm nhanh ...',
                zeroRecords:    "Không tìm thấy hồ sơ phù hợp",
                paginate: {
                    first:      "Đầu",
                    last:       "Cuối",
                    next:       "Sau >>",
                    previous:   "<< Trước"
                },
                aria: {
                    sortAscending:  ": kích hoạt để sắp xếp cột tăng dần",
                    sortDescending: ": kích hoạt để sắp xếp cột giảm dần"
                },
                buttons: {
                    copyTitle: 'Đã thêm vào clipboard',
                    copyKeys: 'Nhấn ctrl hoặc <i>\u2318</i> + C để sao chép dữ liệu từ bảng vào khay nhớ tạm của bạn. Để hủy, bấm vào tin nhắn này hoặc nhấn Esc.',
                    copySuccess: {
                        _: 'Sao chép %d dòng ',
                        1: 'Sao chép 1 dòng '
                    }
                }
            }
        });
    
        $('.datatable').find('tr').each(function(){
            $(this).find('th').eq(0).before('<th width="1%"></th>');
            $(this).find('td').eq(0).before('<td></td>');
        });
    
        var v_datatable = $('.datatable').DataTable( {
            autoWidth: false,
            responsive: {
                details: {
                    type: 'column'
                },
                breakpoints: [
                    {name: 'desktop', width: Infinity},
                    {name: 'tablet-l', width: 1200},
                    {name: 'tablet-p', width: 992},
                    {name: 'mobile-l', width: 576},
                    {name: 'mobile-p', width: 320}
                ]
            },
            columnDefs: [
                {
                    className: 'control not-desktop text-center',
                    orderable: false,
                    targets:   0
                },
            ],
            lengthMenu: [
                [10, 20, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, -1], 
                [10, 20, 50, 100, 125, 150, 200, 250, 300, 400, 500, 1000, "Tất cả"]
            ],
        });
    
        $( "[datatable-collapse]" ).on("shown.bs.collapse", function() {
            $.each($.fn.dataTable.tables(true), function(){
                $(this).DataTable().columns.adjust().draw();
            });
            v_datatable;
        });
    
        $('[datatable-modal]').on('shown.bs.modal', function(e){
            $($.fn.dataTable.tables(true)).DataTable()
               .columns.adjust()
               .responsive.recalc();
         });
    
      
    };
    
    var _component_tooltip_tipsy = function(){
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
    }

    // Select2
    var _component_select2 = function() {
        if ($('[select2]').length > 0) {
            if (!$().select2) {
                console.warn('Warning - select2.min.js is not loaded.');
            }
            $('[select2]').select2({ 
                language: "vi",
                minimumResultsForSearch: 5,
                width: '100%',
            });
        }
    }
    
    // Datepicker
    var _component_datepicker = function(){
        if ($().datepicker) {
            $('.datepicker').datepicker({
                language: "vi",
                todayBtn: "linked",
            });
        }
    }
    
    // Cleave js: dinh dang kieu nhap du lieu input
    var _component_input_type = function(){
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
    }

    var _component_repeater = function(){
        if ($('.lich-thanh-toan').length > 0) {
            if (!$().repeater) {
                console.warn('Warning - repeater js is not loaded.');
            }
            $('.lich-thanh-toan').each(function( index ) {
                $(this).repeater({
                    show: function () {
                        $(this).slideDown();
                        // console.log($())
                        _component_input_type();
                        _component_datepicker();
                        _component_select2();
                    },
                    hide: function (deleteElement) {
                        if(confirm('Xoa dong nay ?')) {
                            $(this).slideUp(deleteElement);
                        }
                    }
                });
            });
    
        }
    }

    // DateRange js
    var _component_daterange = function() {
        if (!$().daterangepicker) {
            console.warn('Warning - daterangepicker.js is not loaded.');
            return;
        }
        // Initialize
        $('.daterange-ranges').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2010',
                maxDate:  '01/01/2020',
                dateLimit: { days: 6000 },
                ranges: {
                    'Hôm nay': [moment(), moment()],
                    'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    '7 ngày trước': [moment().subtract(6, 'days'), moment()],
                    'Tháng trước': [moment().subtract(29, 'days'), moment()],
                    'Tháng này': [moment().startOf('month'), moment().endOf('month')],
                    'Tháng sau': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: $('html').attr('dir') == 'rtl' ? 'right' : 'left',
                applyClass: 'btn bg-color btn-block',
                cancelClass: 'btn btn-light btn-block',
                locale: {
                    format: 'DD/MM/YYYY',
                    direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr',
                    applyLabel: 'Chọn',
                    cancelLabel: 'Xóa',
                    startLabel: 'Ngày bắt đầu',
                    endLabel: 'Ngày kết thúc',
                    customRangeLabel: 'Tùy chỉnh',
                }
            },
            function(start, end) {
                $('.daterange-ranges span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
            }
        );
        $('.daterange-ranges span').html(moment().subtract(29, 'days').format('DD/MM/YYYY') + ' - ' + moment().format('DD/MM/YYYY'));
    };




    //
    // Return objects assigned to module
    //

    return {

        // Disable transitions before page is fully loaded
        initBeforeLoad: function() {
            _transitionsDisabled();
        },

        // Enable transitions when page is fully loaded
        initAfterLoad: function() {
            _transitionsEnabled();
        },

        // Initialize all sidebars
        initSidebars: function() {

            // On desktop
            _sidebarMainResize();
            _sidebarMainToggle();
            _sidebarComponentToggle();

            // On mobile
            _sidebarMobileMainToggle();
            _sidebarMobileComponentToggle();
        },

        // Initialize all navigations
        initNavigations: function() {
            _navigationSidebar();
            _navigationNavbar();
        },

        // Initialize all components
        initComponents: function() {
            _component_tooltip();
            _component_popover();
            _component_daterange();
            _component_repeater();
            _component_datatable();
            _component_tooltip_tipsy();
            _component_select2();
            _component_datepicker();
            _component_input_type();
        },

        // Initialize all card actions
        initCardActions: function() {
            _cardActionReload();
            _cardActionCollapse();
            _cardActionRemove();
            _cardActionFullscreen();
        },

        // Dropdown submenu
        initDropdownSubmenu: function() {
            _dropdownSubmenu();
        },

        initHeaderElementsToggle: function() {
            _headerElements();
        },

        // Initialize core
        initCore: function() {
            App.initSidebars();
            App.initNavigations();
            App.initComponents();
            App.initCardActions();
            App.initDropdownSubmenu();
            App.initHeaderElementsToggle();
        }
    }
}();


// Initialize module
// ------------------------------

// When content is loaded
document.addEventListener('DOMContentLoaded', function() {
    App.initBeforeLoad();
    App.initCore();
});

// When page is fully loaded
window.addEventListener('load', function() {
    App.initAfterLoad();
});