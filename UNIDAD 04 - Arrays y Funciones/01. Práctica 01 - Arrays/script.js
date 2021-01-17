/* Autor: Sonia Anton Llanes */
/* Fecha: 03/11/2020 */
/* Practica 01 - Arrays */


/* Crea un script que contenga información de profesores, asignaturas y número de alumnos de los ciclos de
Informática del IES Los Sauces de Benavente. Debes de utilizar un array para profesores, otro para
asignaturas y otro para alumnos y gestionarlos conjuntamente.
El script debe de mostrar por pantalla qué asignaturas imparte cada profesor y cuántos alumnos tiene por
aula.
Ejemplo:
• Leticia imparte DWEC y tiene 20 alumnos en clase
• Amor imparte Entornos y tiene 20 alumnos en clase.
Debes de tener en cuenta:
• 1 profesor imparte 1 asignatura.
• Para mantener la lógica del ejercicio, es importante que los arrays tengan la misma longitud. Haz
todas las comprobaciones oportunas. */
		var ltud= 5; //variable que define la longitud de los arrays
	//Declaro los tres Arrays:
		var profesores= new Array(ltud);
		var asignaturas= new Array(ltud);
		var alumnos= new Array(ltud);
	//Relleno los Arrays:
		profesores= new Array('Heraclio','Leticia','Amor','Antonio','Eduardo');
		asignaturas= new Array('DWES','DWEC','DAW','DIW','EIE');
		alumnos= new Array('14','14','14','10','6');
	//Mostramos los Arrays:
		var cadena="DATOS DEL AULA DAW2: \n";
		for (var i=0; i<ltud; i++){
			cadena+= profesores[i] +" imparte "+ asignaturas[i] +" y tiene "+ alumnos[i] +" alumnos en clase \n";
		}
		alert (cadena);