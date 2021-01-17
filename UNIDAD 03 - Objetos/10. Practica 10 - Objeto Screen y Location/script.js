/* Sonia Anton Llanes */
/* Fecha: 02/12/2020 */
/* Practica 10 - Objetos Screen y Location */


//Propiedades SCREEN
		function alturaMax(){
			document.getElementById("altM").innerHTML = screen.availHeight;
		}		
		function anchoMax(){
			document.getElementById("anchM").innerHTML = screen.availWidth;
		}		
		function color(){
			document.getElementById("color").innerHTML = screen.colorDepth;
		}		
		function altoTotal(){
			document.getElementById("alto").innerHTML = screen.height;
		}		
		function anchoTotal(){
			document.getElementById("ancho").innerHTML = screen.width;
		}

//Propiedades LOCATION		
		function urlAncla(){
			document.getElementById("urlA").innerHTML = location.hash;
		}		
		function nombrePuerto(){
			document.getElementById("nHost").innerHTML = location.host;
		}		
		function nombreHost(){
			document.getElementById("nombPuert").innerHTML = location.hostname;
		}		
		function urlCompleta(){
			document.getElementById("urlC").innerHTML = location.href;
		}		
		function origen(){
			document.getElementById("org").innerHTML = location.orign;
		}
		function rutaAcceso(){
			document.getElementById("ruta").innerHTML = location.pathname;
		}		
		function puerto(){
			document.getElementById("npuerto").innerHTML = location.port;
		}		
		function protocolo(){
			document.getElementById("protoc").innerHTML = location.href;
		}		
		function consulta(){
			document.getElementById("cons").innerHTML = location.orign;
		}
		
//Propiedades LOCATION		
		function nuevoDoc(){
			document.getElementById("docNew").innerHTML = location.assign("https://www.w3schools.com/");
		}		
		function recargar(){
			document.getElementById("recarga").innerHTML = location.reload();
		}		
		function reemplazar(){
			document.getElementById("reemplaza").innerHTML = location.replace("https://www.w3schools.com/");
		}		

//Cargar Estilos:
		function estilos(){
				document.getElementsByTagName("h2")[1].style.color= "red";
				document.getElementsByTagName("h2")[1].style.textAlign= "center";
			for (var i=0; i<document.getElementsByTagName("h3").length; i++){
				document.getElementsByTagName("h3")[i].style.fontSize= "1.4em";
				document.getElementsByTagName("h3")[i].style.textDecoration= "underline";
				document.getElementsByTagName("h3")[i].style.color= "red";
			}
			for (var i=0; i<document.getElementsByTagName("h4").length; i++){
				document.getElementsByTagName("h4")[i].style.fontSize= "1.3em";
				document.getElementsByTagName("h4")[i].style.textDecoration= "underline";
				document.getElementsByTagName("h4")[i].style.color= "blue";
			}
			for (var i=0; i<document.getElementsByTagName("button").length; i++){
				document.getElementsByTagName("button")[i].style.fontSize= "12px";
				document.getElementsByTagName("button")[i].style.color= "darkred";
			}
		}

//Ventana nueva:
		function nuevaVentana(){
			window.open("", "", "width=400,height=300,top=200,left=500");
		}
		
//Ventana nueva con las propiedades de screen y location
		function nuevaWindow(){
			window.open("indexPropiedades.html", "", "width=800,height=500,top=30,left=50");
		}


