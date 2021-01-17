/* Autor: Sonia Anton Llanes */
/* Fecha: 13/01/2021 */
/* Practica 1 - Eventos de raton */


	function cambiarTexto(elemento,i,mensaje){
		document.getElementsByTagName(elemento)[i].innerHTML= mensaje;
	}

/* Ejercicio 4 */	
	function aparece(){
		document.getElementsByTagName("img")[0].style.display= "none";
		document.getElementsByTagName("img")[1].style.display= "inline";
	}
	function desaparece(){
		document.getElementsByTagName("img")[0].style.display= "inline";
		document.getElementsByTagName("img")[1].style.display= "none";
	}
	
/* Ejercicio 5 */
	var contSg= 0;  //variable para contar los segundos que está dentro
		function cuentaSegundos(){
			contSg++;
			console.log(contSg);
		}
	var intervaloSg;  //guardo el intervalo en una variable
	function startTemporizador(){
		intervaloSg= setInterval(cuentaSegundos, 1000);
		document.getElementById("muestraSg").innerHTML= "";
	}
	function stopTemporizador(){
		clearInterval(intervaloSg);
		document.getElementById("muestraSg").innerHTML= "Segundos dentro de este recuadro = " +contSg+ " sg";
		contSg=0;
	}

/* Ejercicio 6 */
		var celdasPintadas= new Array();  //creo un array para controlar color de las celdas (para el ejercicio 9)
		function celdaPintada(posicion,opcion){
			celdasPintadas[posicion]= opcion;
			return celdasPintadas;
		}
		
	function pintar(posicion, opcion){ //funcion que pinta pasandole la posicion de la celda y el número del color
		document.getElementsByTagName("td")[posicion].innerHTML= "";
		switch (opcion){
			case 0: document.getElementsByTagName("td")[posicion].style.backgroundColor= "white";
				break;
			case 1: document.getElementsByTagName("td")[posicion].style.backgroundColor= "yellow";
				break;
			case 2: document.getElementsByTagName("td")[posicion].style.backgroundColor= "darkorange";
				break;
			case 3: document.getElementsByTagName("td")[posicion].style.backgroundColor= "hotpink";
				break;
			case 4: document.getElementsByTagName("td")[posicion].style.backgroundColor= "red";
				break;
			case 5: document.getElementsByTagName("td")[posicion].style.backgroundColor= "green";
				break;
			case 6: document.getElementsByTagName("td")[posicion].style.backgroundColor= "blue";
				break;
			case 7: document.getElementsByTagName("td")[posicion].style.backgroundColor= "mediumpurple";
				break;
			case 8: document.getElementsByTagName("td")[posicion].style.backgroundColor= "black";
				break;
		}
	}
		function cambiaColor(posicion){  //funcion que pasando la posicion me pinta esa celda de un color aleatorio
			var opcion= Math.trunc(Math.random()*8+1);
			pintar(posicion, opcion);
			celdaPintada(posicion, opcion);
		}

/* Ejercicio 7 */
	var posicion= 0;
	function cambialetra(){
		var abecedario= "BCDEFGHIJKLMNÑOPQRSTUVXYZ";  //cadena con las letras del abecedario (menos la A)
		var letra= abecedario.charAt(posicion);
		document.getElementById("letra").innerHTML= letra;
		console.log(letra);
		console.log(posicion);
		posicion++;
	}
		var intervaloLetras;
		function avanzaLetra(){
			intervaloLetras= setInterval(cambialetra, 400);
		}
		function letraA(){
			clearInterval(intervaloLetras);
			document.getElementById("letra").innerHTML = "A";
			posicion=0;
		}

/* Ejercicio 8 */
	function mueveRaton(){
		document.getElementById("coordenadas").innerHTML= "Coordenadas: X- " +event.screenX+ " Y- " +event.screenY;
	}

/* Ejercicio 9 */
	//Funcion cambiaColor() del ejercicio 6
	function colorOk(posicion){
		var colorCelda= celdasPintadas[posicion]; //para recuperar el color de la celda
		document.getElementsByTagName("td")[posicion].innerHTML= "OK";
		switch(colorCelda){
			case 1:
			case 2:
			case 3:
			 document.getElementsByTagName("td")[posicion].style.color= "black";
				break;
			case 4:
			case 5:
			case 6:
			case 8: document.getElementsByTagName("td")[posicion].style.color= "white";
				break;
		}
	}
	