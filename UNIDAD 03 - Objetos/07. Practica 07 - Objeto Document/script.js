/* Autor: Sonia Anton Llanes */
/* Fecha: 26/11/2020 */
/* Practica 07 - Document 1 */


/* Ejercicio 1: Muestra por pantalla el título, la última fecha de modificación, el dominio y la URL completa del
documento actual. */
		function mostrar(){
			alert (document.title +"\n" +
					document.lastModified +"\n" +
					document.domain +"\n" +
					document.URL);
		}

/* Ejercicio 2: Muestra por console.log contadores con la siguiente información. */
		function contFormularios(){
			console.log(document.forms);
		}
		
		function contImagenes(){
			console.log(document.images);
		}
		
		function contEnlaces(){
			console.log(document.links);
		}
		
		function contEnlacesName(){
			console.log(document.anchors);
		}
		
		function contIdUno(){
			console.log(document.getElementById("P1"));
		}
		
		function contParrafos(){
			console.log(document.getElementsByTagName("p"));
		}
		
		function contClass(){
			console.log(document.getElementsByName("Google"));
		}