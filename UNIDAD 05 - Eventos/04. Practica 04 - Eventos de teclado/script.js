/* Autor: Sonia Anton Llanes */
/* Fecha: 22/01/2021 */
/* Practica 4 - Eventos de teclado */


/* Ejercicio 1 */
    //Variables para guardar los code de los números que se han introducido
        var numero1= ""; // variable para guardar las teclas pulsadas en el input 1
        var numero2= ""; // variable para guardar las teclas pulsadas en el input 2
        var numero3= ""; // variable para guardar las teclas pulsadas en el input 3
        var borraCentenas;  //variable para borrar la cifra de las centenas cuando se introduce una tercera cifra
        var input;  //variable para conservar la segunda cifra del input cuando introducimos una tercera 
                    //(con la segunda y la tercera cifra siempre tendremos únicamente 2 cifras en el input)
        
    function dosCifras(indice){
        switch (indice){
            case 0: numero1+= event.key;
                console.log (numero1);
                if (numero1>99){
                    alert("Solo se pueden escribir dos cifras");
                    borraCentenas= numero1.charAt(0)*100;
                    input= numero1.charAt(1);
                    console.log (borraCentenas);
                    numero1-= borraCentenas;
                    console.log (numero1);
                    document.getElementsByTagName("input")[indice].value= input; 
                }
                break;
            case 1: numero2+= event.key;
                if (numero2>99){
                    alert("Solo se pueden escribir dos cifras");
                    borraCentenas= numero2.charAt(0)*100;
                    input= numero2.charAt(1);
                    numero2-= borraCentenas;
                    document.getElementsByTagName("input")[indice].value= input; 
                }
                break;
            case 2: numero3+= event.key;
                if (numero3>99){
                    alert("Solo se pueden escribir dos cifras");
                    borraCentenas= numero3.charAt(0)*100;
                    input= numero3.charAt(1);
                    numero3-= borraCentenas;
                    document.getElementsByTagName("input")[indice].value= input; 
                }
                break;
        }
    }
    function comprobarIgual(){
        document.getElementById("sonIguales").style.display= "inline";
        if(numero1==numero2 && numero1==numero3){
            document.getElementById("sonIguales").innerHTML= " SI ";
            document.getElementById("sonIguales").style.color= "green";
        } else{
            document.getElementById("sonIguales").innerHTML= " NO ";
            document.getElementById("sonIguales").style.color= "red";
        }
    }


/* Ejercicio 2 */
    //Variable
        var cadenaTexto= "";
    function borrarTexto(){
        if (event.code== "Backspace"){
            cadenaTexto= cadenaTexto.slice(0,-1);
        }
    }
    function sinVocales(){
        document.getElementById("texto").value= cadenaTexto;
        document.getElementById("texto").onkeydown= borrarTexto;
        if (event.key=="a" || event.key=="e" || event.key=="i" || event.key=="o" || event.key=="u"){

        }else{
            cadenaTexto+= event.key;
            console.log(cadenaTexto);
        }
    }

/* Ejercicio 3 */
    //Variable
    var cadenaPass="";
    function borrar(){
        if (event.code== "Backspace"){
            cadenaPass= cadenaPass.slice(0,-1);
        }
    }
    function contrCorrecta(){
        document.getElementById("pass").value= cadenaPass;
        document.getElementById("pass").onkeydown= borrar;
        cadenaPass+= event.key;
        cadenaPass= cadenaPass.toUpperCase();
        console.log(cadenaPass);
        if (cadenaPass=="PASO" || cadenaPass=="PASO "){
            document.getElementById("pass").style.background= "#2ECC71";
        }else{
            document.getElementById("pass").style.background= "#EC7063";
        }
    }

/* Ejercicio 4 */
    //Variable
        var cadena="";
    function letra(pos){
        var mensaje= "Error de caracter";
        switch(pos){
            case 0: document.getElementById("letraa").value= cadena;
                document.getElementById("letraa").style.background= "white";
                if(event.key!="a"){document.getElementById("letraa").style.background= "#EC7063";
                                    alert(mensaje);}
                break;
            case 1: document.getElementById("letras").value= cadena;
                document.getElementById("letras").style.background= "white";
                if(event.key!="s"){document.getElementById("letras").style.background= "#EC7063";
                                    alert(mensaje);}
                break;
            case 2: document.getElementById("letrad").value= cadena;
                document.getElementById("letrad").style.background= "white";
                if(event.key!="d"){document.getElementById("letrad").style.background= "#EC7063";
                                    alert(mensaje);}
                break;
            case 3: document.getElementById("letraf").value= cadena;
                document.getElementById("letraf").style.background= "white";
                if(event.key!="f"){document.getElementById("letraf").style.background= "#EC7063";
                                    alert(mensaje);}
                break;
            case 4: document.getElementById("letraj").value= cadena;
                document.getElementById("letraj").style.background= "white";
                if(event.key!="j"){document.getElementById("letraj").style.background= "#EC7063";
                                    alert(mensaje);}
                break;
            case 5: document.getElementById("letrak").value= cadena;
                document.getElementById("letrak").style.background= "white";
                if(event.key!="k"){document.getElementById("letrak").style.background= "#EC7063";
                                    alert(mensaje);}
                break;
            case 6: document.getElementById("letral").value= cadena;
                document.getElementById("letral").style.background= "white";
                if(event.key!="l"){document.getElementById("letral").style.background= "#EC7063";
                                    alert(mensaje);}
                break;
            case 7: document.getElementById("letran").value= cadena;
                document.getElementById("letran").style.background= "white";
                if(event.key!="ñ"){document.getElementById("letran").style.background= "#EC7063";
                                    alert(mensaje);}
                break;
            
        }
    }


