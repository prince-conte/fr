$( function() {


    function footerInit() {
        var windowHeight = $(window).height();
        var headerHeight = $('.js-site-header').outerHeight();
        var footerHeight = $('.js-site-footer').outerHeight();
        var mainMinHeight = windowHeight - headerHeight;

        $('.js-main')
            .css('min-height', mainMinHeight)
            .css('padding-bottom', footerHeight);
    }

    footerInit();


    $(document).on('click touchend', '.js-open-online', function () {

        $(this).toggleClass('is-active');
        footerInit();

        return false
    });

    $(window).smartresize(function() {
        footerInit()
    });
});
