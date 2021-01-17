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
	
	
	
	//Creo variable para el setInterval: startIntervalo para poder pararlo y volver a comenzar
		var startIntervalo;  //variable para comenzar el intervalo del semáforo seleccionado
		
	//Creo una funcion con un CONTADOR DE 20 SEGUNDOS (es lo que dura el proceso entero del intervalo del semáforo)
	//Y en cada segundo tiene que activar un color distinto del semáforo
		function contadorSemaforo1(){
			var contSg= 0;  //aumenta cada vez que entra en la funcion
			var contIntervalos= 0;  //aumenta cada vez que la funcion llega a 20sg, fin del intervalo
			function contador(){
				contSg++;
				switch (contSg){
					case 1: tiempo120(); //el segundo 1 pone rojo el semaforo 1 y verde el semaforo 2
						break;
					case 13: tiempo1(); //el segundo 13 pone los dos en ambar
						break;
					case 14: tiempo60(); //el segundo 14 pone verde el semaforo 1 y rojo el semaforo 2
						break;
					case 20: tiempo1(); //volvemos a poner los dos en ambar
							 contSg=0; //ponemos el contador a 0 para que vuelva a empezar
							 contIntervalos++; //en proceso, cuenta intervalos
						break;
				}
				if(contIntervalos==4){
					setTimeout(verde,2000,0);
					setTimeout(rojo,13000,0);
					setTimeout(verde,15000,1);
					setTimeout(rojo,20000,1);
					contIntervalos= 0;
				}
			}
			startIntervalo= setInterval(contador,1000);
		}
		//Al ser distintos los tiempos en que estan en rojo o verde hago un contador por cada semáforo
		function contadorSemaforo2(){
			var cont= 0;
			var contIntervalos= 0;
			function contador(){
				cont++;
				switch (cont){
					case 1: tiempo60();
						break;
					case 7: tiempo1();
						break;
					case 8: tiempo120();
						break;
					case 20: tiempo1();
							 cont=0;
							 contIntervalos++;
						break;
				}
				if(contIntervalos==4){
					setTimeout(verde,2000,1);
					setTimeout(rojo,7000,1);
					setTimeout(verde,9000,0);
					setTimeout(rojo,20000,0);
					contIntervalos= 0;
				}
			}
			startIntervalo= setInterval(contador,1000);
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
			for(var i=12; i<15; i++){ //y doy opacidad a los peatones verde
				document.getElementsByTagName("td")[i].style.opacity= "0.3";
			}
			
			contadorSemaforo1();  //va a empezar a contar y segun el segundo en el que esté va a poner un color y otro
		}
		
		
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
			clearInterval(startIntervalo); //paro setInterval que comenzó el intervalo del semáforo
			//el peaton se pone en verde a los 30sg (segundo 3) de la opcion seleccionada
			setTimeout(verde,3000,opcion);
			//Y se vuelve a poner rojo según los tiempos del semáforo que se haya pulsado
			if (opcion==0){
				setTimeout(rojo,14000,opcion); //semáforo 1 3sg + 12sg que dura en rojo
			} else{
				setTimeout(rojo,8000,opcion); //semáforo 2 3sg + 6sg que dura en rojo
			}
			
			//Y el semáforo de coches correspondiente se pondran en rojo a los 20sg (segundo 2)
			//Hay distintos intervalos de timpo si pulsa el peaton el semáforo 1 o el semáforo 2
			if (opcion==0){  //opcion 0=semáforo 1 --> intervalos 120,1,60,1
				setTimeout(contadorSemaforo1,1000);  // como la funcion contadorSemaforo1 tarda 1sg, le digo que comience en el sg 1= 2sg
			}
			else{  //opcion 0=semáforo 2 --> intervalos 6,1,12,1
				setTimeout(contadorSemaforo2,1000);
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		