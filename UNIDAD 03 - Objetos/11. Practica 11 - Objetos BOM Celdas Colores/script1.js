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
		function pintar(posicion, opcion){ //funcion que pinta pasandole la posicion y el número aleatorio generado
			console.log (posicion);
			console.log (opcion);
			switch (opcion){
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
		

//PINTAR FILAS DE COLORES DISTINTOS (NO SE PUEDEN REPETIR)
		var colores= new Array(8); // creo un array de 8 variables para guardar el color de cada celda
		for (var i=0; i<8; i++){  //inicializo todas las posiciones a 0 (que es ningun color)
			colores[i]=0;
		}
		
		function pintarFila1(){
			console.log(celdasPintadas.join()); //veo en consola que celdas estan pintadas con que colores
			for (var i=0; i<4; i++){  //si la celda tiene color guardo en el array colores y compruebo que son distintos
				if (celdasPintadas[i]!=0){ 
					colores[i]= celdasPintadas[i];
				}
			}
			var cadena= "";  //variable para guardar si algún color está repetido y mostrarlo en pantalla del html
			if(colores[0]!=0 && colores[1]!=0){
				if(colores[0]==colores[1]){
					cadena+= "Se repetía el color de la celda 2 <br>";
				}
			}
			if((colores[0]!=0 && colores[2]!=0) || (colores[1]!=0 && colores[2]!=0)){
				if((colores[0]==colores[2]) || (colores[1]==colores[2])){
					cadena+= "Se repetía el color de la celda 3 <br>";
				}
			}
			if((colores[0]!=0 && colores[3]!=0) || (colores[1]!=0 && colores[3]!=0) || (colores[2]!=0 && colores[3]!=0)){
				if((colores[0]==colores[3]) || (colores[1]==colores[3]) || (colores[2]==colores[3])){
					cadena+= "Se repetía el color de la celda 4";
				}
			}
			document.getElementById("repetidosFila1").innerHTML = cadena;
			
			for (var i=0; i<4; i++){  //si la celda no tiene color le genero un color aleatorio
				if (celdasPintadas[i]==0){ 
					colores[i]= aleatorio();
				} 
			}
			
			while (colores[1]==colores[0]){
				colores[1]= aleatorio();
			}
			while (colores[2]==colores[0] || colores[2]==colores[1]){
				colores[2]= aleatorio();
			}
			while (colores[3]==colores[0] || colores[3]==colores[1] || colores[3]==colores[2]){
				colores[3]= aleatorio();
			}
			
			//Pinto y guardo el cada posicion el color que corresponde
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
			for (var i=4; i<8; i++){  //si la celda tiene color guardo en el array colores y compruebo que son distintos
				if (celdasPintadas[i]!=0){ 
					colores[i]= celdasPintadas[i];
				}
			}
			var cadena= "";  //variable para guardar si algún color está repetido y mostrarlo en pantalla del html
			if(colores[4]!=0 && colores[5]!=0){
				if(colores[4]==colores[5]){
					cadena+= "Se repetía el color de la celda 6 \n";
				}
			}
			if((colores[4]!=0 && colores[6]!=0) || (colores[5]!=0 && colores[6]!=0)){
				if((colores[4]==colores[6]) || (colores[5]==colores[6])){
					cadena+= "Se repetía el color de la celda 7 \n";
				}
			}
			if((colores[4]!=0 && colores[7]!=0) || (colores[5]!=0 && colores[7]!=0) || (colores[6]!=0 && colores[7]!=0)){
				if((colores[4]==colores[7]) || (colores[5]==colores[7]) || (colores[6]==colores[7])){
					cadena+= "Se repetía el color de la celda 8";
				}
			}
			document.getElementById("repetidosFila2").innerHTML = cadena;
			
			for (var i=4; i<8; i++){  //si la celda no tiene color le genero un color aleatorio
				if (celdasPintadas[i]==0){ 
					colores[i]= aleatorio();
				} 
			}
			
			while (colores[5]==colores[4]){
				colores[5]= aleatorio();
			}
			while (colores[6]==colores[4] || colores[6]==colores[5]){
				colores[6]= aleatorio();
			}
			while (colores[7]==colores[4] || colores[7]==colores[5] || colores[7]==colores[6]){
				colores[7]= aleatorio();
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
		function cambiarColor(){  //Comprobamos que todas las celdas estén pintadas
			if(celdasPintadas[0]==0 || celdasPintadas[1]==0 || celdasPintadas[2]==0 || celdasPintadas[3]==0 || celdasPintadas[4]==0 || 
				celdasPintadas[5]==0  || celdasPintadas[6]==0 || celdasPintadas[7]==0){
					document.getElementById("pintalos").innerHTML = "No están todas las celdas pintadas. PRIMERO PINTA TODAS LAS CELDAS";
			}
			
			else{  //Comparamos todas las celdas con todas las celdas
				document.getElementById("pintalos").innerHTML= "";  //si estan todos las celdas pintadas, eliminamos el mensaje p#pintalos
				
				var posicion;  //variable para guardar la posicion de la celda con color repetido
				var encontrado= false; //variable para romper condicion si encuentra el primer repetido
				for (var i=0; i<8; i++){  //recorro todo el array celdasPintadas
					for (var j=0; j<i; j++){  //comparo con todos los anteriores
						if (encontrado==false && celdasPintadas[i]==celdasPintadas[j]){  //bucle si alguna celda tiene el mismo color que otra
							document.getElementById("repetidos").style.display= "block";
							// document.getElementById("paletaColores").disabled= false;
							document.getElementsByTagName("td")[i].style.border= "3px solid red";
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
					document.getElementById("pintalos").innerHTML= "TERMINADO. Todos los colores son distintos";
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
		
		
		function pintaUsuario(){
			document.getElementById("mensaje").innerHTML = "EN PROCESO";
		}
		
//RECARGAR PAGINA
		function recargar(){
			document.getElementById("recarga").innerHTML = location.reload();
		}