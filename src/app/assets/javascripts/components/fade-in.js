$(function () {

    function loadPage() {

        setTimeout(function () {


            $(".js-page-loading").fadeOut(500);

            setTimeout(function () {

                $(".js-page-body").addClass('fadeIn');

            }, 500);

        }, 500);


    }


    $(window).on('load', function () {

        loadPage();

    });

    setTimeout(function () {

        loadPage();

    }, 1000);

    $(window).smartresize(function () {

        $(".js-page-body").addClass('fadeOut');
        $(".js-page-body").removeClass('fadeIn')
            .removeClass('fadeOut');

        $(".js-page-loading").fadeIn(300);

        loadPage();
    });

});
