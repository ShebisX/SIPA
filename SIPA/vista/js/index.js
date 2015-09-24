

$(document).on('ready', function () {

    $('#btnDepto').button().on('click', function () {
        $('#divDepto').load("vista/html/Departamento.html");
    });

    $('#btnProg').button().on('click', function () {
        $('#divPrograma').load("vista/html/programa.html");
    });

    $('#btnEmp').button().on('click', function () {
        $('#divEmpresa').load("vista/html/Empresa.html");
    });

   
});








