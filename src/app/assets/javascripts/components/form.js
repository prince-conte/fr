$(function () {


    $(document).on('change', '#form input', function () {

        setTimeout(function() {

            if ($('#form .error').is(':visible')) {

                $('#send').prop('disabled', true);

                return false;

            } else {
                $('#send').prop('disabled', false);
            }

        }, 500);

    });

    $(document).on('click', '#send', function() {

        
        if ($('#form .error').is(':visible')) {

            return false;

        } else {

            var name = $( "#name" ).val();
            var company = $( "#company" ).val();
            var email = $( "#email" ).val();
            var message = $( "#message" ).val();

            $.post('mail.php', {'message' : message, 'name' : name, 'company' : company, 'email' : email}, function( data ){
                if (data == 1) {

                    $('.js-form-body').css('opacity','0');
                    $('#form').addClass('is-active-message');


                } else {
                    return false;
                }
            });

        }

        return false;
    });
    
    $(document).on('click', '.js-continue', function () {

        $("#form")[0].reset();

        $('#form').removeClass('is-active-message');
        $('.js-form-body').css('opacity','1');

        return false;

    });

});

