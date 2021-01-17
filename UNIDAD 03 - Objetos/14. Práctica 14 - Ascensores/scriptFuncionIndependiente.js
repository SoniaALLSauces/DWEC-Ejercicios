/* Autor: Sonia Anton Llanes */
/* Fecha: 17/12/2020 */
/* Ultima modificación: 11/01/2021 */
/* Practica 14 - Ascensores */


	/* Variables para guardar donde se encuentra cada ascensor */
		//utilizo una clase para cada ascensor, para saber en que planta estoy utilizo la posición del array
		//la posición es a la inversa de la planta: la posicion 0 es la planta 6... y la posición 5 es la planta 1
		var plantaAsc1; 
		var plantaAsc2; 
		var plantaAsc3; 
		var plantaAsc4; 
	//pintamos donde esta cada ascensor:
		function iniciar(){
			plantaAsc1= 1;  //planta 5
			plantaAsc2= 0;  //planta 6
			plantaAsc3= 2;  //planta 4
			plantaAsc4= 5;  //planta 1
			document.getElementsByClassName("ascensor1")[plantaAsc1].style.background= "yellow";
			document.getElementsByClassName("botonesAsc1")[plantaAsc1].style.display= "block";
			document.getElementsByClassName("ascensor2")[plantaAsc2].style.background= "yellow";
			document.getElementsByClassName("botonesAsc2")[plantaAsc2].style.display= "block";
			document.getElementsByClassName("ascensor3")[plantaAsc3].style.background= "yellow";
			document.getElementsByClassName("botonesAsc3")[plantaAsc3].style.display= "block";
			document.getElementsByClassName("ascensor4")[plantaAsc4].style.background= "yellow";
			document.getElementsByClassName("botonesAsc4")[plantaAsc4].style.display= "block";
		}
	
	
	/** description: cambia el color de la puerta al parar el ascensor
	   @plantaDestino: numero de la planta en la cual abrimos la puerta del ascensor
	   @ascensor: numero del ascensor que paramos
	*/
		var contador= 0;  //variable que cuenta tres intervalos de tiempo y cierra las puertas
		function parar(plantaDestino,ascensor){
			if (contador==3){
				clearInterval(intervaloParar);
				document.getElementsByClassName(ascensor)[plantaDestino].style.background= "yellow";
			} else{
				contador++;
				document.getElementsByClassName(ascensor)[plantaDestino].style.background= "orangered";
			}
		}
	
	
	/** description: muestro y pinto la planta del ascensor en la cual estoy
	   @plantaAscensor: numero de la planta en la cual se encuentra el ascensor
	   @clase: numero del ascensor que movemos (iluminamos para visualizarlo)
	   @botones: clase que contiene los botones del ascensor que movemos (visualizamos con @clase)
	   @plantaDestino: numero de la planta en la cual paramos el ascensor
	*/
		function pintoPlanta(plantaAscensor,clase,botones,plantaDestino){
			for (var i=0; i<document.getElementsByClassName(clase).length; i++){
				document.getElementsByClassName(clase)[i].style.background= "none";
				document.getElementsByClassName(botones)[i].style.display= "none";
			}
			console.log(plantaAscensor);
			console.log(clase);
			document.getElementsByClassName(clase)[plantaAscensor].style.background= "yellow";
			document.getElementsByClassName(botones)[plantaAscensor].style.display= "block";
			if(plantaAscensor==plantaDestino){
				intervaloParar= setInterval(parar,1000,plantaAscensor,clase);
				clearInterval(intervalo);  //Cuando llegue a la planta destino paramos el intervalo
			} else{
				if (plantaDestino<plantaAscensor){  //sumo o resto dependiendo de si hay que subir o bajar
					plantaAscensor--;
				} else{
					plantaAscensor++;
				}
			}
			
			// switch para devolver la planta actual del ascensor:
			switch(clase){
				case "ascensor1": plantaAsc1= plantaAscensor;
						return plantaAsc1;
					break;
				case "ascensor2": plantaAsc2= plantaAscensor;
						return plantaAsc2;
					break;
				case "ascensor3": plantaAsc3= plantaAscensor;
						return plantaAsc3;
					break;
				case "ascensor4": plantaAsc4= plantaAscensor;
						return plantaAsc4;
					break;
			}
			
		}
		
		function cambioPlanta(){
			pintoPlanta(plantaAscensor,clase,botones,plantaDestino);
		}
	
	
	/** 
	   @plantaDestino: numero de la planta a la cual tenemos que dirigir el ascensor
	   @ascensor: numero del ascensor que movemos
	*/
	var intervalo;  //variable para nombrar el setInterval y poder pararlo
	function piso(plantaDestino,ascensor){
		/* 1º debemos saber en que planta está el ascensor que vamos a mover */
		var plantaAscensor;  //variable para guardar la planta del ascensor que vamos a mover
		var clase;  //variable para guardar la class del html que voy a pintar
		var botones;  //variable para guardar la class del html de los botones que aparecen y desaparecen
		//switch para dar valor a las variables plantaAscensor y clase:
		switch(ascensor){  
			case 1: plantaAscensor= plantaAsc1;
					clase= "ascensor1";
					botones="botonesAsc1";
				break;
			case 2: plantaAscensor= plantaAsc2;
					clase= "ascensor2";
					botones="botonesAsc2";
				break;
			case 3: plantaAscensor= plantaAsc3;
					clase= "ascensor3";
					botones="botonesAsc3";
				break;
			case 4: plantaAscensor= plantaAsc4;
					clase= "ascensor4";
					botones="botonesAsc4";
				break;
		}
			
		intervalo= setInterval(cambioPlanta,1000,plantaAscensor,clase,botones,plantaDestino);
		
	}	
		