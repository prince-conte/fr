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
