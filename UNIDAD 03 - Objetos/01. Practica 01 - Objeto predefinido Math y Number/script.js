/* Autor: Sonia Anton Llanes */
/* Fecha: 22/10/2020 */
/* Practica 01 - Objeto predefinido Math y Number */


/* 1. Realiza un script que calcule el área de un cuadrado, triángulo, rectángulo y circunferencia. Pide al
usuario los datos necesarios para hacer los cálculos */
		alert ("AREAS DE UN CUADRADO, TRIÁNGULO, RECTÁNGULO Y CIRCULO");
		var lado= parseInt(prompt("Introduce longitud del lado (en cm): "));
		while (isNaN(lado)){
			lado= parseInt(prompt("ERROR de caracteres. Introduce longitud del lado en numero (en cm): "));
		}
		alert ("  Con LADO " +lado+ "CM se generan las siguientes áreas: \n" +
			   "El área de un cuadrado de " +lado+ "cm de lado es: " +Math.pow(lado,2)+ "cm2 \n" +
			   "El área de un triángulo equilatero de " +lado+ "cm de lado es: " +((Math.pow(lado,2))/2)+ "cm2 \n" +
			   "El área de un rectangulo de " +lado+ "cm de lado y el doble el otro lado es: " +(Math.pow(lado,2)*2)+ "cm2 \n" +
			   "El área de un círculo de " +lado+ "cm de radio es: " +(lado*2*Math.PI)+ "cm2 \n");
			   
/* 2. Realiza un script que genere números aleatorios sin que se repitan comprendidos entre 1 y 100. */
		var num1al= Math.trunc(Math.random()*100+1);
		var num2al= Math.trunc(Math.random()*100+1);
		while(num2al==num1al){
			num2al= Math.trunc(Math.random()*100+1);
		}
		var num3al= Math.trunc(Math.random()*100+1);
		while(num3al==num1al || num3al==num2al){
			num3al= Math.trunc(Math.random()*100+1);
		}
		alert ("Se han generado 3 numeros aleatorios: " +num1al+ ", " +num2al+ " y " +num3al);

/* 3. Realiza un script que genere 4 cuatro números comprendidos entre 1 y 50 y los compare. Muestra los
números ordenados de menor a mayor por pantalla. */
		var aleatorio1=Math.trunc(Math.random()*50+1);
		var aleatorio2=Math.trunc(Math.random()*50+1);
		var aleatorio3=Math.trunc(Math.random()*50+1);
		var aleatorio4=Math.trunc(Math.random()*50+1);
		var max= Math.max(aleatorio1,aleatorio2,aleatorio3,aleatorio4); //devuelve el máximo de los cuatro números
		var min= Math.min(aleatorio1,aleatorio2,aleatorio3,aleatorio4); //devuelve el minimo de los cuatro números
		//obtengo uno de los números del centro comparando con el máximo y el mínimo
		if (aleatorio1<max && aleatorio1>min){
			var medio1= aleatorio1;
		}else if(aleatorio2<max && aleatorio2>min){
			medio1= aleatorio2;
		}else{
			medio1= aleatorio3;
		}
		//obtengo el segundo numero del medio comparando con los otros tres:
		if (aleatorio1<max && aleatorio1<medio1 && aleatorio1>min){
			var medio2= aleatorio1;
		}else if(aleatorio2<max && aleatorio2<medio1 && aleatorio2>min){
			medio2= aleatorio2;
		}else if(aleatorio3<max && aleatorio3<medio1 && aleatorio3>min){
			medio2= aleatorio3;
		}else{
			medio2= aleatorio4;
		}
		//ordeno mayor y menor los del medio:
		var maxm= Math.max(medio1,medio2);
		var minm= Math.min(medio1,medio2);
		
		alert("Se han generado 4 números aleatorios. Ordenados de mayor a menor: \n" +
				max +", "+ maxm +", "+ minm +" y "+ min);
				
/* 4. Realiza un script que cree un objeto de tipo Number con el valor de PI. Muestra por pantalla el valor de
PI con 4 decimales. */				
		var valorPi= Math.PI;
		alert (valorPi.toFixed(5));
		
/* 5. Realiza un script que le pida al usuario números decimales con hasta 5 decimales (4.56675 o 3.454),
formatea la salida para que solamente queden números de 2 cifras y calcula el máximo y el mínimo de
los valores introducidos. */
		alert ("MAXIMO Y MINIMO DE LOS VALORES que se introduzcan a continuacion");
		var numeros= parseInt(prompt("¿Cuantos números quieres introducir (1-10)??"));
		while(isNaN(numeros) || (numeros<1 || numeros>10)){ //controlo que introduzca números del 1 al 10
				while (isNaN(numeros)){
					numeros= parseInt(prompt("ERROR. Introduzca un numero (1-31): "));
				}
				while (numeros<1 || numeros>31){
					numeros= parseInt(prompt("ERROR. Introduzca un numero en rango en rango (1-31): "));
				}
			}
		
		var numero=parseFloat(prompt("Introduce un número con decimales: "));
		numero= numero.toFixed(2);
		var maximo=numero;
		var minimo=numero;
		for (var i=1; i<numeros; i++){
			var numero=parseFloat(prompt("Introduce un número con decimales: "));
			numero= numero.toFixed(2);
			maximo= Math.max(numero,maximo);
			minimo= Math.min(numero,minimo);
		} 
		
		alert("El máximo número introducido es: " +maximo+ 
			   "\n Y el mínimo número introducido es: " +minimo);
				
				
				
				
				