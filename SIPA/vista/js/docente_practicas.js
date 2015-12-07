$(window).on('load', function () {

    $.post("controlador/fachada.php", {
        clase: 'Docente',
        oper: 'practicas',
    }, function (data) {
        //console.log(data);
        $("#practicas").html(data);
    }, 'json');

    $('#selPractica').on('click', function () {

    });
});