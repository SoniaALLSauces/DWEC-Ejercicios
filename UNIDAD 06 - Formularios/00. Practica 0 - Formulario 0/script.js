/* Autor: Sonia Anton Llanes */
/* Fecha: 02/02/2021 */
/* Practica 0 - Formularios */


/* FUNCIONES VALIDACIONES */
    //Valido campo obligatorio:
        function obligatorio(valor,lb,p){
            if (valor==null || valor==0 || /^\s+$/.test(valor)){
                document.getElementById(lb).style.border= "1px solid red";
                document.getElementById(p).innerHTML= "El campo no puede estar vacio";
                document.getElementById(p).style.color= "black";
                return false;
            }
            return true;
        }
    //Valido longitud máxima 15 caracteres:
        function longitudMax(valor,lb,p){
            if (valor.length>15){
                document.getElementById(lb).style.border= "1px solid red";
                document.getElementById(p).innerHTML= "Se admiten máximo 15 caracteres";
                return false;
            }
            return true;
        }
		
/* FUNCIONES DE CADA CAMPO */
    //Variables:
        var lb;  //variable para guardar el id label que pone borde rojo
        var p;  //variable para guardar el id p donde escribir el mensaje de error
    //Valido el nombre: campo obligatorio y máximo 15 caracteres
        function validarNombre(valorNombre){
            lb="lbNombre";
            p="pNombre";
            obligatorio(valorNombre,lb,p);  //Es obligatorio, validamos que no esté vacio
            longitudMax(valorNombre,lb,p);//Máximo 15 caracteres
        }
    //Valido el primer apellido: campo obligatorio y máximo 15 caracteres
        function validarApellido1(valorApellido1){
            lb="lbApellido1";
            p="pApellido1";
            obligatorio(valorApellido1,lb,p);  //Es obligatorio, validamos que no esté vacio
            longitudMax(valorApellido1,lb,p);//Máximo 15 caracteres
        }
    //Valido el segundo apellido: máximo 15 caracteres
        function validarApellido2(valorApellido2){
            lb="lbApellido2";
            p="pApellido2";
            longitudMax(valorApellido2,lb,p);//Máximo 15 caracteres
        }
    //Valido Fecha de Nacimiento: formato DD/MM/AAA
        function validarNacimiento(valorNacimiento){
            var fecha= valorNacimiento.split("/");  //divido el valor de nacimiento en dia, mes y año
            console.log(fecha);
            if(isNaN(fecha[0]) || fecha[0].length!=2 || fecha[0]<1 || fecha[0]>31 ||  //compruebo que el día sea numero, de 2 dígitos, y entre 1 y 31
               isNaN(fecha[1]) || fecha[1].length!=2 || fecha[1]<1 || fecha[1]>12 ||  //compruebo que el mes sea numero, de 2 dígitos, y entre 1 y 12
               isNaN(fecha[2]) || fecha[2].length!=4 || fecha[2]<1900 || fecha[2]>2021){  //compruebo que el año sea numero, de 4 dígitos, y entre 1900 y el año actual
                document.getElementById("lbNacimiento").style.border= "1px solid red";
                document.getElementById("pNacimiento").innerHTML= "¡Error en el formato ó la fecha! DD/MM/AAAA";
                return false;
            }
            return true;
        }
    //Valido Edad: campo obligatorio, campo numérico
        function validarEdad(valorEdad){
            lb="lbEdad";
            p="pEdad";
            obligatorio(valorEdad,lb,p);  //Es obligatorio, validamos que no esté vacio
            if (isNaN(valorEdad)){  //validamos que sea un número
                document.getElementById(p).innerHTML= "¡Valor Erroneo! Introduzca edad en número";
                document.getElementById(p).style.color= "red";
                return false;
            }
            return true;
        }
    //Valido Telefono: campo obligatorio, máximo 11 caracteres y 9 números
        function validarTelefono(valorTelefono){
            lb="lbTelefono";
            p="pTelefono";
            obligatorio(valorTelefono,lb,p);  //Es obligatorio, validamos que no esté vacio
            if (valorTelefono.length>11){
                document.getElementById(p).innerHTML= "Maximo 11 caracteres (XXX-XXX-XXX)";
                document.getElementById(lb).style.border= "1px solid red";
                return false;
            }else if (valorTelefono.length>0){
                var contador= 0;
                var caracter= valorTelefono.split("");
                console.log(caracter);
                for (var i=0; i<valorTelefono.length; i++){
                    if (caracter[i]==="0" || caracter[i]==="1" || caracter[i]==="2" || 
                        caracter[i]==="3" || caracter[i]==="4" || caracter[i]==="5" || 
                        caracter[i]==="6" || caracter[i]==="7" || caracter[i]==="8" || caracter[i]==="9"){ 
                            contador++;
                    }
                    console.log(contador);
                }
                if (contador!=9){
                    document.getElementById(p).innerHTML= "Debe tener 9 números (XXX-XXX-XXX)";
                    document.getElementById(lb).style.border= "1px solid red";
                    return false;
                }
            }
            return true;
        }
    //Valido Afición 1: solo texto, y mínimo 3 caracteres
        function validarAficion1(valorAficion1){
            if (valorAficion1==null || valorAficion1==0 || /^\s+$/.test(valorAficion1)){  //solo si no está vacio compruebo
                document.getElementById("pAficion1").innerHTML= "";
            } else if (!isNaN(valorAficion1) || valorAficion1.length<3){  //que sea texto y tenga más de 3 caracteres
                document.getElementById("pAficion1").innerHTML= "¡La afición debe de tener al menos tres caracteres! ¡No existen aficiones tan 'pequeñas'!";
                document.getElementById("lbAficion1").style.border= "1px solid red";
                return false;
            }
            return true;
        }
    //Valido Afición 2: solo texto, y entre 5 y 15 caracteres
        function validarAficion2(valorAficion2){
            if (valorAficion2==null || valorAficion2==0 || /^\s+$/.test(valorAficion2)){  //solo si no está vacio compruebo
                document.getElementById("pAficion2").innerHTML= "";
            } else if (!isNaN(valorAficion2) || valorAficion2.length<5 || valorAficion2.length>15){  //que sea texto y tenga entre 5 y 15 caracteres
                document.getElementById("pAficion2").innerHTML= "¡Afición erronea, introduce otra!!";
                document.getElementById("lbAficion2").style.border= "1px solid red";
                return false;
            }
            return true;
        }
    //Valido Expediente: solo pueden ser números
        function validarExpte(){
            var valorExpte= document.getElementById("lbExpediente").value;
            if (isNaN(valorExpte)){  //cuando quito el foco compruebo si es número
                alert ("¡Debes introducir un número!");
            }
        }
		

    function validar(){
        //Limpio todos los campos de error:
        for (var i=0; i<document.getElementsByTagName("p").length; i++){
            document.getElementsByTagName("p")[i].innerHTML= "";
            document.getElementsByTagName("input")[i].style.border= "1px solid gray";
        }
        //VARIABLES que contienen el valor introducido por el usuario
            var valorNombre= document.getElementById("lbNombre").value;
            var valorApellido1= document.getElementById("lbApellido1").value;
            var valorApellido2= document.getElementById("lbApellido2").value;
            var valorNacimiento= document.getElementById("lbNacimiento").value;
            var valorEdad= document.getElementById("lbEdad").value;
            var valorTelefono= document.getElementById("lbTelefono").value;
            var valorAficion1= document.getElementById("lbAficion1").value;
            var valorAficion2= document.getElementById("lbAficion2").value;

        //Campos Obligatorios que validan cada uno de los campos:
            validarNombre(valorNombre);
            validarApellido1(valorApellido1);
            validarApellido2(valorApellido2);
            validarNacimiento(valorNacimiento);
            validarEdad(valorEdad);
            validarTelefono(valorTelefono);
            validarAficion1(valorAficion1);
            validarAficion2(valorAficion2);
 
        //Preparo el return:
        if (!validarNombre(valorNombre) || !validarApellido1(valorApellido1) ||
            !validarApellido2(valorApellido2) || !validarNacimiento(valorNacimiento) ||
            !validarEdad(valorEdad) || !validarTelefono(valorTelefono) ||
            !validarAficion1(valorAficion1) || !validarAficion2(valorAficion2)){
                return false;
        }
        return true;
    }

