/* Autor: Sonia Anton Llanes */
/* Fecha: 20/01/2021 */
/* Practica 3 - Eventos de teclado */


    //Variables que guardan la última letra que se escribe en cada uno de los input
        var teclaKd;
        var teclaKp;
        var teclaKu;

    function datosTecla(indice){
        switch(indice){
            case 0:document.getElementsByClassName("evento")[indice].innerHTML= "Tipo de evento: keydown";
                teclaKd= event.code;
                break;
            case 1:document.getElementsByClassName("evento")[indice].innerHTML= "Tipo de evento: keypress";
                teclaKp= event.code;
                break;
            case 2:document.getElementsByClassName("evento")[indice].innerHTML= "Tipo de evento: keyup";
                teclaKu= event.code;
                break;  
        }
        document.getElementsByClassName("kc")[indice].innerHTML= "Propiedad keyCode: " +event.keyCode;
        document.getElementsByClassName("chc")[indice].innerHTML= "Tipo charCode: " +event.charCode;
        document.getElementsByClassName("cod")[indice].innerHTML= "Carácter: " +event.code;
        document.getElementsByClassName("k")[indice].innerHTML= "Carácter: " +event.key;
        document.getElementsByClassName("ak")[indice].innerHTML= "Tecla ALT: " +event.altKey;
        document.getElementsByClassName("ck")[indice].innerHTML= "Tecla CTRL: " +event.ctrlKey;
        document.getElementsByClassName("sk")[indice].innerHTML= "Tecla SHIFT: " +event.shiftKey;
        document.getElementsByClassName("wh")[indice].innerHTML= "Unicode: " +event.which;
    }
    
    
    function comprobarIgual(){
        document.getElementById("sonIguales").style.display= "block";
        if (teclaKd==teclaKp && teclaKd==teclaKu){
            document.getElementById("sonIguales").innerHTML= " SI ";
            document.getElementById("sonIguales").style.color= "green";
        } else{
            document.getElementById("sonIguales").innerHTML= " NO ";
            document.getElementById("sonIguales").style.color= "red";
        }
    }
 
