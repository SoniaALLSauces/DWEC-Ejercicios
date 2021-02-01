/* Autor: Sonia Anton Llanes */
/* Fecha: 29/01/2021 */
/* Practica 7 - Memory */


//VARIABLES ARRAY:
    //Array que guarda la imagen asignada a cada carta
    var imagenes= new Array(6);
    //Array que pone a true las posiciones que ya están emparejadas
    var mostradas= new Array(6);
    

//FUNCIONES
    /**
     * @description Funcion que genera un número aleatorio del 1 al 3
     * @returns {Number} numero: nos devuelve un número entero aleatorio entre el 1 y el 3
     */
    function aleatorio(){ //
	var numero= Math.trunc(Math.random()*3+1);
	return numero;
    }
    
    /**
     * @description Funcion que asigna una imagen a un número aleatorio generado
     * @returns {String} imgAsignada: nos devuelve una imagen guardada. Depende del número aleatorio que se haya generado
     */
    function imagenCarta(){
        var imgAsignada;  //variable para asignar una imagen a la carta
        var numAsignado= aleatorio();
        switch (numAsignado){
            case 1: imgAsignada= "images/koala.jpg";
                break;
            case 2: imgAsignada= "images/flor.jpg";
                break;
            case 3: imgAsignada= "images/coche.jpg";
                break;
        }
        return imgAsignada;
    }
    
    /**
     * @description Funcion que guarda en el array imagenes la imagen asignada a cada carta
     * Teniendo en cuenta que cada carta solo debe aparecer 2 veces
     * @returns {undefined}
     */
    function comenzar(){
        //se inicializa todos los arrays e imagenes
        for (var i=0; i<mostradas.length; i++){  
            mostradas[i]= false;  //se inicializa todas las posiciones del Array mostradas a false para que funcionen las funciones levantoCarta() y mostrarCartas()
            document.getElementsByTagName("img")[i].src= "images/intVerde.jpg";  //se ocultan todas las imágenes 
        }
        //asigno una imagen a cada carta:
        var contImagen; //variable para controlar que las imagenes se repiten máximo 2 veces
        for (var i=0; i<6; i++){
            imagenes[i]= imagenCarta();
            contImagen= 0;
            for (var j=0; j<i; j++){  //recorro las imagenes ya guardadas
                if (imagenes[i]==imagenes[j]){  //si coincide la carta actual con alguna de las anteriores sumo 1 al contador
                    contImagen++;
                }
            }
            while (contImagen>1){  //mientras la carta ya aparezca 1 vez, más la actual serían 2, debemos asignar una nueva imagen
                imagenes[i]= imagenCarta();
                contImagen= 0;
                for (var j=0; j<i; j++){
                    if (imagenes[i]==imagenes[j]){
                        contImagen++;
                    }
                }
            }
            console.log(imagenes);
        }
        
    }
    
/* Funciones para mostrar la carta al hacer click, y cuando se muestren dos comience el contador
   Si las dos imágenes son iguales se mantinen visualizadas.*/
    var intervaloCarta1;  //variable para nombrar al intervalo de la primera carta pulsada
    var intervaloCarta2;  //variable para nombrar al intervalo de la segunda carta pulsada
    var carta1= null;  //variable para asignar la posicion de la primera carta levantada
    var carta2= null;  //variable para asignar la posicion de la segunda carta levantada
    var contTiempoCarta2= 0; //variable para contar 2sg desde que se pulsa la segunda carta
    
    /**
     * @description Función que ejecuta y/o el intervalo de las dos cartas clickadas
     * @param {Number} carta : numero de la carta que se va a mostrar (primera o segunda)
     * @returns {undefined}
     */
    function muestroCarta(carta){
        document.getElementsByTagName("img")[carta].src= imagenes[carta];  //mostramos la imagen de la 
        if(carta2!=null){  //si la que pulsamos es la segunda carta
            contTiempoCarta2++;  //sumamos tiempo al contador
            console.log(contTiempoCarta2);
            if (imagenes[carta1]==imagenes[carta2]){  //si las dos imágenes son iguales
                document.getElementsByTagName("img")[carta2].src= imagenes[carta2];  //muestra la segunda carta
                console.log(imagenes[carta2]);
                mostradas[carta1]= true;  //cambiamos mostradas a true de las dos cartas iguales
                mostradas[carta2]= true;
                console.log(mostradas);
                clearInterval(intervaloCarta1);  //paramos al mismo tiempo los dos intervalo
                clearInterval(intervaloCarta2);
                carta1= null;  //ponemos a null las dos posiciones de las cartas levantadas
                carta2= null;
                contTiempoCarta2= 0;  //ponemos el contador a 0
                if (mostradas[0]==true && mostradas[1]==true && mostradas[2]==true && 
                    mostradas[3]==true && mostradas[4]==true && mostradas[5]==true){
                        setTimeout(function(){alert ("¡JUEGO TERMINADO!!")},200);
                }
            }
        }
        if (contTiempoCarta2>20){  //si el contador llega a 20 (2segundos)
            clearInterval(intervaloCarta1);  //paramos al mismo tiempo los dos intervalo
            clearInterval(intervaloCarta2);
            document.getElementsByTagName("img")[carta1].src= "images/intVerde.jpg";  //ocultamos las imagenes de las cartas
            document.getElementsByTagName("img")[carta2].src= "images/intVerde.jpg";
            carta1= null;  //ponemos a null las dos posiciones de las cartas levantadas
            carta2= null;
            contTiempoCarta2= 0;  //ponemos el contador a 0
        }
    }
    /**
     * @description Función que comienza un intervalo si la carta está a false. Es decir, tiene que haber comenzado el juego y no haberse encontrado la pareja
     * @param {Number} posicion : posicion de la imagen en la que se ha hecho click
     * @returns {undefined}
     */
    function levantoCarta(posicion){
        if (mostradas[posicion]==false){  //si la posicion está a false
            if (carta1==null){  //si la carta1 esta en null guardo en la carta1 la posicion
                carta1= posicion;
                intervaloCarta1= setInterval(muestroCarta, 100, carta1);
            }
            else if(carta2==null){  //si la carta2 esta en null guardo en la carta2 la posicion
                carta2= posicion;
                intervaloCarta2= setInterval(muestroCarta, 100, carta2);  
            } 
            //si las dos cartas cartas tienen guardada una posicion no se hace nada
        } 
    }
    
/* Funciones para mostrar todas las cartas durante 2 segundos */    
    var intervaloMostrar;  //variable para nombrar el intervalo mostrar
    var contador= 0;  //variable para contar los dos segundos a mostrar todas las cartas
    
    /**
     * @description Funcion que controla el intervalo de 2 segundos que muestra las imagenes de las cartas
     * @returns {undefined}
     */
    function mostrar(){
        for (var i=0; i<imagenes.length; i++){
            document.getElementsByTagName("img")[i].src= imagenes[i];
        }
        contador++;
        if (contador>20){
            clearInterval(intervaloMostrar);  //paramos el intervaloMostrar
            for (var i=0; i<imagenes.length; i++){  //ocultamos todas las cartas, cambiamos la imagen a ?
                document.getElementsByTagName("img")[i].src= "images/intVerde.jpg";
            }
            contador= 0;  //ponemos el contador a 0
        }
    }
    
    /**
     * @description Función que comienza el intervalo de mostrar todas las cartas durante 2 segundos
     * @returns {undefined}
     */
    function mostrarCartas(){  //si todas las cartas están a false (sin emparejar), las muestra durante 2 segundos
        if (mostradas[0]==false && mostradas[1]==false && mostradas[2]==false && 
            mostradas[3]==false && mostradas[4]==false && mostradas[5]==false){
                intervaloMostrar= setInterval(mostrar, 100);
        }
    }