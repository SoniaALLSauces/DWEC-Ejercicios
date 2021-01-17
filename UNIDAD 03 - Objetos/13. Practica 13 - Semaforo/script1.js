/* Autor: Sonia Anton Llanes */
/* Fecha: 09/12/2020 */
/* Practica 13 - Semáforo */


// COMENZAR SEMÁFOROS:
			/*var tiempo=60;
			function contadorTiempo(){
				if (tiempo==0){
					clearInterval(temporizador);
					alert("¡TIEMPO AGOTADO!");
				} else{
					tiempo--;
					console.log(tiempo);
				}
			}	
			function comenzarMinuto(){
				temporizador = setInterval(contadorTiempo,100);
			}*/

	//Variables para llamar a los intervalos
		var temporizador120;
		var temporizador60;
		var temporizador1;
		
	//Creo tres variables con los distintos intervalos de tiempo:
		var tiempo1= 1;
		var tiempo60= 60;
		var tiempo120= 120;
		
	//Creo tres contadores para los tres intervalos de tiempo 
		function tiempoCientoveinte(){  
			if (tiempo120==0){  //cuando llegue a cero
				clearInterval(temporizador120);  //paro el temporizador
			} else{
				tiempo120--;  //mientras resto 1sg al tiempo
				console.log(tiempo120);
			}
			return tiempo120;
		}
		function tiempoSesenta(){  
			if (tiempo60==0){  //cuando llegue a cero
				clearInterval(temporizador60);  //paro el temporizador
			} else{
				tiempo60--;  //mientras resto 1sg al tiempo
				console.log(tiempo60);
			}
			return tiempo60;
		}
		function tiempoUno(){  
			if (tiempo1==0){  //cuando llegue a cero
				clearInterval(temporizador1);  //paro el temporizador
			} else{
				tiempo1--;  //mientras resto 1sg al tiempo
				console.log(tiempo1);
			}
			return tiempo1;
		}
		
		function intervalo(tiempo){
			for (var i=0; i<document.getElementsByTagName("td").length; i++){
				document.getElementsByTagName("td")[i].style.background= "white";
			}
			if (tiempo==120){
				temporizador120 = setInterval(tiempoCientoveinte,100);
				document.getElementsByClassName("cientoveinte")[0].style.background= "red";
			}
			if (tiempo==60){
				temporizador60 = setInterval(tiempoSesenta,100);
				document.getElementsByClassName("sesenta")[0].style.background= "green";
			}
			if (tiempo==1){
				temporizador1 = setInterval(tiempoUno,100);
				document.getElementsByClassName("uno")[0].style.background= "yellow";
			}
		}
		
		function comenzar(){
			temporizador120 = setInterval(tiempoCientoveinte,100);
				document.getElementsByClassName("cientoveinte")[0].style.background= "red";
			console.log (temporizador120);
			// temporizador60 = setInterval(tiempoSesenta,100);
				// document.getElementsByClassName("sesenta")[0].style.background= "green";
			
			
		}
		
		
		
		
		
		
		
		
		
		
		
		