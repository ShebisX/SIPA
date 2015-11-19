$(function() {
	$.post("controlador/fachada.php", 
    {
        clase: 'usuario',
        oper: 'verificarCambio'
    }, function(data){
        if(data){
            alert("Cambie la contraseña");
        }
    }, 'json');
});