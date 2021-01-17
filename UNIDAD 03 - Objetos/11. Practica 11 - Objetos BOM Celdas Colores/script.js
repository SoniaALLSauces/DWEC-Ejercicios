/* Autor: Sonia Anton Llanes */
/* Fecha: 03/12/2020 */
/* Practica 11 - Objetos BOM */


/* Funcionalidad inicial: Al hacer clic en cada cuadrado debe de rellenarse éste de uno de los colores posibles:
 amarillo, verde, azul, rosa, naranja, negro, blanco, rojo.
Es un color “aleatorio”. Es decir, cada cuadrado puede estar relleno del color que “salga”. (El evento onclick
se aplica igual a <button> que a otra etiqueta HTML). */
		
		var celdasPintadas= new Array(8);  //creo un array para controlar si las celdas están o no pintadas
		for (var i=0; i<8; i++){  //inicializo todas las posiciones a 0 (que es ningun color)
			celdasPintadas[i]=0;
		}
		
		function celdaPintada(posicion,opcion){
			celdasPintadas[posicion]= opcion;
			return celdasPintadas;
		}

		
		function aleatorio(){ //funcion que genera números aleatorios del 1 al 8
			var numero= Math.trunc(Math.random()*8+1);
			return numero;
		}
		function nombreColor(numero){  //funcion que nos devuelve el nombre del color pasándole el número
			var nombre;
			switch (numero){
				case 1: nombre= "yellow";
					break;
				case 2: nombre= "darkorange";
					break;
				case 3: nombre= "hotpink";
					break;
				case 4: nombre= "red";
					break;
				case 5: nombre= "limegreen";
					break;
				case 6: nombre= "darkturquoise";
					break;
				case 7: nombre= "mediumpurple";
					break;
				case 8: nombre= "chocolate";
					break;
			}
			return nombre;
		}
		function pintar(posicion, opcion){ //funcion que pinta pasandole la posicion de la celda y el número del color
			// console.log (posicion);
			// console.log (opcion);
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
				case 5: document.getElementsByTagName("td")[posicion].style.backgroundColor= "limegreen";
					break;
				case 6: document.getElementsByTagName("td")[posicion].style.backgroundColor= "darkturquoise";
					break;
				case 7: document.getElementsByTagName("td")[posicion].style.backgroundColor= "mediumpurple";
					break;
				case 8: document.getElementsByTagName("td")[posicion].style.backgroundColor= "chocolate";
					break;
			}
		}
		function color(posicion){  //funcion que pasando la posicion me pinta esa celda de un color aleatorio
			var opcion= aleatorio();
			pintar(posicion, opcion);
			celdaPintada(posicion,opcion);
		}
		

//COMPLETAR FILAS DE COLORES DISTINTOS (NO SE PUEDEN REPETIR)
		var colores= new Array(8); // creo un array de 8 variables para guardar el color de cada celda
		for (var i=0; i<8; i++){  //inicializo todas las posiciones a 0 (que es ningun color)
			colores[i]=0;
		}
	
	//PINTO LA FILA 1 CONSERVANDO LAS QUE YA ESTÉN PINTADAS, DE COLORES DISTINTOS
		function pintarFila1(){
			console.log(celdasPintadas.join()); //veo en consola que celdas estan pintadas con que colores
			document.getElementById("repetidos").style.display= "none"; //si está desplegada la paleta de colores de cambiar repetidos la eliminamos
			var cadena= "";  //variable para guardar el mensaje si algún color está repetido y el color aleatorio por el que se cambia
			var cadenaColor= "";  //variable para guardar el color por el que se sustituye cuando está repetido
			
			for (var i=0; i<4; i++){  //si la celda tiene color guardo en el array colores y compruebo que son distintos
				if (celdasPintadas[i]!=0){ 
					colores[i]= celdasPintadas[i];
				}
			}
				if(colores[0]!=0 && colores[1]!=0){  //compruebo que las celdas que ya están pintadas tienen distinto color
					if(colores[0]==colores[1]){
						cadena+= "Se repetía el color de la celda 2 <br>";  //si no, lo muestro por pantalla
						while (colores[1]==colores[0]){
							colores[1]= aleatorio();  //aleatoriamente, cambio el color hasta que no se repita
						}
						cadenaColor+= "y ha sido sustituido por el color \"" +nombreColor(colores[1])+ "\"<br>";
						console.log("1");
						console.log(colores[1]);
					}
				}
				if((colores[0]!=0 && colores[2]!=0) || (colores[1]!=0 && colores[2]!=0)){
					if((colores[0]==colores[2]) || (colores[1]==colores[2])){
						cadena+= "Se repetía el color de la celda 3 <br>";
						while (colores[2]==colores[0] || colores[2]==colores[1]){
							colores[2]= aleatorio();	
						}
						cadenaColor+= "y ha sido sustituido por el color \"" +nombreColor(colores[2])+ "\"<br>";
						console.log("2");
						console.log(colores[2]);
					}
				}
				if((colores[0]!=0 && colores[3]!=0) || (colores[1]!=0 && colores[3]!=0) || (colores[2]!=0 && colores[3]!=0)){
					if((colores[0]==colores[3]) || (colores[1]==colores[3]) || (colores[2]==colores[3])){
						cadena+= "Se repetía el color de la celda 4";
						while (colores[3]==colores[0] || colores[3]==colores[1] || colores[3]==colores[2]){
							colores[3]= aleatorio();
						}	
						cadenaColor+= "y ha sido sustituido por el color \"" +nombreColor(colores[3])+ "\"<br>";
						console.log("3");
						console.log(colores[3]);
					}
				}
			document.getElementById("mensaje").innerHTML = cadena;
			document.getElementById("mensaje").style.top = "40px";
			document.getElementById("mensajeColor").innerHTML = cadenaColor;
			document.getElementById("mensajeColor").style.top = "40px";
			document.getElementById("mensajeColor").style.left = "555px";
			
			for (var i=0; i<4; i++){  //bucle para recorrer las 4 celdas de la primera fila
				if (celdasPintadas[i]==0){ //si la celda no tiene color (=0), le genero un color aleatorio
					colores[i]= aleatorio();
					celdaPintada(i, colores[i]);  //guardo el color para poder comparar
					console.log(i);
					console.log(colores[i]);
					for (var j=0; j<4; j++){  //bucle para comparar cada celda con las otras 3 celdas de la primera fila
						if (i!=j && celdasPintadas[j]!=0){  //comparo con las celdas ya pintadas
							while (colores[i]==colores[j]){  //mientras se repita algun color lo cambio
								colores[i]= aleatorio();
								celdaPintada(i, colores[i]);
								console.log(i);
								console.log(colores[i]);
							}
						}
					}
				} 
			}
			
			//Pinto y guardo en cada posicion el color que corresponde
			pintar(0, colores[0]);
			celdaPintada(0,colores[0]);
			pintar(1, colores[1]);
			celdaPintada(1, colores[1]);
			pintar(2, colores[2]);
			celdaPintada(2, colores[2]);
			pintar(3, colores[3]);
			celdaPintada(3, colores[3]);
		}

//pintarFila2 ES IGUAL AL ANTERIOR PERO CON LOS ELEMENTOS DEL 4 AL 7 DEL ARRAY celdasPintadas		
		function pintarFila2(){
			console.log(celdasPintadas.join()); //veo en consola que celdas estan pintadas con que colores
			document.getElementById("repetidos").style.display= "none"; //si está desplegada la paleta de colores de cambiar repetidos la eliminamos
			var cadena= "";  //variable para guardar el mensaje si algún color está repetido y el color aleatorio por el que se cambia
			var cadenaColor= "";  //variable para guardar el color por el que se sustituye cuando está repetido
			
			for (var i=4; i<8; i++){  //si la celda tiene color guardo en el array colores y compruebo que son distintos
				if (celdasPintadas[i]!=0){ 
					colores[i]= celdasPintadas[i];
				}
			}
				if(colores[4]!=0 && colores[5]!=0){  //si se repiten colores lo muestro por pantalla y el color por el que se sustituye
					if(colores[4]==colores[5]){
						cadena+= "Se repetía el color de la celda 6 <br>";
						while (colores[4]==colores[5]){
							colores[5]= aleatorio();
						}
						cadenaColor+= "y ha sido sustituido por el color \"" +nombreColor(colores[5])+ "\"<br>";
					}
				}
				if((colores[4]!=0 && colores[6]!=0) || (colores[5]!=0 && colores[6]!=0)){
					if((colores[4]==colores[6]) || (colores[5]==colores[6])){
						cadena+= "Se repetía el color de la celda 7 <br>";
						while ((colores[4]==colores[6]) || (colores[5]==colores[6])){
							colores[6]= aleatorio();
						}
						cadenaColor+= "y ha sido sustituido por el color \"" +nombreColor(colores[6])+ "\"<br>";
					}
				}
				if((colores[4]!=0 && colores[7]!=0) || (colores[5]!=0 && colores[7]!=0) || (colores[6]!=0 && colores[7]!=0)){
					if((colores[4]==colores[7]) || (colores[5]==colores[7]) || (colores[6]==colores[7])){
						cadena+= "Se repetía el color de la celda 8";
						while ((colores[4]==colores[7]) || (colores[5]==colores[7]) || (colores[6]==colores[7])){
							colores[7]= aleatorio();
						}
						cadenaColor+= "y ha sido sustituido por el color \"" +nombreColor(colores[7])+ "\"<br>";
					}
				}
			document.getElementById("mensaje").innerHTML = cadena;
			document.getElementById("mensaje").style.top = "85px";
			document.getElementById("mensajeColor").innerHTML = cadenaColor;
			document.getElementById("mensajeColor").style.top = "85px";
			document.getElementById("mensajeColor").style.left = "555px";
			
			for (var i=4; i<8; i++){  //bucle para recorrer las 4 celdas de la segunda fila
				if (celdasPintadas[i]==0){ //si la celda no tiene color (=0), se genera un color aleatorio
					colores[i]= aleatorio();
					celdaPintada(i, colores[i]);  //guardo el color para poder comparar
					console.log(i);
					console.log(colores[i]);
					for (var j=4; j<8; j++){  //bucle para comparar cada celda con las otras 3 celdas de la segunda fila
						if (i!=j && celdasPintadas[j]!=0){  //comparo con las celdas ya pintadas
							while (colores[i]==colores[j]){  //mientras se repita algun color lo cambio
								console.log(i);
								celdaPintada(i, colores[i]);
								console.log(colores[i]);
								colores[i]= aleatorio();
							}
						}
					}
				} 
			}
			
			//Pinto y guardo el cada posicion el color que corresponde
			pintar(4, colores[4]);
			celdaPintada(4,colores[4]);
			pintar(5, colores[5]);
			celdaPintada(5, colores[5]);
			pintar(6, colores[6]);
			celdaPintada(6, colores[6]);
			pintar(7, colores[7]);
			celdaPintada(7, colores[7]);
		}

//CAMBIO COLOR DE LA CELDA QUE ESTE REPETIDO
		function cambiarColor(){  
			document.getElementById("mensaje").innerHTML= "";  //si existe algun mensaje anterior lo eliminamos
			document.getElementById("mensajeColor").innerHTML= "";
			document.getElementById("mensaje").style.top = "135px";
			
			if(celdasPintadas[0]==0 || celdasPintadas[1]==0 || celdasPintadas[2]==0 || celdasPintadas[3]==0 || celdasPintadas[4]==0 || 
				celdasPintadas[5]==0  || celdasPintadas[6]==0 || celdasPintadas[7]==0){  //Comprobamos que todas las celdas estén pintadas
					document.getElementById("mensaje").innerHTML = "No están todas las celdas pintadas. PRIMERO PINTA TODAS LAS CELDAS";
			}
			
			else{  //Comparamos todas las celdas con todas las celdas			
				var posicion;  //variable para guardar la posicion de la celda con color repetido
				var encontrado= false; //variable para romper condicion si encuentra el primer repetido
				for (var i=0; i<8; i++){  //recorro todo el array celdasPintadas
					for (var j=0; j<i; j++){  //comparo con todos los anteriores
						if (encontrado==false && celdasPintadas[i]==celdasPintadas[j]){  //bucle si alguna celda tiene el mismo color que otra
							document.getElementById("repetidos").style.display= "block";
							// document.getElementById("paletaColores").disabled= false;
							document.getElementsByTagName("td")[i].style.border= "5px solid white";
							document.getElementById("repetido").innerHTML = "El color de la celda " +(i+1)+ " está repetido. <br>"+
													"PINCHA SOBRE EL COLOR CON EL QUE QUIERES SUSTITUIRLO";
							posicion= i;
							encontrado= true;
							document.getElementById("disabled").style.display= "none";
						}
					}
				}
				
				if(!encontrado){  //si todos los colores son distintos
					document.getElementById("repetidos").style.display= "none";
					document.getElementById("mensaje").innerHTML= "TERMINADO. Todos los colores son distintos";
				}
				
				return posicion;
				
			}
		}
		function numColor(opcion){  //funcion para pintar con el color clicado por el usuario
			var posicion= cambiarColor();
			pintar(posicion, opcion);
			celdaPintada(posicion,opcion);
			document.getElementsByTagName("td")[posicion].style.border= "2px solid black";
			document.getElementById("repetido").innerHTML = "PINCHA CONTINUAR para buscar más colores repetidos";
			document.getElementById("disabled").style.display= "block";
			// document.getElementById("paletaColores").disabled= true; //despues de pintar deshabilitamos onclick de los botones de colores
		}
		
//FUNCION PARA PINTAR LAS CELDAS CON LOS COLORES QUE SELECCIONE EL USUARIO	
		var celda= 0;
		function pintaUsuario(){
			document.getElementById("mensaje").innerHTML= "";  //si existe algun mensaje anterior lo eliminamos
			document.getElementById("mensajeColor").innerHTML= "";
			document.getElementById("repetidos").style.display= "none"; //si está desplegada la paleta de colores de cambiar repetidos la eliminamos
			for (var i=0; i<document.getElementsByClassName("td").length; i++){
				document.getElementsByClassName("td")[i].style.border= "2px solid black";  //restauramos el borde de la tabla (si está seleccionada alguna celda de la function cambiarColor)
			}
			
			for (var i=0; i<8; i++){  //inicializo todas las posiciones de array celdasPintadas a 0 (que es ningun color)
				pintar (i,0);
				celdaPintada(i,0);
			}
			celda= 0;
			document.getElementById("colores").style.display= "block";
			document.getElementById("selectCelda").innerHTML = "Selecciona el color para la celda " +(celda+1);
			return celda;
		}
		function pintaSinBorrar(){ //duplico la funcion sin inicializar las celdas a 0, para que no borre las pintadas
			document.getElementById("colores").style.display= "block";
			document.getElementById("selectCelda").innerHTML = "Selecciona el color para la celda " +(celda+1);
			return celda;
		}
		function pintaColor(opcion){  //funcion para pintar con el color clicado por el usuario
			var posicion= pintaSinBorrar();
			pintar(posicion, opcion);
			celdaPintada(posicion,opcion);
			celda++;
			document.getElementsByTagName("td")[posicion].style.border= "2px solid black";
			document.getElementById("selectCelda").innerHTML = "Selecciona el color para la celda " +(celda+1);
			if(celda==8){
				document.getElementById("colores").style.display= "none";
				document.getElementById("mensaje").style.top = "185px";
				document.getElementById("mensaje").innerHTML= "TERMINADO. Todas las celdas están pintadas";
				celda= 0;
			}
		}
		
		
//RECARGAR PAGINA
		function recargar(){
			document.getElementById("recarga").innerHTML = location.reload();
		}