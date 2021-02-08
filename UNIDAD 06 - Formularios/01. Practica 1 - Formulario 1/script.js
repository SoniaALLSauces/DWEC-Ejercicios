/* Autor: Sonia Anton Llanes */
/* Fecha: 05/02/2021 */
/* Practica 1 - Formularios */


/* VALIDACIONES DE CADA CAMPO */
    //Valido Codigo Postal: tienen que ser 5 números
        function validarCPostal(valorCPostal){
            if (valorCPostal==null || valorCPostal==0 || /^\s+$/.test(valorCPostal)){  //solo si no está vacio compruebo
                document.getElementById("pCPostal").innerHTML= "";
            } else if (isNaN(valorCPostal) || valorCPostal.length!=5){  //si se escriben números y son 5 caracteres
		document.getElementById("lbCPostal").style.border= "1px solid red";
                document.getElementById("pCPostal").innerHTML= "¡Error de caracteres o formato!! (12345)";
		return false;
            }
            return true;
	}
    //Valido Telefono: máximo 11 caracteres (9 números)
        function validarTelefono(valorTelefono,lb,p){
            console.log("hola");
            if (valorTelefono.length>11){  //controlo que la longitud introducida no sea mayor de 11 caracteres
                document.getElementById(p).innerHTML= "Maximo 11 caracteres (XXX-XXX-XXX)";
                document.getElementById(lb).style.border= "1px solid red";
                return false;
            }
            else if (valorTelefono.length>0){  //si la longitud es mayor de 0 el usuario ha introducido caracteres
                var contador= 0;  //variable para contar los caracteres que son números
                var caracter= valorTelefono.split("");  //split para recorrer cada caracter introducido
                console.log(caracter);
                var telf= "";  //variable para generar el telefono sólo con los caracteres que son números
                for (var i=0; i<valorTelefono.length; i++){  //recorro cada uno de los caracteres
                    if (caracter[i]==="0" || caracter[i]==="1" || caracter[i]==="2" ||  //y si es número sumo al contador (deben ser 9 números)
                        caracter[i]==="3" || caracter[i]==="4" || caracter[i]==="5" || 
                        caracter[i]==="6" || caracter[i]==="7" || caracter[i]==="8" || caracter[i]==="9"){ 
                            contador++;
                            telf+= caracter[i];
                            console.log(telf);
                    }
                    console.log(contador);
                }
                if (contador!=9){  //si no hay 9 números muestro mensaje de error
                    document.getElementById(p).innerHTML= "Debe tener 9 números (XXX-XXX-XXX)";
                    document.getElementById(lb).style.border= "1px solid red";
                    return false;
                } else {  //si son 9 números genero el teléfono con el formato indicado
                    var valor= telf.slice(0,3) +"-"+ telf.slice(3,6) +"-"+ telf.slice(6,9);
                    document.getElementById(lb).value= valor;
                }
            }
            return true;
        }
    //Valido Aviso Legal: obligatorio marcar
        function validarAviso(valorAviso){
            if(!valorAviso.checked){
                document.getElementById("pAviso").innerHTML= "campo obligatorio (seleccionar)";
                document.getElementById("pAviso").style.color= "red";
                return false;
            }
            return true;
        }
//Funcion que valida la submit con las validaciones de todos los input
    function validar(){
        //Limpio todos los campos de error:
        for (var i=0; i<document.getElementsByTagName("p").length; i++){
            document.getElementsByTagName("p")[i].innerHTML= "";
            document.getElementsByTagName("input")[i].style.border= "1px solid gray";
        }
        //VARIABLES que contienen el valor introducido por el usuario
            //var valorNombre= document.getElementById("lbNombre").value;
            //var valorApellido1= document.getElementById("lbApellido1").value;
            //var valorApellido2= document.getElementById("lbApellido2").value;
            //var valorDireccion= document.getElementById("lbDireccion").value;
            var valorCPostal= document.getElementById("lbCPostal").value;
            var valorTelfFijo= document.getElementById("lbTelfFijo").value;
            var valorTelfMovil= document.getElementById("lbTelfMovil").value;
            //var valorEstado= document.getElementById("lbEstado").value;
            var valorAviso= document.getElementById("lbAviso");
            
        //Campos Obligatorios que validan cada uno de los campos:
            validarCPostal(valorCPostal);
            var lbF= "lbTelfFijo";
            var pF= "pTelfFijo";
            validarTelefono(valorTelfFijo,lbF,pF);
            var lbM= "lbTelfMovil";
            var pM= "pTelfMovil";
            validarTelefono(valorTelfMovil,lbM,pM);
            validarAviso(valorAviso);
        //Preparo el return:
        if (!validarCPostal(valorCPostal) || !validarTelefono(valorTelfFijo,lbF,pF) ||
            !validarTelefono(valorTelfMovil,lbM,pM) || !validarAviso(valorAviso)){
                return false;
        }
        return true;
    }

//Función que controla la seleccion del select
    function estado(){
        var valorEstado= document.getElementById("lbEstado").value;
        if (valorEstado=="soltero" || valorEstado=="separado"){
            document.getElementById("divBoda").style.display= "none";
            document.getElementById("divDivorcio").style.display= "none";
        } else if (valorEstado=="casado"){
            document.getElementById("divBoda").style.display= "inline";
            document.getElementById("divDivorcio").style.display= "none";
        } else if(valorEstado=="divorciado"){
            document.getElementById("divBoda").style.display= "inline";
            document.getElementById("divDivorcio").style.display= "inline";
        }
    }