/* Autor: Sonia Anton Llanes */
/* Fecha: 12/11/2020 */
/* Práctica 03 - Funciones Usuario */

/* Crea un script que contenga un menú que permita utilizar las siguientes funciones: */
/* Función 1: contarNumeros() que muestre por pantalla la cuenta atrás de un número que el usuario ha
introducido por pantalla. */
		function contarNumeros(num){
			var atras= num;
			var cadena= "CUENTA ATRAS: \n" +atras;
			while(atras>0){
				atras--;
				cadena+= " - " +atras;
			}
			return cadena;
		}

/* Función 2: cambiarPosicion() que permita darle la vuelva a un número de dos cifras. Debes de comprobar
que el número que introduce el usuario tiene dos dígitos.
 -> Ejemplo: El usuario introduce 34, compruebas que es un número de dos dígitos y llamas a la función
pasándole ese número y muestras por pantalla 43. */
		function cambiarPosicion(num){  
			//num debe ser una cadena string para poder recorrela con charAt
			//al solicitarlo al usuario con un prompt lo que recibo es un string
			var a= num.charAt(0);
			var b= num.charAt(1);
			var newnum= b.concat(a);
			return newnum;
		}

/* Función 3: operaciones() que permite hacer operaciones con dos números que se le piden al usuario. El
script debe comprobar que son números y llamar a la función que mostrará
suma/resta/multiplicación/división de los dos números. El resultado debe de aparecer por pantalla de forma
conjunta (todas las operaciones).
 -> Ejemplo: El usuario introduce el número 2 y el número 5, compruebas que son números y llamas a la
    función que le pasas esos números. La función hace las operaciones y muestra por pantalla:
    Los resultados son:
	2+5 = 7
	2 – 5 = -3
	2 x 5 = 10
	2 / 5 = 0.4 */
		function operaciones(num1, num2){
			var opera= "Los resultados son: \n";
			var suma= num1 + num2;
			var resta= num1 - num2;
			var mult= num1 * num2;
			var div= num1 / num2;
			opera+= "SUMA........................ " +num1+ " + " +num2+ " = " +suma+ "\n" +
					"RESTA........................ " +num1+ " - " +num2+ " = " +resta+ "\n" +
					"MULTIPLICACION.. " +num1+ " x " +num2+ " = " +mult+ "\n" +
					"DIVISION.................. " +num1+ " / " +num2+ " = " +div+ "\n" ;
			return opera;
		}

/* Función 4: Invéntate una operación que utilice String de alguna forma y explica con comentarios qué hace
la función. */
		function horaString(){ //funcion que convierte a string la hora del objeto fecha-hora actual
			var fecha= new Date();
			var hora= fecha.getHours();  //getHours() nos devuelve un entero
			var minutes= fecha.getMinutes();  //y getMinutes() nos devuelve un entero
			var cadenaHora= String(hora) +":"+ String(minutes);  //ambos enteros los convierto en string antes de mostrarlos
			return cadenaHora;
		}		
		
/* Función 5: Invéntate una operación que utilice Date de alguna forma y explica con comentarios qué hace la
función. */	
		function diasHastaTarea(dia, mes){  //funcion que calcula los dias que nos queda para la siguiente tarea (dentro del año actual)
			var hoy= new Date();
			var fecha= new Date(2020, mes, dia);
			var dias;
			if (fecha.getTime()>hoy.getTime()){
				var diferencia= fecha.getTime()-hoy.getTime();
				var segundos= diferencia/1000; //paso los milisegundos a segundos.
				var segADias=parseInt(segundos/86400); //paso los segundos a días.
				dias= "Quedan " +segADias+ " días hasta la tarea.";
			} else{
				dias= "La fecha introducida ya pasó";
			}
			return dias;
		}


	//MENU CON LAS 5 FUNCIONES
		var opcion= prompt("Selecciona una de las siguientes opciones: \n" +
							"1. Cuenta atrás del número introducido \n" +
							"2. Voltear el número de dos cifras introducido \n" +
							"3. Operaciones con dos números \n" +
							"4. Función String: Hora actual \n" +
							"5. Funcion Date: Recordar tarea dentro de X días");
			while (isNaN(opcion) || opcion<1 || opcion>5){
				opcion= prompt("ERROR. Selecciona una opción correcta: \n" +
							    "1. Cuenta atrás del número introducido \n" +
								"2. Voltear un número de dos cifras introducido \n" +
								"3. Operaciones con dos números \n" +
								"4. Función String: Hora actual \n" +
								"5. Funcion Date: Recordar tarea dentro de X días");
			}
		
		opcion= parseInt(opcion);
		switch (opcion){
			
			case 1:
				var num= prompt("Introduce un número: ");
					while (isNaN(num)){
						num= prompt("ERROR al introducir letras o caracteres especiales. Introduce un número: ");
					}
				num= parseInt(num);
				alert (contarNumeros(num));
				break;
			
			case 2:
				//aunque solicite un numero, al solicitarlo con prompt me devuelve un string que necesito en la funcion para recorrer con charAt
				var num= prompt("Introduce un número de DOS cifras: ");
					while(isNaN(num) || num<10 || num>99){
						while (isNaN(num)){
							num= prompt("ERROR al introducir letras o caracteres especiales. Introduce un número de DOS cifras: ");
						}
						while(num<10 || num>99){
							num= prompt("ERROR. Introduce un número de DOS cibras: ");
						}
					}
				alert (cambiarPosicion(num));
				break;
			
			case 3:
				var num1= prompt("Introduce un número: ");
					while (isNaN(num1)){
						num1= prompt("ERROR al introducir letras o caracteres especiales. Introduce un número: ");
					}
				var num2= prompt("Introduce otro número: ");
					while (isNaN(num2)){
						num2= prompt("ERROR al introducir letras o caracteres especiales. Introduce el segundo número: ");
					}
				num1= parseInt(num1);
				num2= parseInt(num2);
				alert (operaciones(num1, num2));
				break;
			
			case 4:
				alert ("La hora actual es   " +horaString());
				break;
			
			case 5:
				var dia= parseInt(prompt("Introduzca el dia de la tarea (1-30): "));			
					while(isNaN(dia) || (dia<1 || dia>30)){  //controlo que solo introduzca numeros del 1 al 30:
						dia= parseInt(prompt("ERROR. Introduzca un dia del mes en rango (1-30): "));
					}
				var mes= parseInt(prompt("Introduzca el mes (1-12): "));
					while(isNaN(mes) || (mes<1 || mes>12)){  //controlo que solo introduzca numeros del 1 al 12:
						mes= parseInt(prompt("ERROR. Introduzca un mes del rango (1-12) : "));
					}
				mes-=1; //resto 1 al mes introducido pq en Date() los meses empiezan en 0
				alert (diasHastaTarea(dia, mes));
				break;
			
		}


