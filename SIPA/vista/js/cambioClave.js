$(function() {
	$('.toggle').on('click', function() {
		$('.container').stop().addClass('active');
	});

	$('.close').on('click', function() {
		$('.container').stop().removeClass('active');
	});

	$('#form-cambio').submit(function(event) {
        $.post("controlador/fachada.php", {
            clase: 'Usuario',
            oper: 'cambiarContrasena',
            pass1: $("#pass1").val(),
            pass2: $("#pass2").val()
        }, function(data) {
            console.log(data);
            $("#principal").html(data);
        }, 'json');

        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
	});
});