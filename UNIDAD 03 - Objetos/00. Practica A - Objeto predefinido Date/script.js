/* Autor: Sonia Anton Llanes */
/* Fecha: 21/10/2020 */
/* Practica A - Objeto predefinido Date */

/* 1. Crea un script que muestre por pantalla todas las películas y el horario en el que se proyectan en un
cine en un mes en concreto, sabiendo que las películas se estrenan los viernes en la sesión de las
20horas. Las sesiones del fin de semana son:
• Viernes: 20h y 23h
• Sábado: 17h, 20h y 23h
• Domingo: 17h y 20h
Todas las películas la primera y segunda semana en cartelera, se emiten en todas las sesiones de viernes a
domingo. El resto de semanas, en las sesiones de las 20h y 23h los fines de semana.
La cartelera debe tener al menos 4 películas: Película 1, Película 2, Película 3 y Películas 4
No hay que tener en cuenta sesiones del resto de días de la semana (lunes a jueves)
Todos los estrenos se hacen el primer viernes de cada mes. */
		/*//Variables de las películas
		var pel1="Pelicula 1";
		var pel2="Pelicula 2";
		var pel3="Pelicula 3";
		var pel4="Pelicula 4";*/
		var mes= parseInt(prompt("PELICULAS DEL MES: \n Introduce el mes que quieres ver (1-12): "));
			//controlo que solo introduzca numeros del 1 al 12:
			while(isNaN(mes) || (mes<1 || mes>12)){
				while (isNaN(mes)){
					mes= parseInt(prompt("ERROR. Introduzca el mes en numero (1-12) : "));
				}
					while (mes<1 || mes>12){
					mes= parseInt(prompt("ERROR. Introduzca el mes del rango (1-12) : "));
				}
			}
		
		var cadena= "PELICULAS DEL MES: \n";

		//Creamos un contador para saber cuando es el primer viernes del mes:
		var contador= 0;
		var viernes= false;
		for (var c=1; c<7; c++){
			var fechacontador= new Date(2020, mes-1, c);			
			if (fechacontador.getDay()==5){ //compruebo si es o no viernes
				viernes= true;
			}			
			if ((viernes==false) && (fechacontador.getDay()!=5)) { //si no es viernes, cuento hasta que sea viernes
				contador++;
			}				
		}
		
		
		//para controlar los dias que tiene el mes que nos introducen creo una variable diasmes que tiene valor segun el mes
		var diasmes;
		if (mes==2){
			diasmes= 28;
		}
		else if (mes==4 || mes==6 || mes==9 || mes==11){
			diasmes= 30;
		}
		else{
			diasmes=31;
		}
		
		//Recorro los dias del mes, y solo me interesan los viernes(=5), los sabados(=6) y los domingos(=0)
		for (var i=1; i<=diasmes; i++){
			var fecha= new Date(2020, mes-1, i);
			var sesion= "Pelicula1, Pelicula2, Pelicula3, Pelicula4";
			var diasemana; //variable para escribir el día en letra.
	
			if ((contador<=4 && fecha.getDate()<=14) || 
				(contador==5 && fecha.getDate()>3 && fecha.getDate()<=16) || 
				(contador==6 && fecha.getDate()>2 && fecha.getDate()<=15)){
				switch (fecha.getDay()){
					case 5:
						diasemana= "Viernes";
						cadena+= diasemana +" "+ fecha.getDate() +"\n  Sesion 20h: " +sesion+ "\n  Sesion 23h: " +sesion+ "\n";
						break;
					case 6:
						diasemana= "Sabado";
						cadena+= diasemana +" "+ fecha.getDate() +"\n  Sesion 17h: " +sesion+ "\n  Sesion 20h: " +sesion+ "\n  Sesion 23h: " +sesion+ "\n";
						break;
					case 0:
						diasemana= "Domingo";
						cadena+= diasemana +" "+ fecha.getDate() +"\n  Sesion 17h: "+sesion+ "\n  Sesion 20h: " +sesion+ "\n";
						break;
				}
			}
			else{
				switch (fecha.getDay()){
					case 5:
						diasemana= "Viernes";
						cadena+=  diasemana +" "+ fecha.getDate() +"\n  Sesion 20h: " +sesion+ "\n  Sesion 23: " +sesion+ "\n";
						break;
					case 6:
						diasemana= "Sabado";
						cadena+=  diasemana +" "+ fecha.getDate() +"\n  Sesion 20: "+sesion+ "\n  Sesion 23: " +sesion+ "\n";
						break;
					case 0:
						diasemana= "Domingo";
						cadena+=  diasemana +" "+ fecha.getDate() +"\n  Sesion 20: " +sesion+ "\n";
						break;
				}
			}
		}
		
		alert (cadena);

