/* Autor: Sonia Anton Llanes */
/* Fecha: 27/01/2021 */
/* Practica 6 - Tres en raya */

    var jugador= "X";  //variable para guardar el jugador activo
    //Array con las jugadas realizadas, inicializadas las nueve celdas a null
        var jugadas= new Array(null,null,null,null,null,null,null,null,null);
    
    function comenzar(){  //ponemos el array jugadas a null y todas las celdas vacias para comenzar partida
        for (var i=0; i<jugadas.length; i++){
            document.getElementsByTagName("td")[i].innerHTML= "";
            jugadas[i]= null;
            document.getElementById("jugActivo").style.display= "inline";  //pongo en vista el párrafo del jugador activo
            document.getElementById("juego").style.display= "none";  //desaparece el article del ganador
        }
        
    }

    function cambioJugador(){  //cambiamos de jugador de X a O y viceversa
        if(jugador=="X"){
            jugador= "O";
        }else{
            jugador= "X";
        }
        return jugador;
    }
    
    function comprobarJuego(jugador){  //comprobar si hay algún tres en raya
        if((jugadas[0]==jugador && jugadas[1]==jugador && jugadas[2]==jugador) || //jugadas en filas
           (jugadas[3]==jugador && jugadas[4]==jugador && jugadas[5]==jugador) ||
           (jugadas[6]==jugador && jugadas[7]==jugador && jugadas[8]==jugador) ||
           (jugadas[0]==jugador && jugadas[3]==jugador && jugadas[6]==jugador) || //jugadas en columnas
           (jugadas[1]==jugador && jugadas[4]==jugador && jugadas[7]==jugador) ||
           (jugadas[2]==jugador && jugadas[5]==jugador && jugadas[8]==jugador) ||
           (jugadas[0]==jugador && jugadas[4]==jugador && jugadas[8]==jugador) || //jugadas en diagonal
           (jugadas[2]==jugador && jugadas[4]==jugador && jugadas[6]==jugador) ){
                document.getElementById("jugActivo").style.display= "none";  //desaparece el jugador activo
                document.getElementById("juego").style.display= "inline";  //se muestra el ganador
                document.getElementById("juego").innerHTML= "JUEGO TERMINADO. Ha ganado el jugador " +jugador;
                for (var i=0; i<jugadas.length; i++){
                    jugadas[i]= "A";  //le doy valor a todas las jugadas para bloquear el tablero
                }
        }
    }
    
    /**
     * @description haciendo click en la celda se pinta el jugador activo y se guarda en el array jugadas
     * @param {integer} pos: indica la posición de la celda donde se ha hecho click
     * @returns {undefined}
     */
    function pulsoCelda(pos){
        if (jugadas[pos]== null){  //Si la celda está vacia la rellenamos
            document.getElementsByTagName("td")[pos].innerHTML= jugador;  //pintamos el jugador correspondiente en la celda introducida por parámetro
            if(jugador=="X"){  //damos color rojo a la X y negro a la O
                document.getElementsByTagName("td")[pos].style.color= "red";
            }else{
                document.getElementsByTagName("td")[pos].style.color= "black";
            }
            jugadas[pos]= jugador;  //guardo el valor del jugador en la posición indicada del array jugadas
            console.log(jugadas);
            comprobarJuego(jugador);  //compruebo si hay algún ganador
            
            cambioJugador();  //cambiamos al siguiente jugador llamando a la funcion
            document.getElementById("jugActivo").innerHTML= jugador;  //muestro el jugador activo
            if(jugador=="X"){  //del color que corresponda
                document.getElementById("jugActivo").style.color= "red";
            }else{
                document.getElementById("jugActivo").style.color= "black";
            }
        }
    }
    
    
