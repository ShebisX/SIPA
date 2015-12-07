$(document).ready(function () {
    perfil();

    $('#perfil').on('click', function () {
        perfil();
    });

    $('#practica').on('click', function () {
        $('#contenido').load('vista/html/docente_practicas.html');
    });

    $('#comentarios').on('click', function () {

    });

    $('#reportes').on('click', function () {

    });

    $("#cerrarSesion").on('click', function () {
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'cerrarSesion'
        }, function (data) {
            location.reload();
        }, 'json');
    });

    function perfil() {
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'perfil',
        }, function (data) {
            //console.log(data);
            $("#contenido").html(data);
        }, 'json');
    }
});
