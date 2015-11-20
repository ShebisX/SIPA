$(document).on('ready', function() {

    $('.toggle').on('click', function() {
        $('.container').stop().addClass('active');
    });

    $('.close').on('click', function() {
        $('.container').stop().removeClass('active');
    });

    $("#login-form").submit(function(event) {
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'autenticar',
            user: $("#name").val(),
            pass: $("#pass").val()

        }, function(data) {
            //console.log(data);
            $("#principal").html(data);
        }, 'json');

        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });

    $("#reestablecer").on("click", function(event) {
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'reestablecerContrasena',
            user: $("#name").val()

        }, function(data) {
            if (data) {
                console.log("contraseña reestablecida");
            }
            else{
                console.log("error");
            }
        }, 'json');
    });

});