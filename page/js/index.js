 function redirection(){  
  window.location ="vistas/principal.html";
  }  

 $("#login-button").on("click",function(event){

 	$post("controlador/fachada.php",{
		clase:'usuario',
		oper:'select',
		user:$("#name").val(),
		pass:$("#pass").val()
 	},function (data){
 		console.log(data);
 	});
 	
	event.preventDefault();	 
	$('form').fadeOut(500);
	$('.wrapper').addClass('form-success');
	 setTimeout ("redirection()", 3000);

    $.post
});