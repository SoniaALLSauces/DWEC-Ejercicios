/* Autor: Sonia Anton Llanes */
/* Fecha: 12/01/2021 */
/* Practica 0 - Eventos de raton */

	window.onload = function() {		
		function pintoVerde(){
			document.getElementById("pinta").style.color= "green";
		}
		function pintoAzul(){
			document.getElementById("pinta").style.color= "blue";
		}
		document.getElementById("pinta").onclick = pintoAzul;
		document.getElementById("pinta").ondblclick = pintoVerde;
	}

	//Funcion pulsaRaton
		function pulsaRaton(mensaje){
			alert (mensaje);
		}
	
	//Funcion dobleClick
		function pintaRojo(elemento,i){
			document.getElementsByTagName(elemento)[i].style.color= "red";
		}

	//Funcion salirBoton
		function salirBoton(i,mensaje){
			document.getElementsByClassName("parrafo")[i].innerHTML= mensaje;
			document.getElementsByClassName("parrafo")[i].style.border= "1px solid black";
			document.getElementsByClassName("parrafo")[i].style.background= "white";
		}
		
	//Funcion dentroBoton
		function dentroBoton(i,mensaje){
			document.getElementsByClassName("parrafo")[i].innerHTML= mensaje;
			document.getElementsByClassName("parrafo")[i].style.background= "yellowgreen";
			document.getElementsByClassName("parrafo")[i].style.width= "50%";
		}
	
	//Funcion sueltaRaton
		function sueltaRaton(i,mensaje){
			document.getElementsByClassName("parrafo")[i].innerHTML= mensaje;
		}
	
	//Funcion mueveRaton
		function mueveRaton(i){
			document.getElementsByClassName("parrafo")[i].innerHTML= "Muevo el raton por el elemento. Coordenadas: X- " +event.screenX+ " Y- " +event.screenY;
		}
	
	