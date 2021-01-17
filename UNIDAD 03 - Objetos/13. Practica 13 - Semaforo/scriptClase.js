/* Autor: Sonia Anton Llanes */
/* Fecha: 09/12/2020 */
/* Practica 13 - Semáforo */


// COMENZAR SEMÁFOROS:
		
	//Existen tres tiempos que tienen que ejecutar dos colores distintos el mismo momento y tiempo
	//Creo una funcion contador que para el intervalo en el tiempo que yo le pase por parámetro
		var tiempo=0;  //inicializo el contador fuera de la funcion
			function contadorTiempo(tiempoMax){
				if (tiempo==tiempoMax){
					clearInterval(comenzar);
					tiempo=0;
				} else{
					tiempo++;
					console.log(tiempo);
				}
				return tiempoMax;
			}
	//Lo primero que hacen es poner opacidad en todos los elementos <td>
		//TODOS los intervalos ponen opacidad a todos los colores menos el rojo del semáforo peatones
		//los td 0,1,2,3,4,5,6,7,8 y 12,13,14
			function opacidad(){
				for(var i=0; i<9; i++){
					document.getElementsByTagName("td")[i].style.opacity= "0.3";
				}
				for(var i=12; i<15; i++){
					document.getElementsByTagName("td")[i].style.opacity= "0.3";
				}
			}
		//El intervalo de tiempo 120 pinta de rojo el semáforo 1 y de verde el semáforo 2 (quita la opacidad)
			function tiempo120(){
				opacidad();
				document.getElementsByClassName("cientoveinte")[0].style.opacity= "1";
				document.getElementsByClassName("cientoveinte")[1].style.opacity= "1";
			}
		//El intervalo de tiempo 60 pinta de verde el semáforo 1 y de rojo el semáforo 2 (quita la opacidad)
			function tiempo60(){
				opacidad();
				document.getElementsByClassName("sesenta")[0].style.opacity= "1";
				document.getElementsByClassName("sesenta")[1].style.opacity= "1";
			}
		//Y el intervalo de tiempo 1 pinta de amarillo los dos semáforos (quita la opacidad)
			function tiempo1(){
				opacidad();
				document.getElementsByClassName("uno")[0].style.opacity= "1";
				document.getElementsByClassName("uno")[1].style.opacity= "1";
			}
		

//COMENZAR	
	//Creo dos variables para cada setInterval: comenzar y paraPeaton
		var comenzar;
		var paraPeaton;
		
		function comenzar(){
			//Pinto todos los colores de los semáforos
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
			
			setTimeout(tiempo120,0);
			setTimeout(tiempo1,12000);
			setTimeout(tiempo60,13000);
			
		}
		
		
//FUNCION PARAR: pone a rojo el semaforo de coches y a verde el de peaton
	//Cambio tiempos: reduzco a 3sg el cambiar de rojo a verde
		var contador= 0;
		function verde(opcion){
			document.getElementsByClassName("verde")[opcion].style.opacity= "1";
			document.getElementsByClassName("rojo")[opcion].style.opacity= "0.3"; 
			//Según el tiempo rojo de los semaforos de coches:
			//si pulsar verde el semaforo 1, el semaforo 2 está en rojo 6sg; y si pulsa verde el semáforo 2, el semáforo 1 está en rojo 120sg 
			if (opcion==0 && contador==2){  //contador=2 pq setInterval paraPeaton se repite cada 3sg y quiero que esté 6sg (es lo que dura en rojo el semaforo2)
				clearInterval(paraPeaton); 
				contador= 0;
			}
			else if (opcion==1 && contador==4){  //contador=4 pq setInterval paraPeaton se repite cada 3sg y quiero que esté 12sg (es lo que dura en rojo el semaforo1)
				clearInterval(paraPeaton);
				contador= 0;
			}
			else{
				contador++;
				console.log(opcion);
				console.log(contador);
			}

		}
			
		function parar(opcion){
			//el peaton se pone en verde a los 30sg (segundo 3) de la opcion seleccionada
			paraPeaton= setInterval(verde,3000,opcion);
			clearInterval(comenzar); //paro setInterval comenzar
			//Hay distintos intervalos de timpo si pulsa el peaton el semáforo 1 o el semáforo 2
			if (opcion==0){  //opcion 0=semáforo 2 --> intervalos 6,1,12,1
				//comenzamos a poner el semaforo en rojo a los 20sg (segundo 2)
				setTimeout(tiempo60,2000); //comienza en el segundo 2
				setTimeout(tiempo1,8000);  
				setTimeout(tiempo120,9000); 
				setTimeout(tiempo1,21000);
				//Y a partir del segundo 2, comenzamos de nuevo el intervalo semaforo2 (6,1,12,1)
				comenzar= setInterval(semaforo2,20000);
				setTimeout(comenzar,2000);
			}
			else{  //opcion 1=semáforo 1 --> intervalos 120,1,60,1
				//comenzamos a poner el semaforo en rojo a los 20sg (segundo 2)
				setTimeout(tiempo120,0); //comienza en el segundo 2
				setTimeout(tiempo1,14000);
				setTimeout(tiempo60,15000);
				setTimeout(tiempo1,21000);
				//Y a partir del segundo 2, comenzamos de nuevo el intervalo semaforo1 (12,1,6,1)
				comenzar=setInterval(semaforo1,20000);
				setTimeout(comenzar,2000);
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		