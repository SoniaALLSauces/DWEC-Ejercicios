/* Autor: Sonia Anton Llanes */
/* Fecha: 09/12/2020 */
/* Practica 13 - Semáforo */


// COMENZAR SEMÁFOROS:
		
	//Existen tres tiempos que tienen que ejecutar dos colores distintos el mismo momento y tiempo
	//Lo primero que hacen es poner en blanco los elementos <td> de los SEMAFOROS PARA COCHES (del 0 al 8)
		//El intervalo de tiempo 120 pinta de rojo el semáforo 1 y de verde el semáforo 2
			function tiempo120(){
				for(var i=0; i<document.getElementsByTagName("td").length; i++){
					document.getElementsByTagName("td")[i].style.opacity= "0.3";
				}
				document.getElementsByClassName("cientoveinte")[0].style.opacity= "1";
				document.getElementsByClassName("cientoveinte")[1].style.opacity= "1";
				document.getElementsByClassName("rojo")[0].style.opacity= "1";
				document.getElementsByClassName("rojo")[1].style.opacity= "1";
			}
		//El intervalo de tiempo 60 pinta de verde el semáforo 1 y de rojo el semáforo 2
			function tiempo60(){
				for(var i=0; i<document.getElementsByTagName("td").length; i++){
					document.getElementsByTagName("td")[i].style.opacity= "0.3";
				}
				document.getElementsByClassName("sesenta")[0].style.opacity= "1";
				document.getElementsByClassName("sesenta")[1].style.opacity= "1";
				document.getElementsByClassName("rojo")[0].style.opacity= "1";
				document.getElementsByClassName("rojo")[1].style.opacity= "1";
			}
		//Y el intervalo de tiempo 1 pinta de amarillo los dos semáforos
			function tiempo1(){
				for(var i=0; i<document.getElementsByTagName("td").length; i++){
					document.getElementsByTagName("td")[i].style.opacity= "0.3";
				}
				document.getElementsByClassName("uno")[0].style.opacity= "1";
				document.getElementsByClassName("uno")[1].style.opacity= "1";
				document.getElementsByClassName("rojo")[0].style.opacity= "1";
				document.getElementsByClassName("rojo")[1].style.opacity= "1";
			}
		//La funcion semáforo intercala los cuatro intervalos de tiempo (120sg, 1sg, 60sg, 1sg)
		  //que yo he reducido a 12sg, 1sg, 6sg, 1sg
			function semaforo(){
				setTimeout(tiempo120,0); //en el segundo 0 llamamos al intervalo tiempo120, que pinta de rojo el semaforo1 y de verde el semáforo2
				setTimeout(tiempo1,12000); //cuando han pasado 12 segundos llamamos al intervalo que pinta de amarillo
				setTimeout(tiempo60,13000); //pasado un segundo llamamos al intervalo tiempo60, que pinta de verde el semaforo1 y de rojo el semáforo2
				setTimeout(tiempo1,19000); //y pasados otros 6 segundos volvemos a pintar de amarillo
			}
		
		function comenzar(){
			document.getElementsByClassName("cientoveinte")[0].style.background= "red";
			document.getElementsByClassName("cientoveinte")[1].style.background= "green";
			document.getElementsByClassName("sesenta")[0].style.background= "red";
			document.getElementsByClassName("sesenta")[1].style.background= "green";
			document.getElementsByClassName("uno")[0].style.background= "yellow";
			document.getElementsByClassName("uno")[1].style.background= "yellow";
			document.getElementsByClassName("rojo")[0].style.background= "red";
			document.getElementsByClassName("rojo")[1].style.background= "red";
			document.getElementsByClassName("verde")[0].style.background= "green";
			document.getElementsByClassName("verde")[1].style.background= "green";
			
			//setInterval hace un intervalo de la funcion semaforo cada 20 segundos,
			setInterval(semaforo,20000);
			//para no esperar los primeros 20segundos hacemos una primera llamada a los distintos intervalos de tiempo
			setTimeout(tiempo120,0);
			setTimeout(tiempo1,12000);
			setTimeout(tiempo60,13000);
			setTimeout(tiempo1,19000);
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		