/* Autor: Sonia Anton Llanes */
/* Fecha: 01/12/2020 */
/* Practica B - Objeto window.document */


/* Ejercicio 1. Crea un script que al pulsar en un botón se abran a la vez 5 ventanas “vacías”. 
Luego crea varios botones que recarguen páginas web/documentos web diferentes en cada una de las ventanas. 
  Por ejemplo: en la ventana 1 que cargue Google, en la ventana 2 un documento html almacenado en el equipo,
  en la ventana 3 la página del ayuntamiento de Benavente y así sucesivamente…
Luego permite que el script cierre una ventana en concreto.
  Pídele al usuario que te diga qué ventana quiere cerrar y ciérrala. */
		var ventanas= new Array();
		function abrir(){
			ventanas[0]= window.open("", "", "width=400,height=300,top=30,left=330");
			ventanas[1]= window.open("", "", "width=400,height=300,top=60,left=360");
			ventanas[2]= window.open("", "", "width=400,height=300,top=90,left=390");
			ventanas[3]= window.open("", "", "width=400,height=300,top=120,left=420");
			ventanas[4]= window.open("", "", "width=400,height=300,top=150,left=450");
		}
		
		function google(){
			ventanas[3].focus();
			ventanas[3].location.assign("https://www.google.es/");
		}
		function w3school(){
			ventanas[0].focus();
			ventanas[0].location.assign("https://www.w3schools.com/");
		}
		function github(){
			ventanas[1].focus();
			ventanas[1].location.assign("https://github.com/");
		}
		function wikipedia(){
			ventanas[4].focus();
			ventanas[4].location.assign("https://es.wikipedia.org/wiki/Wikipedia:Portada");
		}
		function youtube(){
			ventanas[2].focus();
			ventanas[2].location.assign("https://www.youtube.com/");
		}
		
		function cerrar(){
			var ventana= prompt("Indique que ventana quiere cerrar: \n" +
								"1. Google \n" +
								"2. w3school \n" +
								"3. GitHub \n" +
								"4. Wikipedia \n" +
								"5. youtube \n");
				while(isNan(ventana) && ventana<1 && ventana>5){
					ventana= prompt("Indique una opción correcta (1-5) ¿que ventana quiere cerrar? \n" +
								"1. Google \n" +
								"2. w3school \n" +
								"3. GitHub \n" +
								"4. Wikipedia \n" +
								"5. youtube \n");
				}
			ventana= parseInt(ventana);
			switch (ventana){
				case 1:
					ventanas[3].close();
					break;
				case 2:
					ventanas[0].close();
					break;
				case 3:
					ventanas[1].close();
					break;
				case 4:
					ventanas[4].close();
					break;
				case 5:
					ventanas[5].close();
					break;
			}
		}


