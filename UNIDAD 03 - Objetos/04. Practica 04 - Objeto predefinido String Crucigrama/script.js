/* Autor: Sonia Anton Llanes */
/* Fecha: 29/10/2020 */
/* Practica 04 - Objeto predefinido String CRUCIGRAMA */

/* PRÁCTICA 04 – Crucigrama horizontal
Crea un script que permita colocar palabras en un crucigrama de forma horizontal.
De esta manera, los huecos a rellenar son los que aparecen en el siguiente esquema con fondo blanco y los
huecos que aparecen oscuros no se pueden rellenar con ninguna letra. Las filas están identificadas por un
número. Hay 11 filas.
• En la primera fila, se podrá colocar una palabra de dos letras, una por celda. Ejemplo: YO
• En la segunda fila se podrá colocar una palabra de dos letras, una por celda. Ejemplo: EL
• En la tercera fila se podrá colocar un palabra de cuatro letras, una por celda. Ejemplo: LUNA
• Y así sucesivamente.
En total debes de colocar 11 palabras de forma horizontal y de izquierda a derecha. Las palabras
resultantes en vertical (arriba abajo o abajo arriba) “dan igual”. Tolas las letras que coloques deben de
estar en mayúsculas.
Para representarlo visualmente debes de utilizar algún recurso gráfico (el que elijas) para mostrar la zona
oscura, teniendo en cuenta los espacios que ocupa en función de la fila. Es decir, en la primera fila, hay dos
espacios libres del mismo tamaño (una palabra de dos letras), pero hay tres espacios oscuros del mismo
tamaño que no deben de llevar nunca ninguna letra. Así sucesivamente con el resto de filas
Finalmente se debe de mostrar algo parecido a esto:
01 Y O * * *
02 * * * E L
03 * L U N A
04 * * M A R
05 Y * * * *
06 * M A L O
07 * * D O S
08 L A * * *
09 * * * T U
10 M I A * *
11 O * * * *
Ejercicio 1: Crea el script que pida al usuario las palabras que quieres introducir en el crucigrama
marcándole tu las pautas. Es decir, pídele al usuario una palabra de dos caracteres, una palabra de cuatro y
así sucesivamente hasta las que necesites. Sería recomendable validar la entrada.
Nota: Puedes utilizar arrays pero sería MUY RECOMENDABLE que no los usaras J */

		var crucigrama= "CRUCIGRAMA \n \n"; //variable donde se va a guardar el crucigrama para mostrarlo
		var palabra;   //variable para guardar cada palabra del crucigrama
		alert ("VAMOS A RELLENAR UN CRUCIGRAMA de 11 palabras");
		
		for (var i=1; i<12; i++){
			switch (i){ //switch para pedir las palabras segun el número de caracteres
				case 5:
				case 11:
					palabra= prompt(i+ ". Introduce una palabra con un caracter");
						while (palabra.length<1 || palabra.length>1){
							palabra= prompt(i+ ". ERROR. Introduce una palabra con un caracter");
						}
					palabra= palabra.toUpperCase();
					break;
				case 1:
				case 2:
				case 8:
				case 9:
					palabra= prompt(i+ ". Introduce una palabra con dos caracteres");
						while (palabra.length<2 || palabra.length>2){
							palabra= prompt(i+ ". ERROR. Introduce una palabra con dos caracteres");
						}
					palabra= palabra.toUpperCase();
					break;
				case 4:
				case 7:
				case 10:
					palabra= prompt(i+ ". Introduce una palabra con tres caracteres");
						while (palabra.length<3 || palabra.length>3){
							palabra= prompt(i+ ". ERROR. Introduce una palabra con tres caracteres");
						}
					palabra= palabra.toUpperCase();
					break;
				case 3:
				case 6: 
					palabra= prompt(i+ ". Introduce una palabra con cuatro caracteres");
						while (palabra.length<4 || palabra.length>4){
							palabra= prompt(i+ ". ERROR. Introduce una palabra con cuatro caracteres");
						}
					palabra= palabra.toUpperCase();
					break;
			}
			
			switch (i) {
				case 1:
				case 8:
					crucigrama+= i +".  " +palabra.charAt(0)+ "  " +palabra.charAt(1)+ "  *  *  * \n";
					break;
				case 2:
				case 9:
					crucigrama+= i +".  *  *  *  " +palabra.charAt(0)+ "  " +palabra.charAt(1)+ "\n";
					break;
				case 3:
				case 6:
					crucigrama+= i +".  *  " +palabra.charAt(0)+ "  " +palabra.charAt(1)+ "  " +palabra.charAt(2)+ "  " +palabra.charAt(3)+ "\n";
					break;
				case 4:
				case 7:
					crucigrama+= i +".  *  *  " +palabra.charAt(0)+ "  " +palabra.charAt(1)+ "  " +palabra.charAt(2)+ "\n";
					break;
				case 5:
				case 11:
					crucigrama+= i +".  " +palabra.charAt(0)+ "  *  *  *  * \n";
					break;
				case 10:
					crucigrama+= i +".  " +palabra.charAt(0)+ "  " +palabra.charAt(1)+ "  " +palabra.charAt(2)+ "  *  * \n";
					break;
			}
			
		}
		
		
		
		alert (crucigrama);
		
		
		
		