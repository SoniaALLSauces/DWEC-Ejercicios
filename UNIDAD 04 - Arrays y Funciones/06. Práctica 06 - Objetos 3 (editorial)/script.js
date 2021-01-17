/* Autor: Sonia Anton Llanes */
/* Fecha: 22/11/2020 */
/* Practica 06 - Objetos 3 */


/* SCRIPT EDITORIAL */

		//FUNCION COMERCIALES:
			function Comercial(nombre_in, tematica_in){
				this.nombre = nombre_in;
				this.tematica = tematica_in;
			}
		
		//FUNCION IMPRIMIR LIBROS:
			function imprimirDatos(){
				return this.isbin +":  \n  Título: \""+ this.titulo +"\" \n  Escrito por: \""+ this.autor +
				"\" \n  Con \""+ this.nPaginas +"\" páginas. Y tapa \""+ this.tapa +
				"\" \n  \""+this.nEdicion +"\". De temática \""+ this.comercial.tematica +"\" \n  Comercial: \"" +this.comercial.nombre +"\"";
			}
			
		//OBJEGO LIBROS: datos: isbin, titulo, autor, nº paginas, nº edicion, tipo tapa, nombre comercial y temática <- estos dos ultimos los tengo en objeto comercial
			function Libro(isbin_in, titulo_in, autor_in, nPaginas_in, nEdicion_in, tapa_in, comercial_in){
				this.isbin = isbin_in;
			 	this.titulo = titulo_in;
			 	this.autor = autor_in;
				this.nPaginas = nPaginas_in;
			 	this.nEdicion = nEdicion_in;
			 	this.tapa = tapa_in;
				this.comercial = comercial_in;	
				this.imprimirDatos = imprimirDatos;
			}
		
		//METODOS SET (para poder modificar en la opcion 3)
			Libro.prototype.setTitulo = function( titulo ) {
				this.titulo = titulo;
			}
			Libro.prototype.setAutor = function( autor ) {
				this.autor = autor;
			}
			Libro.prototype.setNPaginas = function( nPaginas ) {
				this.nPaginas = nPaginas;
			}
			Libro.prototype.setNEdicion = function( nEdicion ) {
				this.nEdicion = nEdicion;
			}
			Libro.prototype.setTapa = function( tapa ) {
				this.tapa = tapa;
			}
			Libro.prototype.setComercial = function( comercial ) {
				this.comercial = comercial;
			}
			
		//CREO OBJETOS PARA RELLENAR DATOS DE LA EDITORIAL
		//COMERCIALES
			var comerciales = new Array();  //array para almacenar los libros de la editorial
			comerciales[0]= new Comercial ("Pepe","legislacion");
			comerciales[1]= new Comercial ("Maria","biologia");
			comerciales[2]= new Comercial ("Oscar","artes plasticas");
			comerciales[3]= new Comercial ("Fernando","informatica");
			
		//LIBROS:
			var libros = new Array();  //array para almacenar los libros de la editorial
			libros[0]= new Libro ("978-84-234-2931-8","La amenaza hacker","Deepak Daswani",210,"2º edicion","blanda",comerciales[3]);
			libros[1]= new Libro ("978-84-670-4621-2","Los hombres que susurran a las máquinas","Antonio Salas",552,"5º edicion","blanda",comerciales[3]);
			libros[2]= new Libro ("978-84-08-23358-9","¿Que es la vida?","Paul Nurse",208,"2º edicion","blanda",comerciales[1]);
			libros[3]= new Libro ("978-84-344-3310-6","Terra insecta","Anne Sverdrup-Thygeson",216,"1º edicion","blanda",comerciales[1]);
			libros[4]= new Libro ("978-84-329-0399-1","Emprender un negocio para Dummies","Colin Barrow",448,"3º edicion","dura",comerciales[0]);
			libros[5]= new Libro ("978-607-747-209-4","De viaje por la ruta del arte","Carmen Reviriego",365,"2º edicion","dura",comerciales[2]);
		
			// var cadena="";
			// for (var i=0; i<libros.length; i++){
				// cadena+= libros[i].imprimirDatos();
			// }
			// alert (cadena);

		
		// MENU DE LA EDITORIAL:
		var opcion= prompt("EDITORIAL. Selecciona una de las siguientes opciones: \n" +
							"1. Añadir nuevo libro \n" +
							"2. Eliminar libro seleccionado \n" +
							"3. Editar libro seleccionado \n" +
							"4. Número de libros de la temática indicada \n" +
							"5. Nombre de los comerciales de la temática indicada \n" +
							"6. Datos del libro seleccionado");
			while (isNaN(opcion) || opcion<1 || opcion>6){  //controlo que solo se introduzcan valores de 1 a 3
				opcion= prompt("ERROR. Selecciona una de las siguientes opciones: \n" +
							"1. Añadir nuevo libro \n" +
							"2. Eliminar libro seleccionado \n" +
							"3. Editar libro seleccionado \n" +
							"4. Número de libros de la temática indicada \n" +
							"5. Nombre de los comerciales de la temática indicada \n" +
							"6. Datos del libro seleccionado");
			}
		
		opcion= parseInt(opcion);
		switch (opcion){
			case 1:
				var isbin= prompt("Introduce el ISBIN del libro: ");
				var existe= false; //valido que el isbin no existe
					for (var i=0; i<libros.length; i++){
						if (libros[i].isbin ==isbin){
							existe= true;
						}
					}
				if (existe){
					alert ("ERROR. ISBIN ya existe");
				} else{
					var titulo= prompt("Introduce el título: ");
					var autor= prompt("Introduce el autor: ");
					var nPag= prompt("Introduce el número de páginas: ");
						while (isNaN(nPag)){ //controlo que en páginas se introduzcan numeros
							nPag= prompt("ERROR. Introduce el número de páginas en número: ");
						}
						nPag= parseInt(nPag);
					var nEdicion= prompt("Introduce la última edición (solo el número): ");
						while (isNaN(nEdicion)){
							nEdicion= prompt("ERROR. Introduce la última edición en número: ");
						}
						nEdicion= nEdicion+ "º edicion";
					var tapa= prompt("Introduce el tipo de tapa (blanda o dura): ");
					tapa= tapa.toLowerCase();
						while (tapa!="blanda" && tapa!="dura"){ //valido que el tipo de tapa sea solo blanda o dura
							tapa= prompt("ERROR. Introduce el tipo de tapa correcto (blanda o dura): ");
							tapa= tapa.toLowerCase();
						}
					var comercial= prompt("Introduce el nombre del comercial asignado: ");
					var comercialExiste= false;  //valido que el comercial indicado existe
					var indice;  //variable para guardar el indice del comercial
						for (var i=0; i<comerciales.length; i++){
							if (comerciales[i].nombre ==comercial){
								comercialExiste= true;
								indice= i;
							}
						}
						while (!comercialExiste){
							comercial= prompt("ERROR. Introduce el nombre comercial creado: ");
								comercialExiste= false;  //valido que el comercial indicado existe
								for (var i=0; i<comerciales.length; i++){
									if (comerciales[i].nombre ==comercial){
										comercialExiste= true;
										indice= i;
									}
								}
						}
					libros.push(new Libro (isbin,titulo,autor,nPag,nEdicion,tapa,comerciales[indice]));
					alert ("El libro se ha introducido CORRRECTAMENTE");
				}
				break;
				
			case 2:
				var titulo= prompt("Introduce el título del libro a eliminar: ");
				var tituloExiste= false;  //compruebo que el libro indicado existe
				var indiceLibro;  //guardo el índice el libro
				for (var i=0; i<libros.length; i++){
					if (libros[i].titulo ==titulo){
						tituloExiste= true;
						indiceLibro= i;
					}
				}
				//alert(indiceLibro);
				if (!tituloExiste){
					alert ("ERROR. El libro no existe, o el título no es correcto");
				} else{
					var confirmacion= prompt("¿Está seguro que quiere eliminar el libro (y/n)? \n" +
												libros[indiceLibro].titulo +" de "+ libros[indiceLibro].autor);
						while (confirmacion!="y" && confirmacion!="n"){
							confirmacion= prompt("Por favor solo indicar 'y' o 'n' \n" +
												  "¿Está seguro que quiere eliminar el libro? \n" +
												  libros[indiceLibro].titulo +" de "+ libros[indiceLibro].autor);
						}
					if (confirmacion=="y"){
						libros.splice(indiceLibro, 1);
						alert ("El libro se ha eliminado CORRRECTAMENTE");
					}
				}
				break;
				
			case 3:
				var isbin= prompt("Introduce el isbin del libro a modificar: ");
				var isbinExiste= false;  //compruebo que el isbin indicado existe
				var indiceLibro;  //guardo el índice el libro
				for (var i=0; i<libros.length; i++){
					if (libros[i].isbin ==isbin){
						isbinExiste= true;
						indiceLibro= i;
					}
				}
				if (!isbinExiste){
					alert ("ERROR. El libro no existe, o el isbin no es correcto");
				} else{
					//alert ("Estos son los datos del libro: \n" + libros[indiceLibro].imprimirDatos());
					//Modificar el título	
						var modTitulo= prompt("¿Quiere modificar el título (y/n)? \n" +
													libros[indiceLibro].titulo);
							while (modTitulo!="y" && modTitulo!="n"){ //valido que solo introduzca yes o no
								modTitulo= prompt("Por favor solo indicar 'y' o 'n' \n" +
													  "¿Quiere modificar el título? \n  " +
													  libros[indiceLibro].titulo);
							}
						if (modTitulo=="y"){
							var newTitulo= prompt ("Introduzca el nuevo título: ");
							libros[indiceLibro].setTitulo(newTitulo);
							alert ("El título se ha modificado CORRRECTAMENTE");
						}
					//Modificar el autor	
						var modAutor= prompt("¿Quiere modificar el autor del libro (y/n)? \n" +
													libros[indiceLibro].autor);
							while (modAutor!="y" && modAutor!="n"){ //valido que solo introduzca yes o no
								modAutor= prompt("Por favor solo indicar 'y' o 'n' \n" +
													  "¿Quiere modificar el autor del libro? \n  " +
													  libros[indiceLibro].autor);
							}
						if (modAutor=="y"){
							var newAutor= prompt ("Introduzca el nuevo autor: ");
							libros[indiceLibro].setAutor(newAutor);
							alert ("El autor se ha modificado CORRRECTAMENTE");
						}
					//Modificar el numero de páginas	
						var modnPag= prompt("¿Quiere modificar el número de páginas del libro (y/n)? \n" +
													libros[indiceLibro].nPaginas);
							while (modnPag!="y" && modnPag!="n"){ //valido que solo introduzca yes o no
								modnPag= prompt("Por favor solo indicar 'y' o 'n' \n" +
													  "¿Quiere modificar el número de páginas del libro? \n  " +
													  libros[indiceLibro].nPaginas);
							}
						if (modnPag=="y"){
							var newnPag= prompt ("Introduzca el nuevo número de páginas: ");
								while (isNaN(newnPag)){ //controlo que en páginas se introduzcan numeros
									newnPag= prompt("ERROR. Introduce el número de páginas en número: ");
								}
								newnPag= parseInt(newnPag);
							libros[indiceLibro].setNPaginas(newnPag);
							alert ("El número de páginas se ha modificado CORRRECTAMENTE");
						}
					//Modificar el numero de edición	
						var modEdicion= prompt("¿Quiere modificar el número de edición (y/n)? \n" +
													libros[indiceLibro].nEdicion);
							while (modEdicion!="y" && modEdicion!="n"){  //valido que solo introduzca yes o no
								modEdicion= prompt("Por favor solo indicar 'y' o 'n' \n" +
													  "¿Quiere modificar el número de edición? \n  " +
													  libros[indiceLibro].nEdicion);
							}
						if (modEdicion=="y"){
							var newEdicion= prompt ("Introduzca el nuevo número de edición (solo el numero): ");
								while (isNaN(newEdicion)){
									newEdicion= prompt("ERROR. Introduce la edición en número: ");
								} 
								newEdicion= newEdicion+ "º edicion";
							libros[indiceLibro].setNEdicion(newEdicion);
							alert ("El número de edición se ha modificado CORRRECTAMENTE");
						}
					//Modificar el tipo de tapa	
						var modTapa= prompt("¿Quiere modificar el tipo de tapa (y/n)? \n" +
													libros[indiceLibro].tapa);
							while (modTapa!="y" && modTapa!="n"){ //valido que solo introduzca yes o no
								modTapa= prompt("Por favor solo indicar 'y' o 'n' \n" +
													  "¿Quiere modificar el tipo de tapa? \n  " +
													  libros[indiceLibro].tapa);
							}
						if (modTapa=="y"){
							var newTapa= prompt ("Introduzca el nuevo tipo de tapa (blanda o dura): ");
							newTapa= newTapa.toLowerCase();
								while (newTapa!="blanda" && newTapa!="dura"){ //valido que el tipo de tapa sea solo blanda o dura
									newTapa= prompt("ERROR. Introduce el tipo de tapa correcto (blanda o dura): ");
									newTapa= tapa.toLowerCase();
								}
							libros[indiceLibro].setTapa(newTapa);
							alert ("El tipo de tapa se ha modificado CORRRECTAMENTE");
						}
					//Modificar el comercial (que contiene la temática)
						var modComercial= prompt("¿Quiere modificar el comercial del libro (y/n)? \n" +
													libros[indiceLibro].comercial.nombre);
							while (modComercial!="y" && modComercial!="n"){ //valido que solo introduzca yes o no
								modComercial= prompt("Por favor solo indicar 'y' o 'n' \n" +
													  "¿Quiere modificar el comercial? \n  " +
													  libros[indiceLibro].comercial.nombre);
							}
						if (modComercial=="y"){
							var newComercial= prompt ("Introduzca el nombre del nuevo comercial : ");
								comercialExiste= false;  //valido que el comercial indicado existe
								// utilizo la variable ya creada en el case 1 para guardar el indice del comercial
									for (var i=0; i<comerciales.length; i++){
										if (comerciales[i].nombre ==comercial){
											comercialExiste= true;
											indice= i;
										}
									}
									while (!comercialExiste){
										comercial= prompt("ERROR. Introduce el nombre de un comercial creado: ");
											comercialExiste= false;  //valido que el comercial indicado existe
											for (var i=0; i<comerciales.length; i++){
												if (comerciales[i].nombre ==comercial){
													comercialExiste= true;
													indice= i;
												}
											}
									}
							libros[indiceLibro].setComercial(comerciales[indice]);
							alert ("El comercial se ha modificado CORRRECTAMENTE");
						}
					
						alert ("Los nuevos datos del libro modificado son: \n" +libros[indiceLibro].imprimirDatos());
				}
				break;
				
			case 4:
				var tematica= prompt("Indique temática: informatica, biologia, artes plasticas o legislacion");
				tematica= tematica.toLowerCase();  //paso a minusculas para tener menos comparativas
					while (tematica!="informatica" && tematica!="biologia" &&
							tematica!="artes plasticas" && tematica!="legislacion"){
						tematica= prompt("ERROR. Por favor indique una temática correcta: informatica, biologia, artes plasticas o legislacion");
						tematica= tematica.toLowerCase();
					}
				var contLibros= 0;  //variable para contar los libros de la tematica indicada
				for (var i=0; i<libros.length; i++){
					if (libros[i].comercial.tematica==tematica){
						contLibros++;
					}
				}
				alert ("4. El número de libros de la temática seleccionada " +tematica+ " son " +contLibros);
				break;
				
			case 5:
				var tematica= prompt("Indique temática: informatica, biologia, artes plasticas o legislacion");
				tematica= tematica.toLowerCase();  //paso a minusculas para tener menos comparativas
					while (tematica!="informatica" && tematica!="biologia" &&
							tematica!="artes plasticas" && tematica!="legislacion"){
						tematica= prompt("ERROR. Por favor indique una temática correcta: informatica, biologia, artes plasticas o legislacion");
						tematica= tematica.toLowerCase();
					}
				var cadComerciales= "";  //variable para contar los libros de la tematica indicada
				for (var i=0; i<libros.length; i++){
					if (libros[i].comercial.tematica==tematica){
						cadComerciales+= libros[i].comercial.nombre +"\n";
					}
				}
				alert ("5. Los comerciales de la temática seleccionada " +tematica+ " son: \n " +cadComerciales);
				break;
				
			case 6:
				var isbinTitulo= prompt("Introduce el isbin o título del libro a mostrar: ");
				var existe= false;  //compruebo que el isbin indicado existe
				var indice;  //guardo el índice el libro
				for (var i=0; i<libros.length; i++){
					if (libros[i].isbin==isbinTitulo || libros[i].titulo==isbinTitulo){
						existe= true;
						indice= i;
					}
				}
				if (!existe){
					alert ("ERROR. El libro no existe, o el isbin o título no es correcto");
				} else{
					alert ("Los datos del libro indicado son: \n" +libros[indice].imprimirDatos());
				}
				break;
			
		}




