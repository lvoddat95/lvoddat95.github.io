/*!
 =========================================================
 * Convex Bootstrap 4 admin dashboard template - V1.0
 =========================================================

 * Product Page: http://pixinvent.com/demo/convex-bootstrap-admin-dashboard-template
 * Copyright 2017 Pixinvent Creative Studio (https://www.pixinvent.com)

 =========================================================
*/
(function (window, document, $) {
    'use strict';

    $(document).ready(function () {
        var $sidebar = $('.sidebar'),
            $sidebar_content = $('.sidebar-content'),
            $sidebar_img = $sidebar.data('image'),
            $sidebar_img_container = $('.sidebar-background'),
            $wrapper = $('.wrapper');

        // $sidebar_content.perfectScrollbar();

        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            $sidebar_img_container.css('background-image', 'url("' + $sidebar_img + '")');
        }

        if (!$wrapper.hasClass('nav-collapsed')) {
            $sidebar_content.find('li.active').parents('li').addClass('open');
            $sidebar_content.find('li.active').parent().show({
                done: function done() {
                    $(this).addClass('menu-open');
                }
            });
            $('.sidebar ul li:has(ul)').addClass('has-sub');
        }

        


        // Match the height of each card in a row
        setTimeout(function () {
            $('.row.match-height').each(function () {
                $(this).find('.card').not('.card .card').matchHeight(); // Not .card .card prevents collapsible cards from taking height
            });
        }, 500);

        $('.side-menu').on('click', function () {
            if ($(this).parent().find('ul').length) {
                if ($(this).parent().find('ul').first().is(':visible')) {
                    $(this).parent().removeClass('open');
                    $(this).parent().find('ul').first().slideUp({
                        done: function done() {
                            $(this).removeClass('menu-open');
                        }
                    });
                } else {
                    $(this).parent().addClass('open');
                    $(this).parent().find('ul').first().slideDown({
                        done: function done() {
                            $(this).addClass('menu-open');
                        }
                    });
                }
            }
        });
        // $subList.show().slideUp(200, function() {
        //     $(this).css('display', '');

        //     $(this).find('> li').removeClass('is-shown');

        //     $listItem.removeClass('open');

        //     if (callback) {
        //         callback();
        //     }
        // });
        $('.nav-toggle').on('click', function () {
            var $this = $(this),
                toggle_icon = $this.find('.toggle-icon'),
                toggle = toggle_icon.attr('data-toggle'),
                compact_menu_checkbox = $('.cz-compact-menu');

            if (toggle === 'expanded') {
                $wrapper.addClass('nav-collapsed');

                $('.nav-toggle').find('.toggle-icon').removeClass('ft-disc').addClass('ft-circle');
                toggle_icon.attr('data-toggle', 'collapsed');
                if (compact_menu_checkbox.length > 0) {
                    compact_menu_checkbox.prop('checked', true);
                }
            }
            else {
                $wrapper.removeClass('nav-collapsed menu-collapsed');

                $('.nav-toggle').find('.toggle-icon').removeClass('ft-circle').addClass('ft-disc');
                toggle_icon.attr('data-toggle', 'expanded');
                if (compact_menu_checkbox.length > 0) {
                    compact_menu_checkbox.prop('checked', false);
                }
            }
        });

        $sidebar.on('mouseenter', function () {
            if ($wrapper.hasClass('nav-collapsed')) {
                $wrapper.removeClass('menu-collapsed');
                var $listItem = $('.navigation li.nav-collapsed-open'),
                    $subList = $listItem.children('ul');

                $subList.hide().slideDown(300, function () {
                    $(this).css('display', '');
                });

                $sidebar_content.find('li.active').parents('li').addClass('open');
                $listItem.addClass('open').removeClass('nav-collapsed-open');
            }
        }).on('mouseleave', function (event) {
            if ($wrapper.hasClass('nav-collapsed')) {
                $wrapper.addClass('menu-collapsed');
                var $listItem = $('.navigation li.open'),
                    $subList = $listItem.children('ul');
                $listItem.addClass('nav-collapsed-open');

                $subList.show().slideUp(300, function () {
                    $(this).css('display', '');
                });

                $listItem.removeClass('open');
            }
        });

        if ($(window).width() < 992) {
            $sidebar.addClass('hide-sidebar');
            $wrapper.removeClass('nav-collapsed menu-collapsed');
        }
        $(window).resize(function () {
            if ($(window).width() < 992) {
                $sidebar.addClass('hide-sidebar');
                $wrapper.removeClass('nav-collapsed menu-collapsed');
            }
            if ($(window).width() > 992) {
                $sidebar.removeClass('hide-sidebar');
                if ($('.toggle-icon').attr('data-toggle') === 'collapsed' && $wrapper.not('.nav-collapsed menu-collapsed')) {
                    $wrapper.addClass('nav-collapsed menu-collapsed');
                }
            }
        });

        $(document).on('click', '.navigation li:not(.has-sub)', function () {
            if ($(window).width() < 992) {
                $sidebar.addClass('hide-sidebar');
            }
        });

        $(document).on('click', '.logo-text', function () {
            if ($(window).width() < 992) {
                $sidebar.addClass('hide-sidebar');
            }
        });


        $('.navbar-toggle').on('click', function (e) {
            e.stopPropagation();
            $sidebar.toggleClass('hide-sidebar');
        });

        $('html').on('click', function (e) {
            if ($(window).width() < 992) {
                if (!$sidebar.hasClass('hide-sidebar') && $sidebar.has(e.target).length === 0) {
                    $sidebar.addClass('hide-sidebar');
                }
            }
        });

        $('#sidebarClose').on('click', function () {
            $sidebar.addClass('hide-sidebar');
        });

        $('.noti-list').perfectScrollbar();

        $('.dropdown-scrollable').perfectScrollbar();

        // Page full screen
        $('.apptogglefullscreen').on('click', function (e) {
            if (typeof screenfull != 'undefined') {
                if (screenfull.isEnabled) {
                    screenfull.toggle();
                }
            }
        });

        if (typeof screenfull != 'undefined') {
            if (screenfull.isEnabled) {
                $(document).on(screenfull.raw.fullscreenchange, function () {
                    if (screenfull.isFullscreen) {
                        $('.apptogglefullscreen').find('i').toggleClass('ft-minimize ft-maximize');
                    }
                    else {
                        $('.apptogglefullscreen').find('i').toggleClass('ft-maximize ft-minimize');
                    }
                });
            }
        }
    });
})(window, document, jQuery);