/* Autor: Sonia Anton Llanes */
/* Fecha: 13/10/2020 */
/* Practica 05 - Sentencias condicionales WHILE */

/* 1. Escribe un script que pida dos números enteros al usuario de manera que siga pidiendo números
mientras el segundo número no sea mayor que el primero. El programa terminará mostrando por
pantalla los dos números. */
		var num1= parseInt(prompt("Introduce un numero: "));
		var num2= parseInt(prompt("Introduce otro numero: "));
		while (num2<num1){
			num2= parseInt(prompt("Introduce otro numero: "));
		}
		alert ("Los números introducidos son: " +num1+ " y " +num2);

/* 2. Escriba un script que pida la cantidad de números positivos que se tienen que escribir y a
continuación pida números hasta que se haya escrito la cantidad de números positivos que se
indicó al principio. */
		var cant= parseInt(prompt("Cantidad de números a introducir: "));
		var num1= parseInt(prompt("Introduce un numero: "));
		var veces = 1;
		while (veces!=cant){
			num2= parseInt(prompt("Introduce otro numero: "));
			veces++;
		}
		
/* 3. Realiza un script que muestre los primeros 100 números de forma inversa, es decir, del 100 al 1 */
		// para que no sea tan largo lo he hecho del 10 al 0
		var num = 10;
		while(num!=0){
			alert (num);
			num--;
		}
		
/* 4. Realiza un script que muestre la suma de los números impares del 1 al 100 */
		var num = 1;
		var suma = num;
		while (num<100){
			num++;
			if (num%2!=0){
				suma+=num;
			}
		}
		alert (suma);

/* 5. Escriba un script que pida números mientras no se escriba un número negativo. El programa
terminará escribiendo la suma de los números introducidos. */
		var num= parseInt(prompt("Introduce un numero: "));
		var suma = 0;
		while (num>0){
			suma+= num;
			num= parseInt(prompt("Introduce otro numero: "));
			
		}
		alert (suma);
		
/* 6. Escriba un script que pida primero dos números enteros (mínimo y máximo) y que después pida
números enteros situados entre ellos. El script terminará cuando se escriba un número que no esté
comprendido entre los dos valores iniciales. El script finalizará mostrando la cantidad de números
que se han escritos. */
		var nummin= parseInt(prompt("Introduce un numero mínimo: "));
		var nummax= parseInt(prompt("Introduce un numero máximo: "));
		var num= parseInt(prompt("Introduce un numero entre ellos: "));
		var ac= 0;
		while (num>nummin && num<nummax){
			ac++;
			num= parseInt(prompt("Introduce otro numero entre ellos: "));	
		}
		alert (ac);
		
/* 7. Crear un script que permita al usuario ingresar títulos de libros por teclado hasta que el usuario
introduzca la palabra “salir” de cualquiera de sus maneras. Finalmente se tiene que mostrar por
pantalla la lista de libros que han ido introduciendo uno debajo de otro y numerados (con un
número delante).  */
		var titulo= prompt("Introduce el titulo de un libro: ");
		var titulos= "Libros: ";
		while (titulo!="salir"){
			titulos= titulos +", "+ titulo;
			titulo= prompt("Introduce el titulo de otro libro: ");
		}
		alert (titulos);



