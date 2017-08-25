$(function () {

    var mobileMenuFade = $('.js-mobile-menu-fade');
    var mobileMenu = $('.js-mobile-menu');
    var toggled = 0;


    $(document).on('click', '.js-open-menu', function () {


        // burger style

        if (toggled == 0) {
            $('.burgx3').stop().transition({rotate: "45", "margin-top": "13px"});
            $('.burgx2').stop().transition({opacity: "0"}, "fast");
            $('.burgx').stop().transition({rotate: "-45", "margin-top": "13px"});
            toggled++;
        }
        else {
            $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px"});
            $('.burgx2').transition({opacity: "1"}, "fast");
            $('.burgx').stop().transition({rotate: "-=135", "margin-top": "23px"});
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

        $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px"});
        $('.burgx2').transition({opacity: "1"}, "fast");
        $('.burgx').stop().transition({rotate: "-=135", "margin-top": "23px"});
        toggled--;

    });

});
