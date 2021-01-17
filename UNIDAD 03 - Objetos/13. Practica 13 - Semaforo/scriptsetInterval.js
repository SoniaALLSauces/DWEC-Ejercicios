/* Autor: Sonia Anton Llanes */
/* Fecha: 09/12/2020 */
/* Mofificado: 14/12/2020 */
/* Practica 13 - Semáforo */


// COMENZAR SEMÁFOROS:
		
	//Existen tres tiempos que tienen que ejecutar dos colores distintos el mismo momento y tiempo
	//Lo primero que hacen es poner en blanco los elementos <td> de los SEMAFOROS PARA COCHES (del 0 al 8)
		//TODOS los intervalos ponen opacidad a todos los colores menos el rojo del semáforo peatones
		//los td 0,1,2,3,4,5,6,7,8 y 12,13,14
			function opacidad(){
				for(var i=0; i<9; i++){
					document.getElementsByTagName("td")[i].style.opacity= "0.3";
				}
			}
		//Funcion para parar el tiempo que tiene que durar cada intervalo
			var contador= 0;  //variable para cuando se llegue al tiempo correspondiente se pare
			function contarTiempo(tiempo){
				if (contador==tiempo){
					contador= 0;
					switch(tiempo){
						case 1: clearInterval(ambar);
							break;
						case 6: clearInterval(semaforo2);
							break;
						case 12: clearInterval(semaforo1);
							break;
					}
				} else{
					contador++;
				}
			}
		//El intervalo de tiempo 120 pinta de rojo el semáforo 1 y de verde el semáforo 2 (quita la opacidad)
			function tiempo120(){
				opacidad();
				document.getElementsByClassName("cientoveinte")[0].style.opacity= "1";
				document.getElementsByClassName("cientoveinte")[1].style.opacity= "1";
				contarTiempo(12);
			}
		//El intervalo de tiempo 60 pinta de verde el semáforo 1 y de rojo el semáforo 2 (quita la opacidad)
			function tiempo60(){
				opacidad();
				document.getElementsByClassName("sesenta")[0].style.opacity= "1";
				document.getElementsByClassName("sesenta")[1].style.opacity= "1";
				contarTiempo(6);
			}
		//Y el intervalo de tiempo 1 pinta de amarillo los dos semáforos (quita la opacidad)
			function tiempo1(){
				opacidad();
				document.getElementsByClassName("uno")[0].style.opacity= "1";
				document.getElementsByClassName("uno")[1].style.opacity= "1";
				contarTiempo(1);
			}
/*
	//La funcion semáforo intercala los cuatro intervalos de tiempo (120sg, 1sg, 60sg, 1sg)
	  //que yo he reducido a 12sg, 1sg, 6sg, 1sg
			function semaforo1(){  //llamamos al semaforo1 con los intervalos: 12sg, 1sg, 6sg y 1sg
				setTimeout(tiempo120,0); //en el segundo 0 llamamos al intervalo tiempo120, que pinta de rojo el semaforo1 y de verde el semáforo2
				setTimeout(tiempo1,12000); //cuando han pasado 12 segundos llamamos al intervalo que pinta de amarillo
				setTimeout(tiempo60,13000); //pasado un segundo llamamos al intervalo tiempo60, que pinta de verde el semaforo1 y de rojo el semáforo2
				setTimeout(tiempo1,19000); //y pasados otros 6 segundos volvemos a pintar de amarillo
			}
			function semaforo2(){  //llamamos al semaforo2 con los intervalos: 6sg, 1sg, 12sg y 1sg
				setTimeout(tiempo60,0); //en el segundo 0 llamamos al intervalo tiempo60
				setTimeout(tiempo1,6000); //cuando han pasado 6 segundos llamamos al intervalo que pinta de amarillo
				setTimeout(tiempo120,7000); //pasado un segundo llamamos al intervalo tiempo60, que pinta de verde el semaforo1 y de rojo el semáforo2
				setTimeout(tiempo1,19000); //y pasados otros 6 segundos volvemos a pintar de amarillo
			}
*/	
	//Creo variables para cada setInterval:
		var semaforo1;  //variable para parar el bucle del semaforo 1
		var ambar; //variable para parar el bucle del ambar
		var semaforo2; //variable para parar el bucle del semaforo 2
		var ponerRojo;  //variable para poner en rojo el semaforo correspondiente hasta que haya que parar el bucle
		
		function comenzar(){
			//Primero pinto todos los semáforos de color
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
			for(var i=12; i<15; i++){ //y doy opacidad a los peatones verde
				document.getElementsByTagName("td")[i].style.opacity= "0.3";
			}
			
			//Comenzamos cada intervalo en un momento de tiempo distinto con setTimeout
			setTimeout(semaforo1=setInterval(tiempo120,1000),0);
			setTimeout(ambar= setInterval(tiempo1,1000),12000);
			// setTimeout(semaforo2= setInterval(tiempo60,1000),13000);
			// setTimeout(ambar= setInterval(tiempo1,1000),19000);
		}
		
/*		
//FUNCION PARAR: pone a rojo el semaforo de coches y a verde el de peaton
	//Cambio tiempos: reduzco a 3sg el cambiar de rojo a verde
		function verde(opcion){
			document.getElementsByClassName("verde")[opcion].style.opacity= "1";
			document.getElementsByClassName("rojo")[opcion].style.opacity= "0.3"; 
		}
		function rojo(opcion){
			document.getElementsByClassName("rojo")[opcion].style.opacity= "1";
			document.getElementsByClassName("verde")[opcion].style.opacity= "0.3"; 
		}
			
		function parar(opcion){
			clearInterval(comenzar); //paro setInterval comenzar
			//el peaton se pone en verde a los 30sg (segundo 3) de la opcion seleccionada
			setTimeout(verde,3000,opcion);
			//Y se vuelve a poner rojo según los tiempos del semáforo que se haya pulsado
			if (opcion==0){
				setTimeout(rojo,15000,opcion); //semáforo 1 3sg + 12sg que dura en rojo
			} else{
				setTimeout(rojo,9000,opcion); //semáforo 2 3sg + 6sg que dura en rojo
			}
			
			//Y el semáforo de coches correspondiente se pondran en rojo a los 20sg (segundo 2)
			//Hay distintos intervalos de timpo si pulsa el peaton el semáforo 1 o el semáforo 2
			if (opcion==0){  //opcion 0=semáforo 1 --> intervalos 120,1,60,1
				setTimeout(tiempo120,2000); //comienza en el segundo 2
				setTimeout(tiempo1,14000);
				setTimeout(tiempo60,15000);
				setTimeout(tiempo1,21000);
				//Y a partir del segundo 2, comenzamos de nuevo el intervalo semaforo1 (12,1,6,1)
				comenzar= setInterval(semaforo1,20000);
				setTimeout(comenzar,2000);
			}
			else{  //opcion 0=semáforo 2 --> intervalos 6,1,12,1
				setTimeout(tiempo60,2000); //comienza en el segundo 2
				setTimeout(tiempo1,8000);  
				setTimeout(tiempo120,9000); 
				setTimeout(tiempo1,21000);
				//Y a partir del segundo 2, comenzamos de nuevo el intervalo semaforo2 (6,1,12,1)
				comenzar= setInterval(semaforo2,20000);
				setTimeout(comenzar,2000);
			}
		}
*/		
		
		
		
		
		
		
		
		
		
		
		
		
		
		