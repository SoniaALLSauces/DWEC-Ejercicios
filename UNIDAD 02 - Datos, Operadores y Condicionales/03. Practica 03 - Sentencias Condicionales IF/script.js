/* Autor: Sonia Anton Llanes */
/* Fecha: 06/10/2020 */
/* Practica 03 - Sentencias condicionales IF */

/*1. Crea un pequeño script que compare el número 5 y el número 6. Comprueba si es mayor uno u otro y
muestra la información por pantalla.*/
		if (5>6){
			alert ("El numero 5 no es mayor que el numero 6");
		}
		else{
			alert ("El numero 6 es mayor que el numero 5");
		}
		
/*2. Pídele al usuario que introduzca un número y muestra la siguiente información de ese número:
• Si es positivo o negativo*/
		var num2= parseInt(prompt("Introduce un numero: "));
		if (num2>=0){
			alert ("El numero " +num2+ " es positivo");
		}
		else{
			alert ("El numero " +num2+ " es negativo");
		}

/*3. Pídele al usuario que introduzca un número y muestra la siguiente información de ese número:
• Si es distinto de cero o es cero*/
		var num3= parseInt(prompt("Introduce un numero: "));
		if (num3==0){
			alert ("El numero " +num3+ " es 0");
		}
		else{
			alert ("El numero " +num3+ " es distinto de 0");
		}

/*4. Pídele al usuario que introduzca un número y muestra la siguiente información de ese número (unión
del ejercicio 2 y ejercicio 3)
• Si es positivo o negativo
• Si es distinto de cero o es cero*/
		var num4= parseInt(prompt("Introduce un numero: "));
		if (num4==0){
			alert ("El numero " +num4+ " es 0");
		}
		else if (num4>0){
			alert ("El numero " +num4+ " es distinto de 0 y es positivo");
		}
		else {
			alert ("El numero " +num4+ " es distinto de 0 y es negativo");
		}

/*5. Pide al usuario que introduzca un día de la semana por teclado. Si introduce “viernes” (de cualquiera de
las formas posibles), muestra por pantalla la frase ¡fiestaaaa! Si introduce “lunes” que muestre por
pantalla “empezando la semana…”*/
		var dia= prompt("Introduce un día de la semana: ");
		if (dia=="viernes" || dia=="Viernes" || dia=="VIERNES"){
			alert ("¡fiestaaaaa!");
		}
		else if(dia=="lunes" || dia=="Lunes" || dia=="LUNES"){
			alert("empezando la semana....");
		}

/*6. Crea un pequeño script que compare dos números que le pides al usuario por pantalla. Debes de mostrar
si los números son iguales, si uno es mayor que otro o menor…*/
		var num61= parseInt(prompt("Introduce un numero: "));
		var num62= parseInt(prompt("Introduce otro numero: "));
		if (num61==num62){
			alert ("El numero " +num61+ " es igual que el numero " +num62);
		}
		else if(num61<num62){
			alert ("El numero " +num61+ " es menor que el numero " +num62);
		}
		else{
			alert ("El numero " +num61+ " es mayor que el numero " +num62);
		}

/*7. Crea un pequeño programa compruebe las edades de tres personas diferentes. Las edades debes de
pedírselas al usuario por pantalla. Se debe hacer las siguientes comprobaciones:
• Si la edad de persona1 es mayor que la edad de persona2, muestra por pantalla: ¡Que mayor eres!
• Si la edad de persona1 es menor que la edad de persona2, muestra por pantalla: ¡uiiiiii!
• Si la edad de persona 2 es mayor que la edad de persona3, muestra por pantalla: ¡Con 5 años todavía
hay que ir al cole!
• Si la edad de persona 3 es menor que la edad de persona 2, muestra por pantalla: ¡Seguimos en el
cole!
• Si la edad de persona1 y la edad de persona2 es la misma: ¡Tenéis la misma edad!
El ejercicio se puede hacer anidado, si solo queremos que pase por una condicion
o sin anidar si queremos que pase por todas, se pueden dar más de un mensaje.*/
		var edad1= parseInt(prompt("Introduce tu edad: "));
		var edad2= parseInt(prompt("Introduce otra edad: "));
		var edad3= parseInt(prompt("Introduce otra edad: "));
		if (edad1>edad2){
			alert ("Que mayor eres");
		}
		if (edad1<edad2){
			alert ("¡uiiiii!");
		}
		if (edad2>edad3){
			alert ("¡Con 5 años todavia hay que ir al cole!");
		}
		if (edad3<edad2){
			alert ("Seguimos en el cole!!");
		}
		if (edad1==edad2){
			alert ("¡Teneis la misma edad!!");
		}

/*8. Implementa un pequeño programa que lea un número por teclado. Si ese número es menor que 0, 
saldrá del programa y mostrará por pantalla un mensaje de error “Error, número negativo”.
Si es mayor que 0 debe de mostrar la tabla de multiplicar de ese número.*/
		var num8= parseInt(prompt("Introduce un numero: "));
		if (num8<0){
			alert ("Error, numero negativo");
		}else{
			alert(num8+ " * 0 = " + (num8*0) +"\n"
				 +num8+ " * 1 = " + (num8*1) +"\n"
				 +num8+ " * 2 = " + (num8*2) +"\n"
				 +num8+ " * 3 = " + (num8*3) +"\n"
				 +num8+ " * 4 = " + (num8*4) +"\n"
				 +num8+ " * 5 = " + (num8*5) +"\n"
				 +num8+ " * 6 = " + (num8*6) +"\n"
				 +num8+ " * 7 = " + (num8*7) +"\n"
				 +num8+ " * 8 = " + (num8*8) +"\n"
				 +num8+ " * 9 = " + (num8*9) +"\n"
				 +num8+ " * 10 = " + (num8*10));
		}

/*9. Diseña un script que pida por teclado tres números. Si el primer número es negativo, debe de mostrar
por pantalla el producto de los tres y si no lo es, mostrará por pantalla la suma.*/
		var num91= parseInt(prompt("Introduce un numero: "));
		var num92= parseInt(prompt("Introduce otro numero: "));
		var num93= parseInt(prompt("Introduce otro numero: "));
		if (num91<0){
			alert(num91*num92*num93);
		}
		else{
			alert(num91+num92+num93);
		}

/*10. Crea un script teniendo en cuenta lo siguiente:
• Pídele al usuario un número y comprueba si ese valor es mayor que 100.
• Pídele al usuario otro número y comprueba si ese número es menor que 50.
• Pídele al usuario otro número y comprueba si ese número es igual a 10.
• Muestra al final de todo los 3 números introducidos separados por comas en un alert().*/
		var num101= parseInt(prompt("Introduce un numero: "));
		if(num101>100){		
		}
		var num102= parseInt(prompt("Introduce otro numero: "));
		if(num102<50){		
		}
		var num103= parseInt(prompt("Introduce otro numero: "));
		if(num103==10){		
		}
		alert (num101+ ", " +num102+ ", " +num3);
		

		


