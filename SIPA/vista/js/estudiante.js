$(document).ready(function () {
    perfil();

    $('#perfil').on('click', function () {
        perfil();
    });

    $('#practica').on('click', function () {
        $.post("controlador/fachada.php", {
            clase: 'Estudiante',
            oper: 'infoPractica'
        }, function (data) {
            //console.log(data);
            var html = '';
            $.each(data, function (key, value) {
                html += '<br><p><b>' + key + ':</b> ' + value + '</p>';
            });

            $("#contenido").html(html);
        }, 'json');
    });

    $('#comentarios').on('click', function () {
        
    });

    $('#reportes').on('click', function () {
        $("#contenido").load("vista/html/cambioClave.html")
    });

    $("#cerrarSesion").on('click', function () {
        console.log("data");
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
