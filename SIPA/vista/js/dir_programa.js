$(function () {
    perfil();

    $('#perfil').on('click', function () {
        perfil();
    });

    $('#practica').on('click', function () {

    });

    $('#comentarios').on('click', function () {
        $.post("controlador/fachada.php", {
            clase: 'Director_programa',    
            oper: 'comentarios'
        }, function (data) {
            //console.log(data);
            $('#contenido').html(data);
            //location.reload();
        }, 'json');
    });

    $('#reportes').on('click', function () {

    });

    $('#cambiarContrasena').on('click',function(){
       $('#contenido').load('vista/html/cambioClave.html');
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
