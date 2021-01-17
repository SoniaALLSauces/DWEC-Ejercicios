/* Autor: Sonia Anton Llanes */
/* Fecha: 27/10/2020 */
/* Practica 03 - Objeto predefinido String */


/* Opción 1. Pide dos cadenas al usuario y compruebe carácter a carácter si las cadenas introducidas son
exactamente iguales. Si las cadenas no tienen la misma longitud, el script debe dar un error y no
comprobar nada. */
		alert ("1. TEXTOS IDENTICOS O DIFERENTES");
		var cadena1= prompt("Introduce un texto (no más de 10 palabras):");
		while (!isNaN(cadena1)){
			cadena1= prompt("ERRROR al introducir números. Introduce un texto (unas 10 palabras):");
		}
		var cadena2= prompt("Introduce otro texto (no más de 10 palabras):");
		while (!isNaN(cadena2)){
			cadena2= prompt("ERRROR al introducir números. Introduce otro texto (unas 10 palabras):");
		}
		
		var iguales= true; //variable para salir salir dejar de comprobar en cuanto dos caracteres son distintos
		if ((cadena1.length)!=(cadena2.length)){
			alert ("LOS TEXTOS INTRODUCIDOS NO SON IGUALES");
		} else{
				for (var i=0; i<cadena1.length; i++){
					if (iguales){
						if (cadena1.charAt(i)!=cadena2.charAt(i)){
							iguales= false;
						}
					}
				}
				if (iguales){
					alert ("LOS TEXTOS INTRODUCIDOS SON IGUALES");
				} else{
					alert ("LOS TEXTOS INTRODUCIDOS NO SON IGUALES");
				}	
			}

/* Opción 2: Pide al usuario por pantalla un número determinado de caracteres de forma seguida (no hay
límite de caracteres establecido), tu script debe dividir todo lo que ha introducido en dos partes (dos
cadenas) y comprobar si esas dos partes son iguales. Es decir: introduce holahola, son 8 caracteres,
dividir entre dos y comprobar que “hola” y “hola” son iguales. Si el número de caracteres introducido
no se puede dividir a partes iguales, añade un espacio al final y cuando muestres la información final
indícalo. */
		alert ("2. TEXTO DUPLICADO");
		var num= prompt("¿Cuantos caracteres quieres introducir");
		var cadena= prompt("Introduce " +num+ " caracteres (letras) seguidos, sin espacios \n Y comprobaremos si se ha introducido el texto duplicado");
			while (!isNaN(cadena) || cadena.length!=num){
				while (!isNaN(cadena)){
					cadena= prompt("ERRROR al introducir números. Introduce " +num+ "letras seguidas:");
				}
				while (cadena.length!=num){
					cadena= prompt("ERROR numero de caracteres distinto al que se indico anteriormente. \n Introduce " +num+ "caracteres (letras) seguidos:");
				}
			}
		
		if (cadena.length%2!=0){  //comprobamos si el texto se puede dividir en dos partes iguales
			cadena+= " ";
			alert ("Se ha añadido un espacio al final para poder dividir el texto en dos partes iguales.");
		}
		
		var cadena1= "";  //variable para guardar la primera mitad de la cadena
		for (var i=0; i<(cadena.length/2); i++){
			cadena1+= cadena.charAt(i);
		}
		var cadena2= "";  //variable para guardar la segunda mitad de la cadena
		for (var i=(cadena.length/2); i<cadena.length; i++){
			cadena2+= cadena.charAt(i);
		}
		
		var iguales= true;
		for (var i=0; i<cadena1.length; i++){
			if (iguales){
				if (cadena1.charAt(i)!=cadena2.charAt(i)){
					iguales= false;
				}
			}
		}
		if (iguales){
			alert ("Si dividimos el texto a la mitad \n" +
					cadena1+ "\n" +cadena2+
					"\n las dos mitades SON IGUALES");
		} else{
			alert ("Si dividimos el texto a la mitad \n" +
					cadena1+ "\n" +cadena2+
					"\n las dos mitades NO SON IGUALES");
		}

/* Opción 3: Pídele al usuario que introduzca una frase que contenga al menos 5 palabras, 
mientras no la introduzca sigue pidiéndosela. 
Cuando la haya introducido comprueba si son iguales todos los primeros caracteres de todas las palabras 
y si es así, muestra por pantalla el ok, sino es así, muestra por pantalla los caracteres que has encontrado.
a. Ejemplo: hola hola hola hola hola -> Ok
b. Ejemplo2: hola pepe maria juan serafin -> 1º palabra: h, 2º palabra: p, 3º palabra: m, 4º palabra: j, 5º palabra: s */
		alert ("3. COMPARAMOS LAS PALABRAS DEL TEXTO INTRODUCIDO");
		var texto= prompt("Introduce al menos 5 palabras");
		var palabras=texto.split(" ");  //separo el texto en palabras
		var numpalabras= texto.split(" ").length;  //cuento las palabras del texto
			while (!isNaN(texto) || numpalabras<5){  //valido que el texto sean letras y tenga al menos 5 palabras
				while (!isNaN(texto)){
					texto= prompt("ERROR al introducir números. Introduce al menos 5 palabras:");
				}
				while (numpalabras<5){
					texto= prompt("ERROR. Introduce al menos 5 palabras: ");
				}
			}
		
		var cadena= "";  //variable donde almaceno la primera letra de cada palabra
		var letra= palabras[0].charAt(0);  //variable para comparar la primera letra de cada palabra
		var iguales= true;
		for (var i=0; i<numpalabras; i++){  //recorro las palabras 
			var primeraletra= palabras[i].charAt(0);
			if (primeraletra!=letra){
				iguales= false;
			}
			cadena+= (i+1)+ "º palabra: " +primeraletra +", ";
		}
		
		if (iguales){
			alert ("OK \n todas las palabras comienzan por la misma letra");
		} else {
			alert ("Las palabras introducidas comienzan por: \n " +cadena);
		}

/* Opción 4: Pide al usuario una frase de la longitud que el usuario quiera (no hay límite) 
y muestra por pantalla las veces que aparecen las vocales, debes de identificar en mayúsculas y minúsculas 
y mostrar la información.
a. Ejemplo: Si el usuario introduce “ala” debe mostrar que tiene 2 a
b. Ejemplo: Si el usuario introduce “alaaAA” debe mostrar que tiene 3 a y 2 A */
		alert ("4. CONTAMOS LAS VOCALES");
		var texto= prompt ("Introduce un texto: ");
			while (!isNaN(texto)){
				texto= prompt ("ERROR de caracteres. Introduce un texto (letras): ");
			}
		
		//Variables contadores de vocales:
		var conta= 0;
		var contA= 0;
		var conte= 0;
		var contE= 0;
		var conti= 0;
		var contI= 0;
		var conto= 0;
		var contO= 0;
		var contu= 0;
		var contU= 0;
		
		for (var i=0; i<texto.length; i++){  //recorremos todas las letras y aumentamos el contador si coincide con alguna vocal
			switch (texto.charAt(i)){
				case "a":
					conta++;
					break;
				case "A":
					contA++;
					break;
				case "e":
					conte++;
					break;
				case "E":
					contE++;
					break;
				case "i":
					conti++;
					break;
				case "I":
					contI++;
					break;
				case "o":
					conto++;
					break;
				case "O":
					contO++;
					break;
				case "u":
					contu++;
					break;
				case "U":
					contU++;
					break;
				
			}			
		}

		var cadena= "El texto introducido tiene ";  //variable para mostrar el mensaje de los contadores
		if (conta>0){
			cadena+= conta +" a "
		}
		if (contA>0){
			cadena+= "y "+ contA +" A "
		}
		if (conte>0){
			cadena+= "y "+ conte +" e "
		}
		if (contE>0){
			cadena+= "y "+ contE +" E "
		}
		if (conti>0){
			cadena+= "y "+ conti +" i "
		}
		if (contI>0){
			cadena+= "y "+ contI +" I "
		}
		if (conto>0){
			cadena+= "y "+ conto +" o "
		}
		if (contO>0){
			cadena+= "y "+ contO +" O "
		}
		if (contu>0){
			cadena+= "y "+ contu +" u "
		}
		if (contU>0){
			cadena+= "y "+ contU +" U "
		}
		
		alert (cadena);




