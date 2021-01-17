/* Autor: Sonia Anton Llanes */
/* Fecha: 03/11/2020 */
/* Practica 00 - Arrays */


/* 1. Crea un array que contenga 10 nombres de animales que le pidas al usuario. Muestra por pantalla los
nombres de animales que ha introducido el usuario en un alert() todos juntos. */
		alert ("1. ARRAY DE 10 ANIMALES");
		var animales= new Array(10);
		for (var i=0; i<10; i++){
			animales[i]= prompt((i+1)+ "º animal: Introduce un animal");
		}
		alert ("Los animales introducidos son: \n" + animales.join(""));
		
/* 2. Crea dos arrays de materiales (materiales1 y materiales2), en cada array debe haber 5 elementos
(elemento1, elemento2, …). Compara el tamaño de los arrays (el número de elementos que tienen) y
muestra por pantalla si los arrays son iguales en tamaño o no. Si lo son, muestra el mensaje: “Tienen el
mismo número de elementos” y sino lo son, muestra “No tienen el mismo número de elementos” */		
		var materiales1= new Array("materiales1","materiales2","materiales3","materiales4","materiales5");
		var materiales2= new Array("materiales1","materiales2","materiales3","materiales4","materiales5");
		if (materiales1.length==materiales2.length){
			alert ("2. ARRAYs CON EL MISMO NÚMERO DE ELEMENTOS \n" +
					"Número de elementos del primer array: " +materiales1.length+ "\n" +
					"Número de elementos del segundo array: " +materiales2.length);
		} else {
			alert ("No tienen el mismo número de elementos");
		}
		
/* 3. Completa el ejercicio 2, comprobando si los elementos de cada array son los mismos. Es decir, además
de comprobar que tienen el mismo número de elementos (ejercicio2), comprueba que los dos arrays
tienen también los mismos elementos. */
		var iguales= true;
		for (var i=0; i<5; i++){
			if (materiales1[i]!=materiales2[i]){
				iguales= false;
			}			
		}
		if (iguales){
			alert ("3. ARRAYs CON LOS MISMOS ELEMENTOS \n" +
					"Elementos del primer array: " +materiales1.join(", ")+ "\n" +
					"Elementos del segundo array: " +materiales2.join(", "));
		} else {
			alert ("No tienen los mismos elementos");
		}
		
		//En el ejercicio 2 y 3 he realizado varias pruebas cambiando elementos del Array 2 para que me de
		// distintos resultados.

/* 4. Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres. Utiliza métodos de
String. */
		alert ("4. CONVERTIR UNA FRASE EN UN ARRAY");
		var frase= prompt("Introduce una frase: ");
		var arrayFrase= new Array();
		for (var i=0; i<frase.length; i++){
			arrayFrase[i]= frase.charAt(i);
		}
		alert  ("Array de la frase introducida: \n" + arrayFrase.join());
		
/* 5. Crea 1 array que contenga 10 números iguales. Pide al usuario los números y haz las validaciones
oportunas. */
		alert ("5. ARRAY DE 10 NUMEROS IGUALES");
		var numeros5= new Array(10);
		numeros5[0]= prompt ("Introduce el 1º número: ");
			while (isNaN(numeros5[0])){
				numeros5[0]= prompt ("ERROR de caracteres. Introduce un número: ");
			}
		for (var i=1; i<10; i++){
			numeros5[i]= prompt ("Introduce el " +(i+1)+ "º número: ");
			while (isNaN(numeros5[i]) || numeros5[i]!=numeros5[0]){
				numeros5[i]= prompt ("ERROR. Introduce siempre el mismo número que el primero: " +numeros5[0]+
				"\n Introduce el " +(i+1)+ "º número: ");
			}
		}
		alert ("Mostramos el array de números iguales \n" +numeros5.join());

/* 6. Crea un array que contenga números aleatorios entre 0 y 100. El número de números que contiene el
array, pídeselo al usuario por teclado. Muestra por pantalla el valor de cada posición del array y la suma
de todos los valores del array.  */
		alert ("6. SUMA NUMEROS ALEATORIOS");
		var num= prompt("¿Cuantos números aleatoríos quieres que se generen??");
			while (isNaN(num)){
				num= prompt("ERROR Debes introducir un número ¿Cuantos números aleatoríos quieres que se generen??");
			}
			num= Math.trunc(num);
		var numeros= new Array(num); //array para guardar los numeros aleatorios
		var suma= 0;  //variable para guardar la suma de los numeros generados
		for (var i=0; i<num; i++){
			numeros[i]=Math.trunc(Math.random()*100+1);
			suma+= numeros[i];
		}
		alert ("Los números generados son:  " +numeros.join(" - ")+ "\n Y la suma de todos es:  " +suma);

/* 7. Crea dos arrays que tengan el mismo tamaño. El tamaño del array pídeselo al usuario. En uno de los
arrays almacenaras nombres de personas como cadenas y en el otro array tendrás que almacenar la
longitud de los nombres del primer array. Muestra por pantalla el nombre y la longitud que tiene (datos
de ambos arrays).  */
		alert ("7. ARRAY DE NOMBRES Y SU LONGITUD");
		var ltud= prompt("¿Cuantos nombres quieres introducir en el array??");
			while (isNaN(ltud)){
				ltud= prompt("ERROR Debes introducir un número ¿Cuantos nombres quieres introducir??");
			}
			ltud= Math.trunc(ltud);
		
		var nombres= new Array(ltud);  //array que guarda los nombres introducidos
		var longitud= new Array(ltud);  //array que guarda la longitud de cada nombre
		
		for (var i=0; i<ltud; i++){  //rellenamos el array nombres
			nombres[i]= prompt("Introduce el " +(i+1)+ "º nombre: ");
				while (!isNaN(nombres[i])){
					nombres[i]= prompt("ERROR al inroducir numeros o signos. Introduce el " +(i+1)+ "º nombre: ");
				}
		}
		
		for (var i=0; i<ltud; i++){  //rellenamos el array longitud
			longitud[i]= nombres[i].length;
		}
		
		var cadena= "Los nombre introducidos y su longitud son: \n"; //variable para mostrar cada nombre y su longitud
		for (var i=0; i<ltud; i++){
			cadena+= (i+1)+ "º nombre: " +nombres[i]+ " - tiene " +longitud[i]+ " caracteres \n";
		}
		alert (cadena);

/* 8. Crea nuevas propiedades para el objeto Array:
• Propiedad “aMaysculas”: Crea una nueva propiedad de Array que permita pasar todos los caracteres
introducidos a mayúsculas. Utiliza la propiedad en el ejercicio1 y muestra los animales en mayúsculas
utilizándola.
• Propiedad “aMinusculas”: Crea una nueva propiedad de Array que permita pasar todos los caracteres
introducidos a minúsculas. Utiliza la propiedad en el ejercicio3 y muestra el contenido del primer
array de materiales en minúsculas.
• Propiedad “PI”. Crea una propiedad de Array que permita utilizar el valor de PI (3.1416) en este script.
Utiliza la propiedad en el ejercicio 5 multiplicando cada elemento del array por el valor de PI */
		//PROPIEDAD MAYUSCULAS:
		//Array.prototype.aMayus = animales[i].toUpperCase;
		Array.prototype.aMayusculas = function() {
			for(var i=0; i<this.length; i++){
				this[i]= this[i].toUpperCase();
			}
		};
		animales.aMayusculas();
		alert ("8.1. ANIMALES EJERCICIO 1 EN MAYÚSCULAS: " +animales.join(", "));
		
		//PROPIEDAD MINUSCULAS:
		Array.prototype.aMinusculas= function(){
			for(var i=0; i<this.length; i++){
				this[i]= this[i].toLowerCase();
			}
		};
		materiales2.aMinusculas();
		alert ("8.2. MATERIALES EJERCICIO 2 EN MINÚSCULAS: " +materiales2.join(", "));
		
		//PROPIEDAD PI
		Array.prototype.numeroPI= function(){
			for(var i=0; i<this.length; i++){
				this[i]= this[i]*Math.PI;
			}
		};
		numeros5.numeroPI();
		alert ("8.3. NUMEROS EJERCICIO 5 POR PI: \n" +numeros5.join(", "));
