$(document).on('ready', function () {

    $("#login-button").on("click", function (event) {

        $.post("controlador/fachada.php", {
            clase: 'usuario',
            oper: 'autenticar',
            user: $("#name").val(),
            pass: $("#pass").val()

        }, function (data) {
            console.log(data);
            $("#principal").html(data);
        }, 'json');

        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });

});