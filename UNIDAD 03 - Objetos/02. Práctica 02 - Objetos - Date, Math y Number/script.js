/* Autor: Sonia Anton Llanes */
/* Fecha: 27/10/2020 */
/* Practica 02 - Objeto predefinido Date, Math y Number */


/* Opción 1: Se tiene que generar un número aleatorio entre 1 y 500 y comprobar si el número generado
es capicúa. Debe aparecer por pantalla el número aleatorio que se ha generado y si es capicúa o no. */
		alert ("1. NUMERO ALEATORIO, SALDRÁ O NO CAPICUA");
		var numal= Math.trunc(Math.random()*500+1);
		//convierto a String y se recorre con un array texto[i], numal[i]
		numal= numal.toString();
		var num1= numal[0];
		var num2= numal[1];
		var num3= numal[2];
		
		var capicua= false;  //variable para saber si es o no capicua
		if (numal>99){
			if(num1==num3){
				capicua= true;
			}
		} else if(numal>9){
			if(num1==num2){
				capicua= true;
			}
		}
		
		if (capicua){
			alert ("El número generado es " +numal+ " Y ES CAPICUA");
		}else{
			alert ("El número generado es " +numal+ " pero NO es capicua");
		}

/* Opción 2: Pídele al usuario que introduzca un número de 4 cifras, comprueba que ese número es
positivo y no tiene decimales. Si introduce un valor no válido, pídele otra vez el número hasta que
introduzca uno válido. Luego comprueba si el número introducido es capicúa o no, si lo es, muéstralo
por pantalla, sino lo es, pídele otro y vuelve a comprobar que es un valor correcto y que es capicúa.
El script finaliza cuando ha introducido dos números capicúas con formato adecuado. */
		alert ("2. INTRODUCIR DOS NUMEROS CAPICUA");
		for (var i=1; i<=2; i++){ //for para que repita solicitar numero capicua 2 veces
			var num= prompt("Introduce " +i+ "º número de 4 cifras: ");
			while (isNaN(num) || num<999 || num>10000){
				num= prompt("ERROR. Introduce un número de 4 cifras (1000-9999): ");
			}
			
			num= num.toString();  //convierto a String para poder comparar extrayendo cada numero con array
			var capicua= false;  //variable para saber si es o no capicua
			if(num[0]==num[3] && num[1]==num[2]){
				capicua= true;
			}
			
			while(!capicua){  //mientras no sea capicua se retipe todo el proceso anterior
				alert ("El número generado es " +num+ " pero NO es capicua");
				num= prompt("Introduce un número capicua de 4 cifras: ");
				while (isNaN(num) || num<999 || num>10000){
					num= prompt("ERROR. Introduce un número de 4 cifras (1000-9999): ");
				}
				num= num.toString();
				if(num[0]==num[3] && num[1]==num[2]){
					capicua= true;
				}
			}
			
			alert ("El numero introducido es " +num+ " Y ES CAPICUA");
		}

/* Opción 3: Pídele al usuario que introduzca un día y un mes de lo que queda de año (teniendo en
cuenta que se admiten fechas del 1 de noviembre al 31 de diciembre de 2020). Luego pídele que
inserte una cantidad en euros asignado a cada día, teniendo en cuenta que máximo podrá insertar 7
cantidades/7días. Puede introducir cantidades enteras o decimales.
Debes de sumar todas las cantidades que ha introducido y redondear la cantidad obtenida.
Haz todas las comprobaciones oportunas para cerciorarte que introduce datos válidos acorde al
enunciado y ten en cuenta que no todos los meses tienen el mismo número de días. */
		alert ("3. SUMA DE LOS GASTOS DEL DÍA INDICADO");
		var dia= parseInt(prompt("Introduzca un dia del mes (1-31): "));
			while(isNaN(dia) || (dia<1 || dia>31)){  //controlo que solo introduzca numeros del 1 al 31:
				dia= parseInt(prompt("ERROR. Introduzca un dia del mes correcto (1-31): "));
			}
		var mes= parseInt(prompt("Introduzca el mes noviembre o diciembre en numero (11-12): "));
			while(isNaN(mes) || (mes<11 || mes>12)){  //controlo que solo introduzca numeros del 1 al 12:
				while (isNaN(mes)){
					mes= parseInt(prompt("ERROR. Introduzca el mes en numero (11-12) : "));
				}
				while (mes<11 || mes>12){
					mes= parseInt(prompt("ERROR. Introduzca solo noviembre o diciembre (11-12) : "));
				}
			}
		if (mes==11 && dia==31){ //controlo que no existe el dia 31 de noviembre
			dia= parseInt(prompt("ERROR. Noviembre sólo tiene 30 días. \n Introduzca un dia dentro de rango (1-30): "));
			while(isNaN(dia) || (dia<1 || dia>30)){
				dia= parseInt(prompt("ERROR. Introduzca un dia dentro de rango (1-30): "));
			}
		}
		
		mes-=1;	
		var fecha= new Date(2020, mes, dia);  // construyo objteto Date con la fecha solicitada
		var mesletra;
		switch (fecha.getMonth()){  //switch para que me muestre el mes en letra
			case 10:
				mesletra= "noviembre";
				break;
			case 11:
				mesletra= "diciembre";
				break;
		}
		
		alert ("Gastos del día indicado " +fecha.getDate() +" de " +mesletra+ " de 2020");
		var cantidad= prompt("¿Cuantos gastos has tenido este día (máximo 7)??");  //solicito cuantas cantidades voy a sumar
			while (isNaN(cantidad) || cantidad<1 || cantidad>7){
				cantidad= prompt("ERROR al introducir.¿Cuantos gastos has tenido este día (máximo 7)??");
			}
			
		var suma= 0;  //variable para sumar las cantidades introducidas
		for (var i=1; i<=cantidad; i++){  //mediante un for introduzco las cantidades las formateo y las sumo
			var gasto= parseFloat(prompt("Introduce la " +i+ "º cantidad"));
				while(isNaN(gasto)){
					gasto= parseFloat(prompt("ERROR al introducir letras. Introduce la " +i+ "º cantidad"));
				}
			suma+= gasto;
		}
	
		alert ("Los gastos del día " +fecha.getDate() +" de " +mesletra+ " redondeando son " +Math.trunc(suma)+ "€");

/* Opción 4: Pídele al usuario que introduzca 5 números decimales y comprueba que introduce números
de este tipo. Después extrae la parte entera de todos los números decimales que ha introducido,
súmalas y muestra por pantalla el resultado de la suma de estos números. */
		alert ("4. SUMA CINCO NUMEROS DECIMALES");
		//Creo las variables que necesito en el for:
		var dec;
		var esdecimal;
		var entero;
		var suma= 0;
		for (var i=1; i<=5; i++){  //bucle para solicitar 5 numeros y sumarlos
			dec= parseFloat(prompt("Introduce el " +i+ "º número decimal"));
			esdecimal= dec-(Math.trunc(dec));
				while(isNaN(dec) || esdecimal==0){
					dec= parseFloat(prompt("ERROR. Introduce un número con decimales"));
					esdecimal= dec-(Math.trunc(dec));
				}
			entero= Math.trunc(dec);
			suma+= entero;
		}
		alert ("La suma de los números introducidos es " +suma);

/* Opción 5: Muestra los números primos que hay entre 1 y 100, ambos incluidos en un alert de forma
conjunta */
		alert ("5. PRIMOS ENTRE 1 Y 100");
		var cadena= "";  //variable para guardar los números primos
		for (var i=2; i<=100; i++){
			var primo= true;			
			for (var div=2; div<i/2; div++){
				if (primo){
					if(i%div==0){
						primo=false;
					}
				}
			}
			if (primo){
				cadena+= " - " +i;
			}
		}
		
		alert ("Los numeros primos entre 1 y 100 son" +cadena);





