$(function() {
	$('.toggle').on('click', function() {
		$('.container').stop().addClass('active');
	});

	$('.close').on('click', function() {
		$('.container').stop().removeClass('active');
	});

	$('#form-cambio').submit(function(event) {
        var pass1 = $("#pass1").val();
        var pass2 = $("#pass2").val();
        if(pass1!=pass2){
            alert("Las contraseñas no coinciden");
            event.preventDefault();
            return;
        }
        if(pass1.length < 6){
            alert("La contraseña debe tener minimo 6 caracteres de longitud");
            event.preventDefault();
            return;
        }else{
            $.post("controlador/fachada.php", {
                clase: 'Usuario',
                oper: 'cambiarContrasena',
                pass1: $("#pass1").val(),
                pass2: $("#pass2").val()
            }, function(data) {
                if(data){
                    $("#principal").html(data);
                }else{
                    console.log("error cambiando la contraseña");
                }
            }, 'json');
        }

        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });
});