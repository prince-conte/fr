$( function() {

    function footerInit() {

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
