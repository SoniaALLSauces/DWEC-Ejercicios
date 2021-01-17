/*1. Una persona trabaja 40 horas a la semana y el precio hora que le paga su empresa es de 15€.
Calcula el importe total que recibirá al mes y muéstralo por pantalla.
Luego pregunta al usuario si ese mes existe algún ingreso extra y si es que “si”, muestra por pantalla el
importe anterior + un 15%, sino muestra por pantalla. “No hay ingresos extras”.;*/
		var hora= 40;
		var precio= 15;
		var totalmes= (hora*4)*precio;
		alert(totalmes + " €/mes");
		var extra= prompt("Existe algún ingreso extra?");
		extra=="si" || extra=="Si" || extra=="SI"
			? alert("Total " + totalmes*1.15 + " €/mes") : alert("No hay ingresos extras");
		
/*2. Pide al usuario que introduzca 5 números impares y comprueba que los números que ha introducido
cumplen esa condición. Muestra por pantalla si algún número no la cumple.*/
		var num1= prompt("Introduce un numero impar");
		var num2= prompt("Introduce otro numero impar");
		var num3= prompt("Introduce otro numero impar");
		var num4= prompt("Introduce otro numero impar");
		var num5= prompt("Introduce otro numero impar");
		num1%2!=0 && num2%2!=0 && num3%2!=0 && num4%2!=0 && num5%2!=0 
			? alert("Todos IMPARES") : alert("ERROR: no todos los numeros cumplen la condicion de impar");
		
		
/*3. Pide al usuario un tiempo en minutos y calculo los días, horas y minutos que corresponden a esos minutos.
a. Ejemplo: El usuario introduce el número: 1440
b. Muestras por pantalla: 1440 minutos corresponden a 24 horas, 0 minutos y 0 segundos.*/
		var num= parseInt(prompt("Introduce un tiempo en minutos"));
		var dias=parseInt(num/1440);
		var horas=parseInt((num%1440)/60);
		var min=horas%60;
		alert(num +"="+ dias +":"+ horas +":"+ min);
		alert(num +" minutos corresponden a "+ dias +" dias, "+ horas +" horas y "+ min +" minutos.");
		
/*4. Crea un script que permita saber la cantidad total que se recauda con las donaciones de 5 personas de
una asociación utilizando operadores de asignación. Debes de preguntar la cantidad e ir “acumulando”
los importes. Muestra el resultado final por pantalla. */
		var total= 0;
		var pers1= parseInt(prompt("¿Cual ha sido tu donacion?"));
		total+=pers1;
		var pers2= parseInt(prompt("¿Cual ha sido tu donacion?"));
		total+=pers2;
		var pers3= parseInt(prompt("¿Cual ha sido tu donacion?"));
		total+=pers3;
		var pers4= parseInt(prompt("¿Cual ha sido tu donacion?"));
		total+=pers4;
		var pers5= parseInt(prompt("¿Cual ha sido tu donacion?"));
		total+=pers5;
		alert("Total donaciones: " + total);
		
/*5. Pide al usuario dos números y muestra por pantalla:
a. El resultado de multiplicar ambos números
b. El resultado de dividir el primer número entre el segundo
c. El resultado de restar el primer número menos el segundo
d. Muestra por pantalla la suma de los tres resultados anteriores.*/
		var num1= parseInt(prompt("Escribe un numero: "));
		var num2= parseInt(prompt("Escribe otro numero: "));
		var mult=num1*num2;
		var div=num1/num2;
		var resta=num1-num2;
		alert("a. El resultado de multiplicar ambos numeros es: " + mult);
		alert("b. El resultado de ñdividir el primer numero entre el segundo es: " + div);
		alert("c. El resultado de restar el primer numero menos el segundo es: " + resta);
		alert("d. La suma de los tres resultados anteriores es: " + (mult+div+resta));
		
/*6. Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual.
Diseñar una aplicación que muestre la cantidad de alumnos en porcentaje.*/
		var ninos= parseInt(prompt("Introduce numero de niños del curso: "));
		var ninas= parseInt(prompt("Introduce numero de niñas del curso: "));
		var total=ninos+ninas;
		alert("Porcentaje de niños: " + parseInt((ninos*100/total)) + " %");
		alert("Porcentaje de niñas: " + parseInt((ninas*100/total)) + " %");
		
/*7. Pide al usuario que introduzca cuatro números y haz comparaciones para comprobar cual es el mayor
de todos. Muestra éste por pantalla*/	
		var num1= parseInt(prompt("Introduce un numero:"));
		var num2= parseInt(prompt("Introduce otro numero:"));
		var num3= parseInt(prompt("Introduce otro numero:"));
		var num4= parseInt(prompt("Introduce otro numero:"));
		var mayor=num1;
		num2>mayor ? mayor=num2 : mayor=mayor;
		num3>mayor ? mayor=num3 : mayor=mayor;
		num4>mayor ? mayor=num4 : mayor=mayor;
		alert ("El número mayor es: " + mayor);

/*8. Programa una aplicación que halle el área de un circulo, pídele al usuario los datos que necesites.*/
		var rad= parseInt(prompt("Introduce el radio del circulo: "));
		var ar=rad*rad*3.1416;
		alert("El área de este círculo es: " + ar);

/*9. Pide al usuario dos números comprendidos entre 0 y 50. 
Comprueba que los dos números están dentro de ese rango. 
Si no están en ese rango, muestra por pantalla error, sino muestra la suma de ambos números.*/
		var num1= parseInt(prompt("Introduce un numero (0-50): "));
		var num2= parseInt(prompt("Introduce otro numero (0-50): "));
		num1>0 && num1<50 && num2>0 && num2<50 ? alert("La suma de los dos numeros es: " + (num1+num2))
			: alert("ERROR: los numeros no estan dentro del rango 0-50");

/*10. Pide al usuario una fecha concreta (día, mes y año) 
y muestra por pantalla la información recibida de esta forma. 
Ejemplo:El día 5 de octubre de 2020 corresponde a un año no bisiesto*/
		var dia= parseInt(prompt("Introduce un dia: "));
		var mes= prompt("Introduce un mes (en letra minuscula): ");
		mes=="enero" || mes=="febrero" || mes=="marzo" || mes=="abril" || mes=="mayo" || mes=="junio" || 
		mes=="julio" || mes=="agosto" || mes=="septiembre" || mes=="octubre" || mes=="noviembre" || mes=="diciembre"
			? mes=mes : mes=prompt("ERROR: Introduce un mes en letra minuscula: ");
		var ano= parseInt(prompt("Introduce un año: "));
		(ano%4==0 && ano%100!=0) || (ano%400==0) ? alert("El dia " +dia+ " de " +mes+ " de " +ano+ " corresponde a un año bisiesto.")
			: alert("El dia " +dia+ " de " +mes+ " de " +ano+ " corresponde a un año NO bisiesto.");


			
