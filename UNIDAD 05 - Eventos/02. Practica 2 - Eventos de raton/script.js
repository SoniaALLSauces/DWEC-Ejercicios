/* Autor: Sonia Anton Llanes */
/* Fecha: 13/01/2021 */
/* Practica 1 - Eventos de raton */


/* Ejercicio 1 */
        var marca= "";  //variable donde se guarda cada vez que se hace una marca
	function pintaMarca(){
            marca+= " | ";
            document.getElementsByTagName("button")[0].innerHTML= marca;
            return marca;
	}

/* Ejercicio 2 */
        function ponerACero(){  //pintar la tabla en blanco para comenzar a poner colores
            for (var i=0; i<8; i++){
                document.getElementsByTagName("td")[i].style.background= "white";
            }
            console.log(document.getElementsByTagName("td"));
        }

        function divNone(){  //para des-seleccionar el div y que se muestren sólo los td
            for (var i=0; i<document.getElementsByTagName("div").length; i++){
                document.getElementsByTagName("div")[i].style.border= "none";
                document.getElementsByTagName("div")[i].style.width= "0px";
                document.getElementsByTagName("div")[i].style.height= "0px";
            }
        }
        
        var color;  //variable para guardar el color seleccionado
        function cojoColor(numColor){
            divNone();
            document.getElementsByTagName("div")[numColor-1].style.border= "2px solid black";
            document.getElementsByTagName("div")[numColor-1].style.width= "100px";
            document.getElementsByTagName("div")[numColor-1].style.height= "50px";
            document.getElementsByTagName("div")[numColor-1].style.top= "-10px";
            document.getElementsByTagName("div")[numColor-1].style.left= "-10px";
            color= numColor;
            console.log(color);
            return color;
        }
        
        var celdasPintadas= new Array(8);  //creo un array para controlar si las celdas están o no pintadas
            for (var i=0; i<8; i++){  //inicializo todas las posiciones a 0 (que es ningun color)
		celdasPintadas[i]=0;
            }
            function celdaPintada(posicion,opcion){ //funcion para saber de que color está pintada cada celda
                celdasPintadas[posicion]= opcion;
                return celdasPintadas;
            }
        function copioColor(numTd){
            divNone();
            celdaPintada(numTd,color);
            if ((numTd<4 && (celdasPintadas[numTd+4]==0 || celdasPintadas[numTd+4]==color)) ||
                (numTd>3 && (celdasPintadas[numTd-4]==0 || celdasPintadas[numTd-4]==color))){
                switch(color){
                    case 1: document.getElementsByTagName("td")[numTd].style.background= "yellow";
                        break;
                    case 2: document.getElementsByTagName("td")[numTd].style.background= "darkorange";
                        break;
                    case 3: document.getElementsByTagName("td")[numTd].style.background= "hotpink";
                        break;
                    case 4: document.getElementsByTagName("td")[numTd].style.background= "red";
                        break;
                    case 5: document.getElementsByTagName("td")[numTd].style.background= "limegreen";
                        break;
                    case 6: document.getElementsByTagName("td")[numTd].style.background= "darkturquoise";
                        break;
                    case 7: document.getElementsByTagName("td")[numTd].style.background= "chocolate";
                        break;
                    case 8: document.getElementsByTagName("td")[numTd].style.background= "gray";
                        break;
                }
            }else{
                alert("No puedes pintar de color distinto a su correspondiente");
            }
            color= 0;
        }

//***************************************************************************************************************************
/* Ejercicio 3 */
        var ficha;  //variable para guardar la ficha activa (yellow o limegreen)
        
    /**
     * @description Función para comenzar a jugar. Se muestra la primera ficha que va a mover y se habilitan los botones de las flechas.
     * @returns {ficha|String}
     */
        function comenzar(){  //muestro el color del jugador y las flechas para elegir columna
            ficha= "yellow";  //comienza la amarilla
            document.getElementById("amarillo").style.opacity= "1";
            document.getElementById("verde").style.opacity= "0.5";
            document.getElementById("comenzar").style.opacity= "0.5";  //deshabilito el boton comenzar dandole opacidad
            document.getElementById("deshabilitarBotones").style.top= "5px";  //y moviendo encima el bloque deshabilitarBotones
            for (var i=0; i<document.getElementsByClassName("flecha").length; i++){
                document.getElementsByClassName("flecha")[i].style.opacity= "1";  //doy color a las flechas y las habilito moviendo hacia arriba el bloque deshabilitarBotones
            }
            return ficha;
        }
    
    /**
     * @description Función para habilitar una ficha u otra. Quita opacidad a la ficha habilitada y da opacidad a la ficha deshabilitada
     * @returns {ficha|String}
     */
        function cambioFicha(){
            if(ficha=="yellow"){
                ficha= "limegreen";
                document.getElementById("verde").style.opacity= "1";
                document.getElementById("amarillo").style.opacity= "0.5";
            }else{
                ficha= "yellow";
                document.getElementById("amarillo").style.opacity= "1";
                document.getElementById("verde").style.opacity= "0.5";
            }
            return ficha;
        }
    
    /*Arrays de las distintas columnas*/
        var columna1= new Array(null,null,null,null,null,null);
        var columna2= new Array(null,null,null,null,null,null);
        var columna3= new Array(null,null,null,null,null,null);
        var columna4= new Array(null,null,null,null,null,null);
        var columna5= new Array(null,null,null,null,null,null);
        var columna6= new Array(null,null,null,null,null,null);
        var columna7= new Array(null,null,null,null,null,null);
        //Array que agrupa las siete columnas:
            var aColumnas= new Array(columna1,columna2,columna3,columna4,columna5,columna6,columna7);
    
    /**
     * @description Inicializar el juego, poniendo el array aColumnas entero a null y todos los huecos de fichas en blanco
     */
        function juegoACero(){
            for (var i=0; i<document.getElementsByClassName("circulo").length; i++){  //pinta el tablero en blanco
                document.getElementsByClassName("circulo")[i].style.background= "white";
            }
            for (var a=0; a<aColumnas.length; a++){  //pone todas las posiciones del array aColumnas a null
                for (var pos=0; pos<aColumnas[a].length; pos++){
                    aColumnas[a][pos]= null;
                }
            }
            document.getElementById("deshabilitarBotones").style.top= "80px";  //muevo encima de los botones flecha el bloque deshabilitarBotones
            document.getElementById("comenzar").style.opacity= "1";
            for(var i=0; i<document.getElementsByClassName("flecha").length; i++){
                document.getElementsByClassName("flecha")[i].style.opacity= "0.5";
            }
        }
    
    
    /**
     * @description Funcion que compara los elementos de cada array columna para encontrar cuatro iguales en columna indicada por parámetro
     */
            //Variables:
            var igualesYellow; //variable contador de fichas yellow seguidas
            var igualesGreen; //variable contador de fichas limegreen seguidas
        function comprobarGanadorColumna(columna){
            if(ficha=="yellow"){  //Si la ficha actual es amarilla cuento fichas amarillas juntas
                igualesYellow= 0;  //inicializo contador a cero
                for (var pos=aColumnas[columna].length-1; pos>=0; pos--){  //recorro todas las posiciones del array de la columna indicada por parámetro
                    if (aColumnas[columna][pos]=="yellow"){  //si la posicion es yellow sumo 1 al contador
                        igualesYellow++;
                        console.log("igualesY="+igualesYellow);
                        if (igualesYellow>3){  //Si el contador es mayor que 3 (=4) ha ganado el jugador amarillo
                            alert ("GANADOR El jugador 1 (amarillo) \n en la columna " +(columna+1));
                            juegoACero();
                        }
                    }else{
                        igualesYellow= 0;  //sino vuelvo a poner el contador a 0 
                    }
                }
            }
            else{  //Si la ficha actual es limegreen cuento fichas verdes juntas
                igualesGreen= 0;  //inicializo contador a cero
                for (var pos=aColumnas[columna].length-1; pos>=0; pos--){  //recorro de nuevo todas las posiciones del array
                    if (aColumnas[columna][pos]=="limegreen"){  //si la posicion es limegreen sumo 1 al contador
                        igualesGreen++;
                        console.log("igualesV="+igualesGreen);
                        if (igualesGreen>3){  //Si el contador es mayor que 3 (=4) ha ganado el jugador verde
                            alert ("GANADOR El jugador 2 (verde) \n en la columna " +(columna+1));
                            juegoACero();
                        }
                    }else{
                        igualesGreen= 0;//sino pongo el contador green a 0
                    }
                }
            }
        }
     /**
      * 
      */
        function comprobarGanadorFila(fila){
            if(ficha=="yellow"){  //Si la ficha actual es amarilla cuento fichas amarillas juntas
                igualesYellow= 0;  //inicializo contador a cero
                for (var col=0; col<7; col++){  //recorro la posicion fila de todos los arrays columna
                    if (aColumnas[col][fila]=="yellow"){  //si la posicion es yellow sumo 1 al contador
                        igualesYellow++;
                        console.log("igualesY="+igualesYellow);
                        if (igualesYellow>3){  //Si el contador es mayor que 3 (=4) ha ganado el jugador amarillo
                            alert ("GANADOR El jugador 1 (amarillo) \n en la fila " +(fila+1));
                            juegoACero();
                        }
                    }else{
                        igualesYellow= 0;  //sino vuelvo a poner el contador a 0 
                    }
                }
            }
            else{  //Si la ficha actual es limegreen cuento fichas verdes juntas
                igualesGreen= 0;  //inicializo contador a cero
                for (var col=0; col<7; col++){  //recorro la posicion fila de todos los arrays columna
                    if (aColumnas[col][fila]=="limegreen"){  //si la posicion es limegreen sumo 1 al contador
                        igualesGreen++;
                        console.log("igualesV="+igualesGreen);
                        if (igualesGreen>3){  //Si el contador es mayor que 3 (=4) ha ganado el jugador verde
                            alert ("GANADOR El jugador 2 (verde) \n en la fila " +(fila+1));
                            juegoACero();
                        }
                    }else{
                        igualesGreen= 0;//sino pongo el contador green a 0
                    }
                }
            }
        }


        var aPosicion= new Array(0,1,2,3,4,5,6,7);  //array para guardar la primera posicion de la clase a pintar segun la columna indicada
        var posicion= 0;  //variable para guardar la posicion de la ficha a pintar
        var borroPosicion;  //variable que guarda la posicion pintada anteriormente
        var vuelta= 0;  //variable para saber en que fila estamos, posicion de cada array columna
        var fila;  //variable para guardar la fila en la cual se guarda la ficha
    /** 
     * @description Funcion para descender la ficha hasta la anterior pintada en la columna pasada por parámetro
     * @param {integer} columna : columna del tablero por el cual se mueve la ficha 
    */    
        function cae(columna){
            document.getElementById("deshabilitarBotones").style.height= "130px";  //mientras cae la ficha se aumenta el tamaño del bloque deshabilitarBotones para no poder clikear ninguna columna más
console.log(vuelta);
            if(posicion==0){  //Si posicion es 0, es la primera vuelta
                posicion+= aPosicion[columna];  //cojo la 1ª posición de la clase circulo que corresponde a la columna indicada
            }
console.log (posicion);
console.log (ficha);
            if (posicion<42){  //Hay 42 elementos de la clase circulo, mientras sea menor sumamos 7 para tomar la posicion de la siguiente fila
                if (aColumnas[columna][vuelta]==null){  //si la posicion del array indicado no está pintada
                    borroPosicion= posicion-7;  //calculo la posición anterior pintada
                    if (borroPosicion>=0){  //No existen posiciones de la clase circulo inferior a 0
                        document.getElementsByClassName("circulo")[borroPosicion].style.background= "white";  //quito el color de la posicion pintada anteriormente para simular movimiento
                    }
                    document.getElementsByClassName("circulo")[posicion].style.background= ficha;  //pinto la posición actual
                    posicion+= 7;  //sumo 7 para tener la posicion de la misma columna en la siguiente fila
                }else{  //si no es null, está pintado, paro el intervalo
                    clearInterval(intervalo);  //paro el intervalo
                    document.getElementById("deshabilitarBotones").style.height= "60px";  //reduzco el tamaño del bloque deshabilitarBotones para poder clickar las flechas
                    fila= vuelta-1;
                    aColumnas[columna][fila]= ficha;  //guardo el color de la última ficha pintada en el array correspondiente
console.log(aColumnas[columna]);
                    comprobarGanadorColumna(columna);	//Compruebo si hay 4 iguales seguidas en la columna seleccionada
                    comprobarGanadorFila(fila);//Compruebo si hay 4 iguales en la fila que se ha pintado
                    vuelta=-1;  //inicializo la variable vuelta (se suma 1 justo antes de salir, quedando a 0)
                    posicion= 0;  //vuelvo a poner a 0 la variable posicion
                    cambioFicha();  //cambio el color de la ficha
                }
            }
            else{  //Si es mayor que 42, se han terminado las filas y paro el setInterval
                clearInterval(intervalo);  //paro el intervalo
		document.getElementById("deshabilitarBotones").style.height= "60px";
                fila= vuelta-1;
                aColumnas[columna][fila]= ficha;  //guardo el color de la última ficha pintada en el array correspondiente
console.log(aColumnas[columna]);
		comprobarGanadorColumna(columna);  //Compruebo si hay 4 iguales seguidas en la columna seleccionada
                comprobarGanadorFila(fila);  //Compruebo si hay 4 iguales en la fila que se ha pintado
                vuelta=-1;  //inicializo la variable vuelta (se suma 1 justo antes de salir, quedando a 0)
                posicion= 0;  //inicializo la variable posicion
                cambioFicha();  //cambio el color de la ficha
            }
            vuelta++;
        }
        
    /** 
     * @description Funcion para comenzar el intervalo de descender la ficha por la columna indicada
     * Se ejecuta al hacer click en las flechas del HTML
    */      
        var intervalo;  //variable para guardar el intervalo
        function fichaCae(columna){
            intervalo= setInterval(cae,500,columna);
        }