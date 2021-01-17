/* Autor: Sonia Anton Llanes */
/* Fecha: 30/11/2020 */
/* Practica 08 - Document 2 */


/* Ejercicio 1: Cambia con JavaScript la alineación y el color de la fuente del <h1> de la página a centrado. */
		function cambiar(){
			document.getElementsByTagName("h1")[0].style.textAlign= "center";
			document.getElementsByTagName("h1")[0].style.color= "red";
		}

/* Ejercicio 2: Poner en negrita y subrayado todos los “títulos”: Formularios, Imágenes, Enlaces…. */
		function negritaSubrayado(){
			for (var i=0; i<document.getElementsByTagName("h3").length; i++){
				document.getElementsByTagName("h3")[i].style.fontWeight= "bolder";
				document.getElementsByTagName("h3")[i].style.textDecoration= "underline";
			}
		}

/* Ejercicio 3: Cambiar el fondo de la página a un color que no sea muy “fuerte” */
		function fondoPagina(){
			document.getElementById("body").style.backgroundColor= "#D4E157";
		}

/* Ejercicio 4: Establecer un borde “visible” a todas las imágenes */
		function bordeImagen(){
			for (var i=0; i<document.images.length; i++){
				document.images[i].style.border= "5px solid green";
			}
		}

/* Ejercicio 5: Cambiar la alineación de la primera y la última imagen del contenedor 2 */
		function alineacionImg(){
			document.images[3].style.margin= "auto";
			document.images[6].style.float= "right";
		}

/* Ejercicio 6: Cambiar la fuente de los botones, establece un borde y ponles un color “como quieras” */
		function estiloBoton(){
			for (var i=0; i<document.getElementsByTagName("button").length; i++){
					document.getElementsByTagName("button")[i].style.fontFamily= "Georgia";
					document.getElementsByTagName("button")[i].style.border= "2px solid #186A3B";
					document.getElementsByTagName("button")[i].style.background= "#FFEE58";
				}
		}

/* Ejercicio 7: Cambiar el formato de los botones del formulario (formato diferente a los botones del ejercicio 6) */
		function estiloInput(){
			for (var i=0; i<document.getElementsByTagName("input").length; i++){
					document.getElementsByTagName("input")[i].style.fontFamily= "verdana";
					document.getElementsByTagName("input")[i].style.border= "2px solid #E91E63 ";
					document.getElementsByTagName("input")[i].style.background= "#F8BBD0";
					document.getElementsByTagName("input")[i].style.height= "30px";
					document.getElementsByTagName("input")[i].style.margin= "3px";
				}
		}

/* Ejercicio 8: Cambiar el tamaño, la fuente y la alineación a derecha del primer párrafo */
	/*al ser mi primer párrafo del index mi nombre, tengo que indicar el elemento 1
	para modificar el primer párrafo del ejercicio*/
		function parrafoUno(){
			document.getElementsByTagName("p")[1].style.fontSize= "0.7em";
			document.getElementsByTagName("p")[1].style.fontFamily= "sans-serif";
			document.getElementsByTagName("p")[1].style.textAlign= "right";
		}

/* Ejercicio 9: Cambiar el tamaño y el color del segundo párrafo. */
		function parrafoDos(){
			document.getElementsByTagName("p")[2].style.fontSize= "1.5em";
			document.getElementsByTagName("p")[2].style.color= "violet";
		}

/* Ejercicio 10: Aplicar un estilo que quieras a los inputs que no se hayan utilizado antes. */
		function estiloRadioButton(){
			document.getElementsByTagName("input")[4].style.width= "20px";
			document.getElementsByTagName("input")[4].style.height= "20px";
		}
		
/* Ejercicio 11: Cambiar el tamaño de todas las imágenes al que tú quieras */		
		function tamanoImagen(){
			for (var i=0; i<document.images.length; i++){
				document.images[i].style.width= "18%";
			}
		}
		
		
		
		
		
		
		
