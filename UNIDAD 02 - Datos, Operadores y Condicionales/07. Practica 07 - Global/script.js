/* Autor: Sonia Anton Llanes */
/* Fecha: 13/10/2020 */
/* Practica 07 - Global */

/* 1. Crea un script que pida la edad y el sexo de 10 personas y muestre por pantalla finalmente información
de cada persona en un único mensaje. */
		var edad;
		var sexo;
		var texto="";
		var i;
		for (i=1;i<=2;i++){
			edad= prompt("Introduce la edad de la persona " +i+ ": ");
			if (isNaN(edad)){
				edad= prompt("Caracter ERROR. Introduce la edad de la persona " +i+ ": ");
			}
			sexo= prompt("Introduce el sexo de la persona " +i+ " (hombre-mujer): ");
			if (sexo!="hombre" || sexo!="mujer"){
				sexo= prompt("Caracter ERROR. Introduce el sexo de la persona " +i+ " (hombre-mujer): ");
			}
			texto+= "Persona " +i+ ": edad - " +edad+ ", sexo - " +sexo+ "\n";
		}
		alert (texto);

/* 2. Crea un script que lea números enteros hasta que el usuario introduzca un número 0. Finalmente debe
mostrar el número máximo, el mínimo y la media de todos ellos. Debes de controlar que introduzca
números y no cualquier otro carácter. */
		var num= parseInt(prompt("Introduce un numero: "));
		while (isNaN(num)){
			num= parseInt(prompt("Caracter ERROR. Introduce un numero: "));
		}
		var maximo= num;
		var minimo= num;
		var suma= num;
		var contador= 1;
		while (num!=0){
			num= parseInt(prompt("Introduce otro numero: "));
			while (isNaN(num)){
				num= parseInt(prompt("Caracter ERROR. Introduce un numero: "));
			}
			if(num>maximo){
				maximo= num;
			}
			if(num<minimo && num!=0){
				minimo= num;
			}
			if (num!=0){
				suma+= num;
				contador++;
			}
		}
		alert ("El numero maximo es: " +maximo+ "\n" +
			   "El numero minimo es: " +minimo+ "\n" +
			   "La media es: " +(suma/contador));

/* 3. Crea un script que permita validar una clave introducida por el usuario y tenga 3 intentos para
introducirla bien. Si no la introduce bien, le da error y se sale del programa. La clave debe ser un
número de 6 dígitos*/
		var clave= parseInt(prompt("Introduce la clave"));
		if (isNaN(clave) || (clave<100000) || (clave>999999)){
			for (var i=0; i<2; i++){
				if (isNaN(clave)){
					alert ("ERROR. Introduce solo numeros");
					clave= parseInt(prompt("Introduce la clave"));
				}
				else if (clave<100000){
					alert ("ERROR. Faltan numeros");
					clave= parseInt(prompt("Introduce la clave"));
				}
				else if (clave>999999){
					alert ("ERROR. Exceso de numeros");
					clave= parseInt(prompt("Introduce la clave"));
				}
			}
			if (isNaN(clave) || (clave<100000) || (clave>999999)){
				alert ("CLAVE INCORRECTA");
			}
			else{
				alert ("CLAVE CORRECTA");
			}
		}
		else{
			alert ("CLAVE CORRECTA");
		}

/* 4. Crea un script que cuente la cantidad de vocales que se encuentran dentro de un texto introducido por
el usuario. */
		var texto=prompt("Introduce un texto: ");
		var vocal=0;
		for(var i=0;texto[i];i++){
			if (texto[i]=="a" || texto[i]=="A" ||
				texto[i]=="e" || texto[i]=="E" ||
				texto[i]=="i" || texto[i]=="I" ||
				texto[i]=="o" || texto[i]=="O" ||
				texto[i]=="u" || texto[i]=="U" ){
				vocal++;
			}
		}
		alert ("Numero de vocales del texto -  " +vocal);

/* 5. Crea un script que calcule las calificaciones de un grupo de alumnos. El profesor tendrá que introducir
el número de alumnos que va a gestionar el script.
  La nota final de cada alumno se calcula según el siguiente criterio:
     a. Parte práctica 40%
     b. Parte teórica 30%
     c. Actitud 30%
  El script leerá el nombre del alumno y su número de expediente y las notas obtenidas en cada parte.
  Finalmente mostrará el resultado de todos los alumnos y una media de la nota final y una media de
cada parte.
  Nota:
     • El número de expediente está formado por 4 números y una vocal
     • Las notas deben estar entre 0 y 10. Si se introduce un valor que no es numérico o no está entre
	   los valores 0-10, dará un error y volverá a pedir la información.  */
		var alumnos= parseInt(prompt("Numero de alumnos de la clase: "));
		var alumno;
		var nexpte;
		var practica;
		var mediapractica;
		var teorica;
		var mediateorica;
		var actitud;
		var mediaactitud;
		var nota;
		var listadoalumnos="Listado: \n";
		
		for(var i=0;i<alumnos;i++){
			alumno=prompt("Introduce el nombre del alumno: ");
			nexpte=prompt("Introduce el numero de expediente: ");
			while ((parseInt(nexpte)<999) || (parseInt(nexpte)>10000)){
				practica=prompt("ERROR al introducir. Introduce el numero de expediente: ");
			}
			practica=prompt("Introduce la nota practica: ");
			while (isNaN(practica) || (practica<0) || (practica>10)){
				practica=prompt("ERROR al introducir. Introduce la nota practica: ");
			}
			mediapractica=practica*40/100;
			teorica=prompt("Introduce la nota teorica: ");
			while (isNaN(teorica) || (teorica<0) || (teorica>10)){
				teorica=prompt("ERROR al introducir. Introduce la nota teorica: ");
			}
			mediateorica=teorica*30/100;
			actitud=prompt("Introduce la nota de actitud: ");
			while (isNaN(actitud) || (actitud<0) || (actitud>10)){
				actitud=prompt("ERROR al introducir. Introduce la nota practica: ");
			}
			mediaactitud=actitud*30/100;
			nota=mediapractica+mediateorica+mediaactitud;
			listadoalumnos+= "Alumno: " +alumno+ " - Notas: " +mediapractica+ " + " +mediateorica+ " + " +mediaactitud+ " = " +nota+ "\n";
		}
		
		alert (listadoalumnos);
		
/* 6. Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números que pides al
usuario. El segundo número tiene que ser mayor o igual que el primer número */
		var num1= parseInt(prompt("Introduzca un numero: "));
		while (isNaN(num1)){
			num1= parseInt(prompt("ERROR de caracteres. Introduzca un numero: "));
		}
		var num2= parseInt(prompt("Introduzca otro numero: "));
		while (isNaN(num1)){
			num2= parseInt(prompt("ERROR de caracteres. Introduzca otro numero: "));
		}
		var cadena= "LOS MULTIPLOS DE 2 ENTRE LOS NUMEROS INTRODUCIDOS SON: \n ";
		//Controlamos si es mayor num1 o num2:
		if (num2>num1){
			for (var i=num1+1; i<num2; i++){
				if (i%2==0){
					cadena+= i +", ";
				}
			}
		} else{
			for (var i=num2+1; i<num1; i++){
				if (i%2==0){
					cadena+= i +", ";
				}
			}
		}
		
		alert (cadena);
		
/* 7. Escribe un script que calcule la suma de los números pares y los números impares de los números
comprendidos entre 1 y 100. El 1 y el 100 no se tienen en cuenta. */
		var sumapares= 0;
		var sumaimpares= 0;
		for (var i=1; i<100; i++){
			if (i%2==0){
				sumapares+= i;
			} else{
				sumaimpares+= i;
			}
		}
		alert (" La suma de los numeros pares entre 0 y 100 es: " +sumapares+
				"\n La suma de los numeros impares entre 0 y 100 es: " +sumaimpares);

/* 8. Escribe un script que calcule la suma de los números pares y la suma de los números impares
comprendidos entre dos números que le pides al usuario. Es decir, el usuario introduce por ejemplo el
45 y el 89 y debes de mostrar la suma de los números pares comprendidos entre el 45 y el 89 y por otro
lado la suma de los números impares. No contar extremos, es decir, el 45 y el 89 en este caso no se
tienen en cuenta. */
		var num1= parseInt(prompt("Introduzca un numero: "));
		while (isNaN(num1)){
			num1= parseInt(prompt("ERROR de caracteres. Introduzca un numero: "));
		}
		var num2= parseInt(prompt("Introduzca otro numero: "));
		while (isNaN(num1)){
			num2= parseInt(prompt("ERROR de caracteres. Introduzca otro numero: "));
		}
		var sumapares= 0;
		var sumaimpares= 0;
		//Controlamos si es mayor num1 o num2:
		if (num2>num1){
			for (var i=num1+1; i<num2; i++){
				if (i%2==0){
					sumapares+= i;
				} else{
					sumaimpares+= i;
				}
			}
		} else{
			for (var i=num2+1; i<num1; i++){
				if (i%2==0){
					sumapares+= i;
				} else{
					sumaimpares+= i;
				}
			}
		}
		
		alert (" La suma de los numeros pares entre " +num1+ " y " +num2+ " es: " +sumapares+
				"\n La suma de los numeros impares entre " +num1+ " y " +num2+ " es: " +sumaimpares);
				
/* 9. Crea un script que cuente las veces que aparece una determinada letra en una frase que el usuario
introduce por teclado. */
		// var cadena= prompt("Introduce un texto: ");
		// while (!isNaN(cadena)){
			// cadena= prompt("ERROR de caracteres. Introduce un texto: ");
		// }
		// var letra= prompt("Vamos a contar las veces que aparece la letra que introduzcas a continuacion: ");
		// while (!isNaN(letra)){
			// cadena= prompt("ERROR de caracteres. Introduce una letra: ");
		// }


/* 10. Crea un script que simule el funcionamiento de un reloj digital y que permita ponerlo en hora. */



		
