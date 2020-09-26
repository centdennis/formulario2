


function validarformulario(formulario){
	
	var usuario = formulario.usuario;
	//validamos  lo que ingresa en la cajita de texto usuario y este valor lo guardamos en la variable usuario
	if(usuario.value == "" || usuario.value == "Escribir su usuario"){
		alert("Debe proporcionar un nombre de Usuario")//mostramos un mensaje
		usuario.focus();//coloca el cursor del mouse en la cajita de texto
		usuario.select();//seleccionamos este elemento, para que el usuario sepa que es lo que debe modificar
		return false; 	// retornamos false debido a que el formulario todavia no sera procesado por nuestro registroservlet
	}
	
	var contrasena = formulario.contrasena;
	
	if(contrasena.value == "" || contrasena.value.length < 3){
		alert("La contraseña debe ser menor de 3 caracteres");
		contrasena.focus();
		contrasena.select();
		return false;
		
	}
	var web = formulario.web;
	var checkseleccionado = false;	
	for(var i=0; i<web.length; i++){
		if(web[i].checked){
			checkseleccionado = true;
		}
	}
	if(!checkseleccionado){
		alert("Debe Seleccionar un Lenguaje de Programacion:");
		return false;
	}
	var generos = formulario.genero;
	//declaramos una variable inicialmente con el valor de false
	var radioseleccionado = false;
	for(var i=0; i<generos.length; i++){
		if (generos[i].checked){
			 radioseleccionado = true;
		}
	}
	if(!radioseleccionado){
		alert("Debe seleccionar un Genero:");
		return false;
	}
	var programador = formulario.programador;
	if(programador.value == ""){
		alert("Debe seleccionar un tipo de Programador");
		return false;
	}
	alert("Formulario valido. Enviando datos al Servidor");
	return true;
	
}
