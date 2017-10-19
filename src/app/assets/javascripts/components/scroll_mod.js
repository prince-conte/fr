$(function(){

    $(window).scroll(function() {

        var headerHeight = $siteHeader.outerHeight();

        if ($(this).scrollTop() >= headerHeight) {
            $('.site-main').addClass('site-main-scroll-mod');
            $siteHeader.addClass('site-header-scroll-mod');
        }
        else {
            $('.site-main').removeClass('site-main-scroll-mod');
            $siteHeader.removeClass('site-header-scroll-mod');
        }

    });



});
