/* Autor: Sonia Anton Llanes */
/* Fecha: 06/10/2020 */
/* Practica 04 - Sentencias condicionales SWITCH */

/* 1. Pide al usuario que introduzca por pantalla un número que corresponda al número de día de la
semana (1 al 7). Si introduce un número fuera de ese rango, debe de aparecer un error y salirse del
programa. Si introduce el número 1, debe de mostrar por pantalla “Lunes” y así sucesivamente. */
		var dia= parseInt(prompt("Introduce un dia de la semana en numero (1-7): "));
		if (isNaN(dia)){
			alert ("ERROR. No ha introducido un número. ");
		}
		else{
			if (dia<1 || dia>7){
				alert ("ERROR: Fuera de rango.");
			}
			else{
				switch (dia){
					case 1: alert ("Lunes");
							break;
					case 2: alert ("Martes");
							break;
					case 3: alert ("Miercoles");
							break;
					case 4: alert ("Jueves");
							break;
					case 5: alert ("Viernes");
							break;
					case 6: alert ("Sabado");
							break;
					case 7: alert ("Domingo");
							break;
				}
			}
		}

/* 2. Pide al usuario que introduzca por pantalla un carácter, si tu script reconoce ese carácter, muestra
por pantalla el carácter que ha reconocido. Tu script debe de reconocer vocales mayúsculas y
minúsculas (sin tilde). */
		var caracter= prompt("Introduce un caracter: ");	
		switch (caracter){
			case "A": alert ("A");
					break;
			case "E": alert ("E");
					break;
			case "I": alert ("I");
					break;
			case "O": alert ("O");
					break;
			case "U": alert ("U");
					break;
			case "a": alert ("a");
					break;
			case "e": alert ("e");
					break;
			case "i": alert ("i");
					break;
			case "o": alert ("o");
					break;
			case "u": alert ("u");
					break;
		}
	
/*3. Crea un script sencillo que pida al usuario su edad y dependiendo de la edad que introduzca, salga
un mensaje por pantalla u otro. Controla que lo que introduce el usuario es un número y si
introduce algo que no es un número, muestra un error por pantalla.
• Si introduce una edad comprendida entre 0 y 12 años -> Muestra por pantalla “Educación
primaria”
• Si introduce una edad comprendida entre 13 y 18 años -> Muestra por pantalla “Educación
secundaria”
• Si introduce una edad comprendida entre 18 y 65 años -> “Edad de vida laboral”
• Si introduce por pantalla un edad superior a 65, muestra por pantalla -> “Jubilación”.*/
		var edad= parseInt(prompt("Introduce tu edad: "));
		if (isNaN(edad)){
			alert ("ERROR. No ha introducido un número. ");
		}
		else{
			switch (true){
				case (edad>0 && edad<=12): alert ("Educacion Primaria");
						break;
				case (edad>12 && edad<=18): alert ("Educacion Secundaria");
						break;
				case (edad>18 && edad<=65): alert ("Edad de Vida Laboral");
						break;
				case (edad>65): alert ("Jubilacion");
						break;
			}
		}

/*4. Un usuario compra en una tienda online productos para mascotas, como respuesta de fidelización a
la hora de pagar tienen la opción de aplicar un código de descuento que dependiendo de que
código sea se aplica un descuento u otro.
Debes de mostrarle información por pantalla de los productos que tiene la tienda (3 productos con
sus correspondientes precios con IVA) y luego aplicar el descuento en el caso de que exista.
Estos son los códigos de descuento aplicables
• HOLA1: descuento del 15% del total de productos que ha comprado
• BIENVENIDA1: descuento el 12% del total de productos que ha comprado.
• AFILIADO: descuento del 20% del total de productos que ha comprado*/
		alert("TIENDA ONLINE DE COMIDA PARA MASCOTAS");
		var preciocperro= 25;
		var preciocpeces= 12;
		var preciocpajaro= 16;
		var opcion= parseInt(prompt("Elige la comida de tu mascota(1-3): \n 1. Comida para perros. Precio 25 \n 2. Comida para peces. Precio 12 \n 3. Comida para pajaros. Precio 16"));
		if (opcion==1 || opcion==2 || opcion==3){
			var dto= prompt("Indica si tienes algun descuento: ");
			if ((dto=="HOLA1") || (dto=="BIENVENIDA1") || (dto=="AFILIADO")){
				if(opcion==1){
					alert("hola");
					switch (dto){
						case "HOLA1": 
							    alert ("Precio con descuento: " + (preciocperro*0.85));
								break;
						case "BIENVENIDA1": alert ("Precio con descuento: " + (preciocperro*0.88));
								break;
						case "AFILIADO": alert ("Precio con descuento: " + (preciocperro*0.80));
								break;
					}
				}
				if(opcion==2){
					switch (dto){
						case "HOLA1": alert ("Precio con descuento: " + (preciocpeces*0.85));
								break;
						case "BIENVENIDA1": alert ("Precio con descuento: " + (preciocpeces*0.88));
								break;
						case "AFILIADO": alert ("Precio con descuento: " + (preciocpeces*0.80));
								break;
					}
				}
				if(opcion==3){
					switch (dto){
						case "HOLA1": alert ("Precio con descuento: " + (preciocpajaro*0.85));
								break;
						case "BIENVENIDA1": alert ("Precio con descuento: " + (preciocpajaro*0.88));
								break;
						case "AFILIADO": alert ("Precio con descuento: " + (preciocpajaro*0.80));
								break;
					}
				}
			}
			else{
				switch (opcion){
					case 1: alert ("Precio sin descuento: " + (preciocpajaro));
							break;
					case 2: alert ("Precio sin descuento: " + (preciocpajaro));
							break;
					case 3: alert ("Precio sin descuento: " + (preciocpajaro));
							break;
				}
			}
		}
		else{
			alert ("ERROR. No ha introducido una opcion correcta. ");
		}

