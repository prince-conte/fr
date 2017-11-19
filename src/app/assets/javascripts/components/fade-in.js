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

});
