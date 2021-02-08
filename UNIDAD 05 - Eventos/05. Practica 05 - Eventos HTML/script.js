/* Autor: Sonia Anton Llanes */
/* Fecha: 12/01/2021 */
/* Practica 5 - Eventos HTML */

    window.onload = function() {		
        console.log(document.getElementsByTagName("img"));
        document.getElementsByTagName("img")[0].src= imagenes[0];
        document.getElementsByTagName("img")[1].src= imagenes[1];
        document.getElementsByTagName("img")[2].src= imagenes[2];
        document.getElementsByTagName("img")[3].src= imagenes[3];
    }
    
    //Array con la Imágenes:
        var imagenes= new Array(4);
            imagenes[0]= "images/camino.jpg";
            imagenes[1]= "images/nieve.jpg";
            imagenes[2]= "images/cascada.jpg";
            imagenes[3]= "images/pueblo.jpg";
        var imagenCambio;
        
/* Ejercicio 1 */
    function cambiaImagen(posicion){
        imagenCambio= imagenes[posicion];
        switch(posicion){
            case 0:
            case 1:
            case 2:
                imagenes[posicion]= imagenes[posicion+1];
                imagenes[posicion+1]= imagenCambio;
                document.getElementsByTagName("img")[posicion].src= imagenes[posicion];
                document.getElementsByTagName("img")[posicion+1].src= imagenes[posicion+1];
                break;
            case 3:
                imagenes[posicion]= imagenes[0];
                imagenes[0]= imagenCambio;
                document.getElementsByTagName("img")[posicion].src= imagenes[posicion];
                document.getElementsByTagName("img")[0].src= imagenes[0];
        }   
    }

/* Ejercicio 4 */
    function bordeNegro(pos){
        document.getElementsByTagName("img")[pos].style.border= "4px solid black";
    }
    function bordeRojo(pos){
        document.getElementsByTagName("img")[pos].style.border= "4px solid red";
    }

/* Ejercicio 2 */
    //Variables:
        var cadenaInput="";  //cadena para guardar el code y la tecla pulsada en el input
        var contTeclasInput= 0;  //contador de las teclas que se han pulsado en el input
        var cadenaTextArea="";  //cadena para guardar el code y la tecla pulsada en el textArea
        var contTeclasTextArea= 0;  //contador de las teclas que se han pulsado en el textArea
    
    //Funciones para escribir y borrar en el input
    function borrarTexto(){
        var cadenaBorrada= "";
        if (event.code== "Backspace"){
            contTeclasInput--;
            cadenaBorrada= cadenaInput.split("-",contTeclasInput);
            console.log (cadenaBorrada);
            cadenaInput= cadenaBorrada.join("-") +"-";
            document.getElementById("texto").innerHTML= cadenaInput;
        }
    }
    function datosTecla(){
        contTeclasInput++;
        document.getElementById("lbTexto").onkeydown= borrarTexto;
        console.log(contTeclasInput);
            cadenaInput+= event.keyCode + event.key +"-";
            document.getElementById("texto").innerHTML= cadenaInput;
        
    }
    
    //Funciones para escribir y borrar en el textArea
    function borrarTextoArea(){
        var cadenaBorrada= "";
        if (event.code== "Backspace"){
            contTeclasTextArea--;
            cadenaBorrada= cadenaTextArea.split("-",contTeclasTextArea);
            console.log (cadenaBorrada);
            cadenaTextArea= cadenaBorrada.join("-") +"-";
            document.getElementById("textoArea").innerHTML= cadenaTextArea;
        }
    }
    function datosTeclaArea(){
        contTeclasTextArea++;
        document.getElementById("lbArea").onkeydown= borrarTextoArea;
        console.log(contTeclasTextArea);
            cadenaTextArea+= event.keyCode + event.key +"-";
            document.getElementById("textoArea").innerHTML= cadenaTextArea; 
    }
    
    //Funcion para seleccionar y dar el aviso del texto seleccionado
        function textoSeleccionado(pos){
            var seleccion;
            switch(pos){
                case 0: seleccion= document.getElementById("lbTexto").value;
                    break;
                case 1: seleccion= document.getElementById("lbArea").value;
                    break;
            }
            return seleccion;
        }
    function aviso(pos){
        var cad= textoSeleccionado(pos);
        alert ("Cuidado!! Se ha seleccionado texto escrito: '" +
                cad + "' y puedes perderlo...");
    }
    //Funcion para indicar que le texto seleccionado se ha modificado
    function cambio(pos){
        var cadArea= textoSeleccionado(pos);
        alert ("Se ha modificado el texto seleccionado, ahora aparece" +cadArea);
    }

/* Ejercicio 3 */
    function minusculas(){
        document.getElementById("lbtextoMinMay").value = document.getElementById("lbtextoMinMay").value.toLowerCase();  
    }
    function mayusculas(){
        document.getElementById("lbtextoMinMay").value = document.getElementById("lbtextoMinMay").value.toUpperCase();  
    }
    
/* Ejercicio 5 */
    function colorVerde(pos){
        document.getElementsByTagName("p")[pos].style.color= "green";
    }
    function colorNegro(pos){
        document.getElementsByTagName("p")[pos].style.color= "black";
    }

