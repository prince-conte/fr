
$(window).on('load', function() {


    setTimeout(function(){


        $(".js-page-loading").fadeOut(500);

        setTimeout(function(){

        $(".js-page-body").addClass('fadeIn');

        }, 1000);

    }, 1000);


});
