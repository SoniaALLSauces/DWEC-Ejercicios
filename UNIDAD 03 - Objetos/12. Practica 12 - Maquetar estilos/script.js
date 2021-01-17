/* Autor: Sonia Anton Llanes */
/* Fecha: 15/12/2020 */
/* Practica 12 - Expresionismo */


// DAR ESTILO A LA PÁGINA
	function darEstilo(){
		document.getElementsByTagName("h1")[0].style.textAlign= "center";
		document.getElementsByTagName("h1")[0].style.textTransform= "uppercase";
		document.getElementsByTagName("div")[0].style.display= "flex";
		document.getElementsByTagName("div")[0].style.justifyContent= "space-between";
		document.getElementsByTagName("h4")[0].style.fontWeight= "lighter";
		for (var i=0; i<document.images.length; i++){
			document.images[i].style.border= "15px solid black";
			document.images[i].style.padding= "5px";
			document.images[i].style.margin= "0 20px 3px 5px";
			document.images[i].style.float= "left";
		}
		for (var i=0; i<document.getElementsByTagName("p").length; i++){
			document.getElementsByTagName("p")[i].style.textAlign= "justify";
			document.getElementsByTagName("p")[i].style.lineHeight= "1.5";
		}
		for (var i=0; i<document.getElementsByTagName("span").length; i++){
			document.getElementsByTagName("span")[i].style.color= "orange";
		}
		for (var i=0; i<document.links.length; i++){
			document.links[i].style.color= "red";
		}
	}






