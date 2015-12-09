$(function () {
	
            $.post("controlador/fachada.php", {
                clase: 'Localidad',
                oper: 'getLocalidades'

            }, function(data) {
            	console.log(data);
                    $("#localidad").html(data);
            }, 'json');

            $('#btnAdd').on('click', function(){
            	$.post("controlador/fachada.php", {
	                clase: 'Sucursal',
	                oper: 'add',
	                id_sucursal: $('#id_sucursal').val(),
	                nombre: $('#nombre').val(),
	                direccion: $('#direccion').val(),
	                localidad: $('#localidad').val(),
	                nit_empresa: $('#nit_empresa').val()
	            }, function(data) {
	                console.log(data);
	            }, 'json');
            });
});