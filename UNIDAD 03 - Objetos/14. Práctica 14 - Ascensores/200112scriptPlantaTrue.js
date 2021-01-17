
/* Autor: Sonia Anton Llanes */
/* Fecha: 17/12/2020 */
/* Ultima modificación: 12/01/2021 */
/* Practica 14 - Ascensores */


//VARIABLES
	/* Variables para guardar donde se encuentra cada ascensor */
		//utilizo una clase para cada ascensor, para saber en que planta estoy utilizo la posición del array
		//la posición es a la inversa de la planta: la posicion 0 es la planta 6... y la posición 5 es la planta 1
		var plantaAsc1; 
		var plantaAsc2; 
		var plantaAsc3; 
		var plantaAsc4;
	/** Funcion para guardar en que planta se encuentra el ascensor
		@ascensor: numero del ascensor que pasamos por parámetro
	*/
		function guardarPlanta(planta,ascensor){
			switch(ascensor){
				case 1: plantaAsc1= planta;
						return plantaAsc1;
					break;
				case 2: plantaAsc2= planta;
						return plantaAsc2;
					break;
				case 3: plantaAsc3= planta;
						return plantaAsc3;
					break;
				case 4: plantaAsc4= planta;
						return plantaAsc4;
					break;
			}
		}

	/* Arrays para guardar donde tiene que parar cada ascensor */
		var paroAscensor1= new Array(6);  //creo un array con las 6 plantas del ascensor 1
		for (var i=0; i<6; i++){  //inicializo todas las posiciones a false (aun no tiene que parar en ninguna planta)
			paroAscensor1[i]= false;
		}
		var paroAscensor2= new Array(6);  //creo un array con las 6 plantas del ascensor 2
		for (var i=0; i<6; i++){  //inicializo todas las posiciones a false (aun no tiene que parar en ninguna planta)
			paroAscensor2[i]= false;
		}
		var paroAscensor3= new Array(6);  //creo un array con las 6 plantas del ascensor 3
		for (var i=0; i<6; i++){  //inicializo todas las posiciones a false (aun no tiene que parar en ninguna planta)
			paroAscensor3[i]= false;
		}
		var paroAscensor4= new Array(6);  //creo un array con las 6 plantas del ascensor 4
		for (var i=0; i<6; i++){  //inicializo todas las posiciones a false (aun no tiene que parar en ninguna planta)
			paroAscensor4[i]= false;
		}
	/* Variables genéricas para guardar datos: */
		var clase;  //para guardar la clase ascensor? dependiendo del ascensor que enumeramos
		var botones;  //para guardar la clase botonesAsc? dependiendo del ascensor enumarado
		var planta;  //para guardar la planta donde se encuentra del ascensor enumarado
		
	//pintamos donde esta cada ascensor al iniciar:
		function iniciar(){
			plantaAsc1= 1;  //planta 5
			plantaAsc2= 0;  //planta 6
			plantaAsc3= 2;  //planta 4
			plantaAsc4= 5;  //planta 1
			document.getElementsByClassName("ascensor1")[plantaAsc1].style.background= "orangered";
			document.getElementsByClassName("botonesAsc1")[plantaAsc1].style.display= "block";
			document.getElementsByClassName("ascensor2")[plantaAsc2].style.background= "orangered";
			document.getElementsByClassName("botonesAsc2")[plantaAsc2].style.display= "block";
			document.getElementsByClassName("ascensor3")[plantaAsc3].style.background= "orangered";
			document.getElementsByClassName("botonesAsc3")[plantaAsc3].style.display= "block";
			document.getElementsByClassName("ascensor4")[plantaAsc4].style.background= "orangered";
			document.getElementsByClassName("botonesAsc4")[plantaAsc4].style.display= "block";
		}
	
	
//FUNCIONES QUE NOS DEVUELVEN LA CLASE O POSICION DEL ASCENSOR CORRESPONDIENTE PARA CAMBIAR ESTILOS
	/** Funcion que nos devuelve la clase paraPisoAsc?
		@ascensor: numero del ascensor que pasamos por parámetro
	*/
		function clPararPiso(ascensor){
			var clasePararPiso;  //variable para guardar la clase pararPiso segun el ascensor
			switch(ascensor){  
				case 1: clasePararPiso= "pararPisoAsc1";
					break;
				case 2: clasePararPiso= "pararPisoAsc2";
					break;
				case 3: clasePararPiso= "pararPisoAsc3";
					break;
				case 4: clasePararPiso= "pararPisoAsc4";
					break;
			}
			return clasePararPiso;
		}
		
	/** Funcion que nos devuelve la clase ascensor?
		@ascensor: numero del ascensor que pasamos por parámetro
	*/
		function clAscensor(ascensor){
			var claseAscensor;  //variable para guardar la clase ascensor segun el ascensor
			switch(ascensor){  
				case 1: claseAscensor= "ascensor1";
					break;
				case 2: claseAscensor= "ascensor2";
					break;
				case 3: claseAscensor= "ascensor3";
					break;
				case 4: claseAscensor= "ascensor4";
					break;
			}
			return claseAscensor;
		}
		
	/** Funcion que nos devuelve la clase botonesAsc?
		@ascensor: numero del ascensor que pasamos por parámetro
	*/
		function clMostrarBotones(ascensor){
			var claseBotonesAscensor;  //variable para guardar la clase botonesAsc segun el ascensor
			switch(ascensor){  
				case 1: claseBotonesAscensor= "botonesAsc1";
					break;
				case 2: claseBotonesAscensor= "botonesAsc2";
					break;
				case 3: claseBotonesAscensor= "botonesAsc3";
					break;
				case 4: claseBotonesAscensor= "botonesAsc4";
					break;
			}
			return claseBotonesAscensor;
		}
		
	/** Funcion que nos devuelve la posicion del ascensor indicado
		@ascensor: numero del ascensor que pasamos por parámetro
	*/
		function plantaAscensor(ascensor){
			var plantaAsc;  //variable para guardar la planta dependiendo del ascensor indicado
			switch(ascensor){  
				case 1: plantaAsc= plantaAsc1;
					break;
				case 2: plantaAsc= plantaAsc2;
					break;
				case 3: plantaAsc= plantaAsc3;
					break;
				case 4: plantaAsc= plantaAsc4;
					break;
			}
			return plantaAsc;
		}
		
	
	
	/** description: cambia el color de la puerta al parar el ascensor
	   @plantaDestino: numero de la planta en la cual abrimos la puerta del ascensor
	   @ascensor: numero del ascensor que paramos
	*/
		var contador= 0;  //variable que cuenta tres intervalos de tiempo y cierra las puertas
		function parar(plantaDestino,ascensor){
			var pararPiso= clPararPiso(ascensor);  //guardamos en una variable la clase paraPiso para borrar el color
			clase= clAscensor(ascensor);  //guardamos en una variable la clase del ascensor
			if (contador==3){
				contador= 0;
				clearInterval(intervaloParar);
				// if(){
					
				// }
			} else{
				contador++;
				document.getElementsByClassName(clase)[plantaDestino].style.background= "orangered"; //abro puertas pintando de orange
				document.getElementsByClassName(pararPiso)[plantaDestino].style.background= "beige"; //desmarco del panel la planta seleccionada
			}
		}
	
	
	/** description: muestro y pinto la planta del ascensor en la cual estoy
	   @planta: numero de la planta en la cual se encuentra el ascensor
	   @ascensor: numero del ascensor que pintamos
	*/
		function pintoPlanta(planta,ascensor){
			clase= clAscensor(ascensor);  //guardo la clase del ascensor para pintar el elemento que corresponde
			botones= clMostrarBotones(ascensor);  //guardo la clase de los botones segun el ascensor para mostrarlos
			for (var i=0; i<document.getElementsByClassName(clase).length; i++){
				document.getElementsByClassName(clase)[i].style.background= "none";
				document.getElementsByClassName(botones)[i].style.display= "none";
			}
			console.log(planta);
			console.log(clase);
			document.getElementsByClassName(clase)[planta].style.background= "yellow";
			document.getElementsByClassName(botones)[planta].style.display= "block";
		}
	
	/** description: cambio de planta 
	   @plantaDestino: numero de la planta en la cual a de parar
	   @ascensor: numero del ascensor que movemos
	*/
		function cambioPlanta(plantaDestino,ascensor){
			planta= plantaAscensor(ascensor);  //para saber en que planta está el ascensor indicado
			pintoPlanta(planta,ascensor);  //pinto la planta del ascensor indicado
			
			//if(planta==plantaDestino){
			var arrayAscensor;  //seleccionamos un array dependiendo del ascensor que movamos
			switch(ascensor){  
				case 1: arrayAscensor= paroAscensor1;
					break;
				case 2: arrayAscensor= paroAscensor2;
					break;
				case 3: arrayAscensor= paroAscensor3;
					break;
				case 4: arrayAscensor= paroAscensor4;
					break;
			}
			if((planta==0 && arrayAscensor[0]==true) || (planta==1 && arrayAscensor[1]==true) ||
			   (planta==2 && arrayAscensor[2]==true) || (planta==3 && arrayAscensor[3]==true) ||
			   (planta==4 && arrayAscensor[4]==true) || (planta==5 && arrayAscensor[5]==true)){
				intervaloParar= setInterval(parar,1000,plantaDestino,ascensor);
				switch(ascensor){  //Cuando llegue a la planta destino paramos el setInterval correspondiente
								   //y cambio a falso el elemento del array paroAscensor correspondiente
					case 1: clearInterval(intervalo1);
							paroAscensor1[plantaDestino]= false;
							console.log(paroAscensor1[plantaDestino]);
						break;
					case 2: clearInterval(intervalo2);
							paroAscensor2[plantaDestino]= false;
						break;
					case 3: clearInterval(intervalo3);
							paroAscensor3[plantaDestino]= false;
						break;
					case 4: clearInterval(intervalo4);
							paroAscensor4[plantaDestino]= false;
						break;
				}	
			} else{
				if (plantaDestino<planta){  //sumo o resto dependiendo de si hay que subir o bajar
					planta--;
				} else{
					planta++;
				}
			}
			
			guardarPlanta(planta,ascensor);
		}
	
	
	/** descripcion: desde el html selecciono el ascensor y la planta destino
	   @plantaDestino: numero de la planta a la cual tenemos que dirigir el ascensor
	   @ascensor: numero del ascensor que movemos
	*/
		/* Creo un intervalo por cada ascensor para poder pararlos de forma independiente: */
		var intervalo1;  //variable para nombrar el setInterval del ascensor1 y poder pararlo
		var intervalo2;  //variable para nombrar el setInterval del ascensor2 y poder pararlo
		var intervalo3;  //variable para nombrar el setInterval del ascensor3 y poder pararlo
		var intervalo4;  //variable para nombrar el setInterval del ascensor4 y poder pararlo
		
		function destino(plantaDestino,ascensor){
			var botonPiso= clPararPiso(ascensor);  // variable que guarda la clase pararPisoAsc? según el ascensor
			document.getElementsByClassName(botonPiso)[plantaDestino].style.background= "yellow";  //marcamos la planta que se ha pulsado
			switch(ascensor){  //cambio a true en el array correspondiente el piso donde hay que parar:
				case 1: paroAscensor1[plantaDestino]= true;
					console.log(paroAscensor1[plantaDestino]);
					break;
				case 2: paroAscensor2[plantaDestino]= true;
					break;
				case 3: paroAscensor3[plantaDestino]= true;
					break;
				case 4: paroAscensor4[plantaDestino]= true;
					break;
			}	
			
			switch(ascensor){  //comienzo el intervalo del ascensor seleccionado
				case 1: intervalo1= setInterval(cambioPlanta,1000,plantaDestino,ascensor);
					break;
				case 2: intervalo2= setInterval(cambioPlanta,1000,plantaDestino,ascensor);
					break;
				case 3: intervalo3= setInterval(cambioPlanta,1000,plantaDestino,ascensor);
					break;
				case 4: intervalo4= setInterval(cambioPlanta,1000,plantaDestino,ascensor);
					break;
			}	
			
		}	
		