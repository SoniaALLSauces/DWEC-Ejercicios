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

/* Ejercicio 3 */
        var ficha;  //variable para guardar la ficha activa (yellow o limegreen)
        function comenzar(){  //muestro el color del jugador y las flechas para elegir columna
            ficha= "yellow";
            document.getElementById("amarillo").style.opacity= "1";
            for (var i=0; i<document.getElementsByClassName("flecha").length; i++){
                document.getElementsByClassName("flecha")[i].style.opacity= "1";
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

        var aPosicion= new Array(1,2,3,4,5,6,7,8);  //array para guardar la primera posicion de la clase a pintar segun la columna indicada
        var posicion= 0;  //variable para guardar la posicion de la ficha a pintar
        var borroPosicion;  //variable que guarda la posicion pintada anteriormente
        var vuelta= 0;  //variable para saber en que fila estamos, posicion de cada array columna
        
    /** 
     * Funcion para descender fichas hasta la anterior pintada
    */    
        function cae(columna){
            console.log(vuelta);
            if(posicion==0){
                posicion+= aPosicion[columna]-1;
            }
            console.log (posicion);
            console.log (ficha);
            if (posicion<42){
                if (aColumnas[columna][vuelta]==null){
                    borroPosicion= posicion-7;
                    if (borroPosicion>=0){
                        document.getElementsByClassName("circulo")[borroPosicion].style.background= "white";
                    }
                    document.getElementsByClassName("circulo")[posicion].style.background= ficha;
                    posicion+= 7;
                }else{
                    clearInterval(intervalo);
                    aColumnas[columna][vuelta-1]= ficha;
                    vuelta=-1;  //inicializo la variable vuelta (se suma 1 justo antes de salir, quedando a 0)
                    posicion= 0;  //inicializo la variable posicion
                    if(ficha=="yellow"){
                        ficha= "limegreen";
                        document.getElementById("verde").style.opacity= "1";
                        document.getElementById("amarillo").style.opacity= "0.5";
                    }else{
                        ficha= "yellow";
                        document.getElementById("amarillo").style.opacity= "1";
                        document.getElementById("verde").style.opacity= "0.5";
                    }
                }
            }
            else{
                clearInterval(intervalo);
                aColumnas[columna][vuelta-1]= ficha;
                vuelta=-1;  //inicializo la variable vuelta (se suma 1 justo antes de salir, quedando a 0)
                posicion= 0;  //inicializo la variable posicion
                if(ficha=="yellow"){
                    ficha= "limegreen";
                    document.getElementById("verde").style.opacity= "1";
                    document.getElementById("amarillo").style.opacity= "0.5";
                }else{
                    ficha= "yellow";
                    document.getElementById("amarillo").style.opacity= "1";
                    document.getElementById("verde").style.opacity= "0.5";
                }
            }
            vuelta++;
            console.log(aColumnas[columna]);
        }
        var intervalo;  //variable para guardar el intervalo
        function fichaCae(columna){
            intervalo= setInterval(cae,500,columna);
        }