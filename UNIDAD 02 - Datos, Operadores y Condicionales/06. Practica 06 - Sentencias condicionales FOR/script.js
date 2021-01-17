/* Autor: Sonia Anton Llanes */
/* Fecha: 13/10/2020 */
/* Practica 06 - Sentencias condicionales FOR */

/* 1. Implementa en JavaScript un pequeño script que muestre “hola” 5 veces seguidas. */
		var i;
		for (i=0;i<5;i++){
			alert ("Hola");
		}
		
/* 2. Implementa en JavaScript un pequeño programa que muestre la suma, la multiplicación, la resta y la
división de dos números dados (no se le piden al usuario). Las variables con los valores de los números
deben de estar inicializadas a un valor. Repite el proceso 2 veces. */	
		var num1= 5;
		var num2= 3;
		var i;
		for(i=0;i<2;i++){
			alert ("Suma 5+3: " +(num1+num2)+
				   "\n Resta 5-3: " +(num1-num2)+
				   "\n Multiplicacion 5*3: " +(num1*num2)+
				   "\n Division 5/3: " +(num1/num2));			
		}

/* 3. Implementar en JavaScript un pequeño programa que muestre los números del 1 al 20. */
		var num= 1;
		var i;
		for (i=0;i<20;i++){
			alert (num);
			num++;
		}
		
/* 4. Calcula el factorial de un número ya dado (inicializado a un número en concreto)
Nota: El factorial de un número entero n es una operación matemática que consiste en multiplicar todos
los factores n x (n-1) x (n-2) x ... x 1. De esta forma, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x
4 x 3 x 2 x 1 = 120. */
		var num= 5;
		var i;
		var ac=1
		for (i=num;i>0;i--){
			ac=ac*i;
		}
		alert (ac);

/* 5. Escribe un script que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido
(desde 1 hasta su edad). */
		var edad= parseInt(prompt("Introduce tu edad: "));
		var i;
		for (i=1;i<=edad;i++){
			alert (i);
		}
		
/* 6. Escribe un script que pida al usuario un número entero positivo y muestre por pantalla todos los números
impares desde 1 hasta ese número separados por comas. */
		var num= parseInt(prompt("Introduce un numero: "));
		var i;
		for (i=1;i<=num;i++){
			if (i%2!=0){
				alert (i);
			}
		}
		
/* 7. Escribe un script que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo
como el de abajo, de altura el número introducido.
  +
  ++
  +++
  ++++ */
		var num= parseInt(prompt("Introduce un numero: "));
		var i;
		var j;
		var triangulo="";		
		for (j=1;j<=num;j++){
			for(i=1;i<=j;i++){				
				triangulo+= "+";
			}
			triangulo+= "\n";		
		}
		alert (triangulo);

/* 8. Escribir un script que pida al usuario un entero y muestra por pantalla un triángulo como el que ves abajo
con los números. La altura del triangulo del ejemplo es: 9
1
3 1
5 3 1
7 5 3 1
9 7 5 3 1 */
		var num= parseInt(prompt("Introduce un numero: "));
		var i;
		var j;
		var triangulo="";
		for (j=1;j<=num;j+=2){
			for(i=j;i>=1;i-=2){
				triangulo+= i;
			}
			triangulo+= "\n";
		}
		alert (triangulo);


