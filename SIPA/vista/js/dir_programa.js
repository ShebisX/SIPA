$(window).on('load', function () {
    perfil();

    $('#perfil').on('click', function () {
        perfil();
    });

    $('#practica').on('click', function () {

    });

    $('#comentarios').on('click', function () {

    });

    $('#reportes').on('click', function () {

    });

    $("#cerrarSesion").on('click', function () {
        console.log("Si");
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'cerrarSesion'
        }, function (data) {
            location.reload();
        }, 'json');
    });
});
