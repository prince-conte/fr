$( function() {

    function footerInit() {

        var pathname = window.location.pathname; // Returns path only
        // var url      = window.location.href;     // Returns full URL

        console.log(pathname);

        if (pathname === '/') {

            $('.js-navigate-item-1').addClass('is-current');

        } else if (pathname === '/profile.html') {

            $('.js-navigate-item-2').addClass('is-current');

        } else if (pathname === '/contacts.html') {

            $('.js-navigate-item-3').addClass('is-current');

        }


        var windowHeight = $(window).height();
        var headerHeight = $('.js-site-header').outerHeight();
        var footerHeight = $('.js-site-footer').outerHeight();


        if (Modernizr.mq(mq.sm.str)) {

            var mainMinHeight = windowHeight - headerHeight;


            $('.js-main')
                .css('min-height', mainMinHeight)
                .css('padding-bottom', footerHeight);
        }

        if (Modernizr.mq(mq.sm.str)) {

            var mainMinHeight = windowHeight - headerHeight;


            $('.js-main')
                .css('min-height', mainMinHeight)
                .css('padding-bottom', footerHeight);
        }

        if (Modernizr.mq(mq.xs.str)) {

            var mainMinHeight = windowHeight;


            $('.js-main')
                .css('min-height', mainMinHeight)
                .css('padding-bottom', footerHeight)
                .css('padding-top', headerHeight);
        }

    }

    footerInit();

    $(window).smartresize(function() {
        footerInit()
    });

});
