"use strict";

var enable = {
    mq: true,
    mqDevice: true,

    doubleHover: true,

    jQueryUI: {
        autocomplete: true,
        datepicker: true,
        selectmenu: true
    },

    components: {
        icons: true,
        wysiwyg: true
    }
};
'use strict';

// Media queries
var mq = {};

function createMq(mqBreakpoints) {
    if (enable.mq) {
        var mqDevice = enable.mqDevice ? 'device-' : '';

        for (var i = 0; i < mqBreakpoints.length; i++) {
            var mqRange = i === 0 ? 'max' : 'min';

            mq[mqBreakpoints[i][0]] = {
                int: mqBreakpoints[i][1],
                str: '(' + mqRange + '-' + mqDevice + 'width: ' + mqBreakpoints[i][1] + 'px)'
            };
        }
    }
}

// Double hover
// https://gist.github.com/artpolikarpov/3428762 (modified)
var doubleHover = function doubleHover(selector, hoverClass, activeClass) {
    if (!Modernizr.touchevents) {
        $(document).on('mouseenter mouseleave', selector, function (e) {
            $(selector).filter('[href="' + $(this).attr('href') + '"]').toggleClass(hoverClass, e.type === 'mouseenter');
        }).on('mousedown mouseup', selector, function (e) {
            $(selector).filter('[href="' + $(this).attr('href') + '"]').toggleClass(activeClass, e.type === 'mousedown');
        });
    }
};

if (enable.doubleHover) {
    doubleHover('.js-hover', 'hover', 'active');
}

// Debounced Resize() jQuery Plugin
// https://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
(function ($, sr) {
    var debounce = function debounce(func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this,
                args = arguments;
            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null;
            }

            if (timeout) clearTimeout(timeout);else if (execAsap) func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize');
'use strict';

// Media queries (for example: xs, sm, md, lg, xl)
// Integer: mq.sm.int
// String:  Modernizr.mq(mq.sm.str);
createMq([['xs', 767], ['sm', 768], ['md', 1420]]);

var TRANSITION_DURATION_BASE = 200;

var $siteHeader = $('.js-site-header');
'use strict';

if (enable.jQueryUI.autocomplete === true) {
    var availableTags = ['ActionScript', 'AppleScript', 'Asp', 'BASIC', 'C', 'C++', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'Python', 'Ruby', 'Scala', 'Scheme'];
    var $autocomplete = $('.js-autocomplete-input');

    $autocomplete.autocomplete({
        source: availableTags,
        open: function open(event, ui) {
            $(event.target).addClass('ui-autocomplete-input-opened');
        },
        close: function close(event, ui) {
            $(event.target).removeClass('ui-autocomplete-input-opened');
        }
    });

    $(window).smartresize(function () {
        $autocomplete.autocomplete('close');
    });
}
'use strict';

if (enable.jQueryUI.datepicker === true) {
    var datepickerSetMinWidth = function datepickerSetMinWidth(input, dpDiv) {
        setTimeout(function () {
            $(dpDiv).css('min-width', '').css('min-width', $(input).outerWidth());
        }, 0);
    };

    // Force Datepicker open always under input


    var $datepicker = $('.js-datepicker-input');

    $.extend($.datepicker, {
        _checkOffset: function _checkOffset(inst, offset) {
            return offset;
        }
    });

    $datepicker.datepicker({
        prevText: '',
        nextText: '',
        beforeShow: function beforeShow(input, inst) {
            $(input).addClass('hasDatepickerFocus');

            datepickerSetMinWidth(input, inst.dpDiv);
        },
        onChangeMonthYear: function onChangeMonthYear(year, month, inst) {
            datepickerSetMinWidth(inst.input, inst.dpDiv);
        },
        onClose: function onClose(dateText, inst) {
            $(inst.input).removeClass('hasDatepickerFocus');
        },
        onSelect: function onSelect(dateText, inst) {
            $(inst.input).removeClass('hasDatepickerFocus');
        }
    });

    $(window).smartresize(function () {
        $datepicker.datepicker('hide');
    });
}
'use strict';

if (enable.jQueryUI.selectmenu === true) {
    var $selectmenu = $('.js-selectmenu-select');

    $selectmenu.selectmenu({
        create: function create(event, ui) {
            var $select = $(event.target);

            if ($select.find('option:first-child').is(':disabled')) {
                $select.next('.ui-selectmenu-button').find('.ui-selectmenu-text').addClass('ui-state-placeholder');
            }
        }
    });

    $(window).smartresize(function () {
        $selectmenu.selectmenu('close');
    });
}
"use strict";

if (enable.components.icons === true) {
    svg4everybody();
}
'use strict';

if (enable.components.wysiwyg === true) {
    var $wysiwyg = $('.js-wysiwyg');

    // Img
    $wysiwyg.find('> p > img').each(function () {
        $(this).css({
            height: '',
            width: ''
        }).unwrap();
    });

    // Table
    $wysiwyg.find('> table').each(function () {
        $(this).wrap('<div class="wysiwyg__table"/>');
    });

    // Video (Youtube, Vimeo)
    $wysiwyg.find('> iframe[src*="vimeo"], > iframe[src*="youtube"]').each(function () {
        $(this).wrap('<div class="wysiwyg__video"/>');
    });
}
'use strict';

$(function () {

    function footerInit() {

        var windowHeight = $(window).height();
        var headerHeight = $('.js-site-header').outerHeight();
        var footerHeight = $('.js-site-footer').outerHeight();

        if (Modernizr.mq(mq.sm.str)) {

            var mainMinHeight = windowHeight - headerHeight;

            $('.js-main').css('min-height', mainMinHeight).css('padding-bottom', footerHeight);
        }

        if (Modernizr.mq(mq.sm.str)) {

            var mainMinHeight = windowHeight - headerHeight;

            $('.js-main').css('min-height', mainMinHeight).css('padding-bottom', footerHeight);
        }

        if (Modernizr.mq(mq.xs.str)) {

            var mainMinHeight = windowHeight;

            $('.js-main').css('min-height', mainMinHeight).css('padding-bottom', footerHeight).css('padding-top', headerHeight);
        }
    }

    footerInit();

    $(window).smartresize(function () {
        footerInit();
    });
});
'use strict';

$(function () {

    var mobileMenuFade = $('.js-mobile-menu-fade');
    var mobileMenu = $('.js-mobile-menu');
    var toggled = 0;

    $(document).on('click', '.js-open-menu', function () {

        // burger style

        if (toggled == 0) {
            $('.burgx3').stop().transition({ rotate: "45", "margin-top": "13px" });
            $('.burgx2').stop().transition({ opacity: "0" }, "fast");
            $('.burgx').stop().transition({ rotate: "-45", "margin-top": "13px" });
            toggled++;
        } else {
            $('.burgx3').stop().transition({ rotate: "+=135", "margin-top": "3px" });
            $('.burgx2').transition({ opacity: "1" }, "fast");
            $('.burgx').stop().transition({ rotate: "-=135", "margin-top": "23px" });
            toggled--;
        }

        // menu

        if ($(this).hasClass('is-active')) {

            mobileMenu.removeClass('is-active');

            setTimeout(function () {

                mobileMenuFade.fadeOut(500);
            }, 500);

            $(this).removeClass('is-active');
        } else {

            mobileMenuFade.fadeIn(500);

            setTimeout(function () {

                mobileMenu.addClass('is-active');
            }, 500);

            $(this).addClass('is-active');
        }

        return false;
    });

    $(document).on('click', '.js-close-menu', function () {

        mobileMenu.removeClass('is-active');

        setTimeout(function () {

            mobileMenuFade.fadeOut(500);
        }, 500);

        $(this).removeClass('is-active');
        $('.js-open-menu').removeClass('is-active');

        // burger close

        $('.burgx3').stop().transition({ rotate: "+=135", "margin-top": "3px" });
        $('.burgx2').transition({ opacity: "1" }, "fast");
        $('.burgx').stop().transition({ rotate: "-=135", "margin-top": "23px" });
        toggled--;
    });
});
"use strict";

$(function () {});
'use strict';

$(function () {

    if (Modernizr.mq(mq.xs.str)) {

        $('.js-projects').slick({
            infinite: true,
            slidesToShow: 1,
            dots: false,
            arrows: false,
            slidesToScroll: 1
        });
    }
});
'use strict';

$(function () {

    $(window).scroll(function () {

        var headerHeight = $siteHeader.outerHeight();

        if ($(this).scrollTop() >= headerHeight) {
            $('.site-main').addClass('site-main-scroll-mod');
            $siteHeader.addClass('site-header-scroll-mod');
        } else {
            $('.site-main').removeClass('site-main-scroll-mod');
            $siteHeader.removeClass('site-header-scroll-mod');
        }
    });
});