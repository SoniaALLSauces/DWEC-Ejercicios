/* Autor: Sonia Anton Llanes */
/* Fecha: 06/10/2020 */
/* Practica Extra D - Sentencias condicionales IF */

/*1. Imagina que eres el dueño de una tienda y en el mes de febrero aplicas un descuento de un 15% a todos
los clientes que compren ese mes. Crea un pequeño programa en JavaScript que, dado un mes y un
importe, calcule la cantidad que le debes de cobrar al cliente dependiendo del mes en que estemos.*/
		var mes= prompt("Introduce un mes (en letra): ");
		var imp= prompt("Introduce el importe de la compra: ");
		if (mes=="febrero" || mes=="Febrero" || mes=="FEBRERO"){
			alert ("El importe a cobrar es " + (imp*0.85));
		}
		else{
			alert ("El importe a cobrar es " + imp);
		}

/*2. Crea un algoritmo que dado un número entero, se visualice por pantalla si es par o impar. En caso de ser
0, se debe visualizar “el número no es par ni impar”. */
		var num2= parseInt(prompt("Introduce un numero: "));
		if (num2==0){
			alert ("El numero no es ni par ni impar");
		}
		else if (num2%2==0){
			alert ("El numero " +num2+ " es par");
		}
		else{
			alert ("El numero " +num2+ " es impar");
		}

/*3. Escribe un script que informe al cliente de una empresa de helados, cuánto le va a costar el helado que
quiere en función del topping que elija teniendo en cuenta lo siguiente:
• El helado sin topping cuesta 1.90€.
• El topping de Oreo cuesta 1€.
• El topping de KitKat cuesta 1.50€.
• El topping de brownie cuesta 1€.
• El topping de lacasitos cuesta 0.95€.
• En caso de no disponer del topping solicitado por el usuario el script escribirá por pantalla “No
disponemos de ese topping”.
Finalmente, el script debe mostrar por pantalla el precio del helado con el topping seleccionado o ninguno
y sólo puede elegir 1 topping por helado.*/
		alert ("Heladeria. ¿Con o sin topping?");
		var topping= prompt("¿Que topping quieres (oreo, kitkat, brownie o lacasitos)?");
		if (topping=="oreo"){
			alert ("Precio del helado con oreo es " + (1.90+1) + "€");
		}
		else if (topping=="kitkat"){
			alert ("Precio del helado con kitkat es " + (1.90+1.50) + "€");
		}
		else if (topping=="brownie"){
			alert ("Precio del helado con brownie es " + (1.90+1) + "€");
		}
		else if (topping=="lacasitos"){
			alert ("Precio del helado con lacasitos es " + (1.90+0.95) + "€");
		}
		else{
			alert ("Precio del helado sin topping es " + (1.90) + "€");
		}

/*4. Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y realice las
siguientes operaciones:
• Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo
grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es
para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe
mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
• Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a
1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor
para esta rueda es inferior al recomendado”*/
		var diametro= parseFloat(prompt("Introduce el diámetro de la rueda (en metros: "));
		var grosor= parseFloat(prompt("Introduce el grosor de la rueda (en metros): "));
		if (diametro>1.4){
			alert ("La rueda es para un vehículo grande");
		}
		else if (diametro>0.8){
			alert ("La rueda es para un vehículo mediano");
		}
		else {
			alert ("La rueda es para un vehículo pequeño");
		}
		
		if ((diametro>1.4 && grosor<0.4) || (diametro<=1.4 && diametro>0.8 && grosor< 0.25)){
			alert ("El grosor para esta rueda es inferior al recomendado");
		}

/*5. Crea un script que lea las notas de tres alumnos y calcule la media obtenida entre todos y muestra por
pantalla quién ha aprobado y quién no (nota>=5)*/
		var nota1= parseFloat(prompt("Introduce la nota del alumno 1: "));
		var nota2= parseFloat(prompt("Introduce la nota del alumno 2: "));
		var nota3= parseFloat(prompt("Introduce la nota del alumno 3: "));
		var media= (nota1+nota2+nota3)/3;
		if (nota1>=5){
			var alumno1="Alumno1";
		}
		if (nota2>=5){
			var alumno2="Alumno2";
		}
		if (nota3>=5){
			var alumno3="Alumno3";
		}
		alert ("Los alumnos que han aprobado son: " +alumno1+ ", " +alumno2+ ", " +alumno3);

/*6. Crea un script de una tienda de noches, dependiendo de qué coche compre el cliente hay unos
descuentos u otros.
  • Si el cliente compra un twingo el descuento será de un 5%. Si el coche es un Renault el
descuento es un 10%. Twingo es un modelo de Renault
  • Si el cliente compra un altea el descuento será de un 6%. Si el coche es un Seat el descuento
será un 12%. Altea es un modelo de Seat
Nota: Si una persona compra un twingo, se le aplicará un 15% de descuento.*/
		var coche= prompt("¿Que coche van comprar (twingo, renault, altea, seat)?");
		var precio= parseInt(prompt("Precio del vehículo: "));
		if (coche=="renault"){
			alert ("Descuento aplicado 10%: " + (precio*0.1));
			if (coche=="twingo"){
				alert ("Tiene un descuento extra del 5%. Descuento aplicado 15%: " + (precio*0.15));
			}
		}
		if (coche=="seat"){
			alert ("Descuento aplicado 12%: " + (precio*0.12));
			if (coche=="altea"){
				alert ("Tiene un descuento extra del 6%. Descuento aplicado 18%: " + (precio*0.18));
			}
		}

