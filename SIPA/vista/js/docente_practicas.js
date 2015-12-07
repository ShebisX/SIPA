$(function () {

    $.post("controlador/fachada.php", {
        clase: 'Docente',
        oper: 'practicas',
    }, function (data) {
        //console.log(data);
        var selBox = $("#practicas");
        selBox.empty();
        selBox.append(data);
    }, 'json');

    $('#selPractica').on('click', function () {
        console.log($('#practicas').val());
        $.post("controlador/fachada.php", {
            clase: 'Docente',
            oper: 'getPractica',
            idPractica: $('#practicas').val()
        }, function (data) {
            console.log(data);
            $('#contenido').html(data);
        }, 'json');
    });
});