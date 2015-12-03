$(document).ready(function() {
	// This command is used to initialize some elements and make them work properly
	$.material.init();
	
	$("#cerrarSesion").on('click', function(){
		console.log("Si");
		$.post("controlador/fachada.php", {
			clase: 'Usuario',
			oper: 'cerrarSesion'
		}, function(data) {
			console.log("Siuuuu");
			location.reload();
		}, 'json');
	});
});


