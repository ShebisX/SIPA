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

            var res = key.split("_");      
            if(res.length>1){
                html += '<br><p><b>' + res[0]+" "+res[1] + ':</b> ' + value + '</p>';

            }else{
                html += '<br><p><b>' + res[0] + ':</b> ' + value + '</p>';
            }
        });

            $("#contenido").html(html);
        }, 'json');
    });

    $('#comentarios').on('click', function () {
        $.post("controlador/fachada.php", {
            clase: 'Estudiante',
            oper: 'comentarios'
        }, function (data) {
            //console.log(data);
            $('#contenido').html(data);
            //location.reload();
        }, 'json');
    });

    $('#reportes').on('click', function () {
        $.post("controlador/fachada.php", {
            clase: 'UtilReportes',
            oper: 'generarConvenio',
            tipo: 'plantilla_constancia'
        }, function (data) {
            //console.log(data);
            $('#contenido').html(data);
            //location.reload();
        }, 'json');
    });


    $('#cambiarContrasena').on('click',function(){
        $('#contenido').load('vista/html/cambioClave.html');
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
