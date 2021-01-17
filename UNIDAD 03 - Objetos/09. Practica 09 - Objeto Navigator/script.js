/* Sonia Anton Llanes */
/* Fecha: 01/12/2020 */
/* Practica 09 - Navigator */


		function codigoNavegador(){
			document.getElementById("propiedad").innerHTML = "appCodeName: " +navigator.appCodeName;
			for (var i=0; i<document.getElementsByClassName("aCN").length; i++){
				document.getElementsByClassName("aCN")[i].style.fontWeight= "bolder";
				document.getElementsByClassName("aCN")[i].style.textDecoration= "underline";
				document.getElementsByClassName("aCN")[i].style.color= "blue";
			}
		}
		
		function nombreNavegador(){
			document.getElementById("propiedad").innerHTML = "appName: " +navigator.appName;
			for (var i=0; i<document.getElementsByClassName("aN").length; i++){
				document.getElementsByClassName("aN")[i].style.fontWeight= "bolder";
				document.getElementsByClassName("aN")[i].style.textDecoration= "underline";
				document.getElementsByClassName("aN")[i].style.color= "blue";
			}
		}
		
		function version(){
			document.getElementById("propiedad").innerHTML = "appVersion: " +navigator.appVersion;
			for (var i=0; i<document.getElementsByClassName("aV").length; i++){
				document.getElementsByClassName("aV")[i].style.fontWeight= "bolder";
				document.getElementsByClassName("aV")[i].style.textDecoration= "underline";
				document.getElementsByClassName("aV")[i].style.color= "blue";
			}
		}
		
		function cookies(){
			document.getElementById("propiedad").innerHTML = "cookieEnabled: " +navigator.cookieEnabled;
			for (var i=0; i<document.getElementsByClassName("cE").length; i++){
				document.getElementsByClassName("cE")[i].style.fontWeight= "bolder";
				document.getElementsByClassName("cE")[i].style.textDecoration= "underline";
				document.getElementsByClassName("cE")[i].style.color= "blue";
			}
		}
		
		function localizacion(){
			document.getElementById("propiedad").innerHTML = "geolocation: " +navigator.geolocation;
			for (var i=0; i<document.getElementsByClassName("g").length; i++){
				document.getElementsByClassName("g")[i].style.fontWeight= "bolder";
				document.getElementsByClassName("g")[i].style.textDecoration= "underline";
				document.getElementsByClassName("g")[i].style.color= "blue";
			}
		}
		
		function java(){
			document.getElementById("metodo").innerHTML = "javaEnabled(): " +navigator.javaEnabled();
			for (var i=0; i<document.getElementsByClassName("jE").length; i++){
				document.getElementsByClassName("jE")[i].style.fontWeight= "bolder";
				document.getElementsByClassName("jE")[i].style.textDecoration= "underline";
				document.getElementsByClassName("jE")[i].style.color= "blue";
			}
		}