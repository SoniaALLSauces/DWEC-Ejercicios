/* Autor: Sonia Anton Llanes */
/* Fecha: 15/10/2020 */
/* Practica 00 - Objeto predefinido Date */

/* 1. Realiza un script que escriba en el documento la fecha y hora actual. 
 La salida deberá tener el siguiente formato:
 Hoy es “dia de la semana” “número” de “mes” de “año” y son las “hora:minutos:segundos” */
		var fecha1= new Date();
		alert ("Hoy es " +fecha1.getDay()+ ", " +fecha1.getDate()+ " de " +fecha1.getMonth()+ " de " +fecha1.getFullYear()+
				" y son las " +fecha1.getHours()+ ":" +fecha1.getMinutes()+ ":" +fecha1.getSeconds());

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 2. Realiza un script que cree un objeto con los siguientes datos: 3 de octubre de 2020, 16:05:00 y muestra
la información por pantalla igual que en el ejercicio1. */
		var fecha2= new Date(2020, 9, 3, 16, 05, 00);
		alert ("Hoy es " +fecha2.getDay()+ ", " +fecha2.getDate()+ " de " +fecha2.getMonth()+ " de " +fecha2.getFullYear()+
				" y son las " +fecha2.getHours()+ ":" +fecha2.getMinutes()+ ":" +fecha2.getSeconds());

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 3. Convierte a formato local, las fechas/horas de los ejercicios 1 y 2. */
		fecha1.setDate(8);  //cambio día fecha1
		fecha1.setFullYear(2018);  //cambio año fecha1
		fecha2.setMonth(5);  //cambio mes de fecha2
		fecha2.setMinutes(56);  //cambio los minutos de fecha2
		alert (fecha1.toLocaleString());
		alert (fecha2.toLocaleString());
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 4. Realiza un script que pida un número al usuario e indique el tiempo que se tardó en introducir los datos
desde que se le pide hasta que lo introduce. Muestra la información en segundos, algo parecido a esto:
Has tardado en introducir el número 45 segundos. */
		var fechaactual= new Date();
		var num= parseInt(prompt("Introduzca un numero: "));
		var fechadespues= new Date();
		var diferencia=fechadespues.getTime()-fechaactual.getTime();
		alert ("Ha tardado en introducir el número " + parseInt(diferencia/1000) + " segundos");

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 5. Realiza un script que pida un mes y año e imprima su calendario. Olvídate de “calendarios bonitos”,
muestra la información:
OCTUBRE – 2020: 1 (jueves), 2 (viernes), ….. , 31 (sábado). */
		var mes= parseInt(prompt("Introduzca un mes (1-12): "));
			//controlo que solo introduzca numeros del 1 al 12:
			while(isNaN(mes) || (mes<1 || mes>12)){
				while (isNaN(mes)){
					mes= parseInt(prompt("ERROR. Introduzca un mes en numero (1-12) : "));
				}
				while (mes<1 || mes>12){
					mes= parseInt(prompt("ERROR. Introduzca un mes del rango (1-12) : "));
				}
			}
		var anyo= parseInt(prompt("Introduzca un año (aaaa): "));
			//controlo que introduce un año de 4 digitos:
			while(isNaN(anyo) || (anyo<1000 || anyo>9999)){
				while (isNaN(anyo)){
					anyo= parseInt(prompt("ERROR. Introduzca un año correcto (aaaa) : "));
				}
				while (anyo<=1000 || anyo>=9999){
					anyo= parseInt(prompt("ERROR. Introduzca un año correcto (aaaa) : "));
				}
			}
		var fecha= new Date(anyo, mes); //objeto Date para guardar el mes y año introducido
		var mesletra=""; //variable para mostrar el mes en letra
		var diaSemana=""; //variable para mostrar el día de la semana en letra
		var mostrar=""; //variable que guarda la cadena que nos pide mostrar el ejercicio
		
		//Para mostrar el mes en letra (guardado en variable mesletra):
		switch(mes){
			case 1:
				mesletra="ENERO";
				break;
			case 2:
				mesletra="FEBRERO";
				break;
			case 3:
				mesletra="MARZO";
				break;
			case 4:
				mesletra="ABRIL";
				break;
			case 5:
				mesletra="MAYO";
				break;
			case 6:
				mesletra="JUNIO";
				break;
			case 7:
				mesletra="JULIO";
				break;
			case 8:
				mesletra="AGOSTO";
				break;
			case 9:
				mesletra="SEPTIEMBRE";
				break;
			case 10:
				mesletra="OCTUBRE";
				break;
			case 11:
				mesletra="NOVIEMBRE";
				break;
			case 12:
				mesletra="DICIEMBRE";
				break;
		}
		
		//Iniciamos la variable cadena mostrar con el mes en letra y el año introducido
		mostrar= mesletra+ " de " +fecha.getFullYear()+ ": \n";
		
		//Utilizamos un for para mostrar el dia de la semana y el dia del mes del mes-año introducido
		mes-=1;
		for (var i=1; i<=30; i++){			
			fecha= new Date (anyo, mes, i );
			//Para mostrar el día de la semana en letra (guardamos en la variable diaSemana):
			switch (fecha.getDay()){
				case 0:
					diaSemana= "domingo";
					break;
				case 1:
					diaSemana= "lunes";
					break;
				case 2:
					diaSemana= "martes";
					break;
				case 3:
					diaSemana= "miércoles";
					break;
				case 4:
					diaSemana= "jueves";
					break;
				case 5:
					diaSemana= "viernes";
					break;
				case 6:
					diaSemana= "sábado";
					break;
			}
			mostrar+= fecha.getDate() +" ("+ diaSemana +")\n";
		}
		
		alert (mostrar); //Mostramos la cadena de dias que ha generado el for

///////////////////////////////////////////////////////////////////////////////////////////////////////////		
/* 6. Pídele al usuario una fecha concreta que sea lejana y muéstrale por pantalla cuanto tiempo queda para
ese día.  */
		alert("Calculo en el tiempo: ¿¿cuanto queda hasta la fecha que se introduzca??");
		var dia= parseInt(prompt("Introduzca un dia del mes (1-30): "));
			//controlo que solo introduzca numeros del 1 al 30:
			while(isNaN(dia) || (dia<1 || dia>30)){
				while (isNaN(dia)){
					dia= parseInt(prompt("ERROR. Introduzca un dia del mes (1-30): "));
				}
				while (dia<1 || dia>30){
					dia= parseInt(prompt("ERROR. Introduzca un dia del mes en rango (1-30): "));
				}
			}
		var mes= parseInt(prompt("Introduzca un mes (1-12): "));
			//controlo que solo introduzca numeros del 1 al 12:
			while(isNaN(mes) || (mes<1 || mes>12)){
				while (isNaN(mes)){
					mes= parseInt(prompt("ERROR. Introduzca un mes en numero (1-12) : "));
				}
				while (mes<1 || mes>12){
					mes= parseInt(prompt("ERROR. Introduzca un mes del rango (1-12) : "));
				}
			}
		var anyo= parseInt(prompt("Introduzca un año (aaaa): "));
			//controlo que introduce un año de 4 digitos:
			while(isNaN(anyo) || (anyo<1000 || anyo>9999)){
				while (isNaN(anyo)){
					anyo= parseInt(prompt("ERROR. Introduzca un año correcto (aaaa) : "));
				}
				while (anyo<=1000 || anyo>=9999){
					anyo= parseInt(prompt("ERROR. Introduzca un año correcto (aaaa) : "));
				}
			}
		mes-=1; //resto 1 al mes introducido pq en Date() los meses empiezan en 0
		var fechaLejana= new Date(anyo, mes, dia);
		
		//Controlo que la fecha sea superior a la de hoy:
		var fecha= new Date();
		while (fecha.getTime()>fechaLejana.getTime()){
			alert("La fecha tiene que ser superior a la de hoy. " +
					"\n Introduce la fecha de nuevo: ");
			dia= parseInt(prompt("Introduzca un dia del mes (1-30): "));
				//controlo que solo introduzca numeros del 1 al 30:
				while(isNaN(dia) || (dia<1 || dia>30)){
					while (isNaN(dia)){
						dia= parseInt(prompt("ERROR. Introduzca un dia del mes (1-30): "));
					}
					while (dia<1 || dia>30){
						dia= parseInt(prompt("ERROR. Introduzca un dia del mes en rango (1-30): "));
					}
				}
			mes= parseInt(prompt("Introduzca un mes (1-12): "));
				//controlo que solo introduzca numeros del 1 al 12:
				while(isNaN(mes) || (mes<1 || mes>12)){
					while (isNaN(mes)){
						mes= parseInt(prompt("ERROR. Introduzca un mes en numero (1-12) : "));
					}
					while (mes<1 || mes>12){
						mes= parseInt(prompt("ERROR. Introduzca un mes del rango (1-12) : "));
					}
				}
			anyo= parseInt(prompt("Introduzca un año (aaaa): "));
				//controlo que introduce un año de 4 digitos:
				while(isNaN(anyo) || (anyo<1000 || anyo>9999)){
					while (isNaN(anyo)){
						anyo= parseInt(prompt("ERROR. Introduzca un año correcto (aaaa) : "));
					}
					while (anyo<=1000 || anyo>=9999){
						anyo= parseInt(prompt("ERROR. Introduzca un año correcto (aaaa) : "));
					}
				}
			mes-=1; //resto 1 al mes introducido pq en Date() los meses empiezan en 0
			var fechaLejana= new Date(anyo, mes, dia);
		}
		
		var diferencia= fechaLejana.getTime() - fecha.getTime(); //en milisegundos: Calculo la diferencia entre la fecha introducida y la de hoy
		
		//Paso los milisegundos a dias, horas, minutos y segundos:
		var segundos= diferencia/1000; //paso los milisegundos a segundos.
		var dias=parseInt(segundos/86400); //paso los segundos a días.
		segundos=segundos%86400; //segundos que quedan
		var horas=parseInt(segundos/1440); //con el resto se segundos calculo las horas
		var min=parseInt((segundos%1440)/60); //con el resto del calculo anterior calculo los minutos
		var seg=parseInt((segundos%1440)%60); //el resto de todas las divisiones son los segundos restantes.
		var diferenciaToString="La diferencia entre ahora y la fecha introducida es: \n" +
								dias+ " dias, " +horas+ "h:" +min+ "min:" +seg+ "sg.";
		
		alert (diferenciaToString);

///////////////////////////////////////////////////////////////////////////////////////////////////////////		
/* 7. Crea un script que le pida al usuario una fecha concreta de nacimiento (dd/mm/aa). Comprueba que ha
introducido valores correctos y devuelve la fecha 500 días posterior. */
		alert("500 dias despues de tu nacimiento. \n A continuacion introduce tu fecha de nacimiento");
		var dia= parseInt(prompt("Introduzca el dia del mes que nacio (1-30): "));
			//controlo que solo introduzca numeros del 1 al 30:
			while(isNaN(dia) || (dia<1 || dia>30)){
				while (isNaN(dia)){
					dia= parseInt(prompt("ERROR. Introduzca el dia del mes (1-30): "));
				}
				while (dia<1 || dia>30){
					dia= parseInt(prompt("ERROR. Introduzca el dia del mes en rango (1-30): "));
				}
			}
		var mes= parseInt(prompt("Introduzca el mes que nacio (1-12): "));
			//controlo que solo introduzca numeros del 1 al 12:
			while(isNaN(mes) || (mes<1 || mes>12)){
				while (isNaN(mes)){
					mes= parseInt(prompt("ERROR. Introduzca el mes en numero (1-12) : "));
				}
				while (mes<1 || mes>12){
					mes= parseInt(prompt("ERROR. Introduzca el mes del rango (1-12) : "));
				}
			}
		var anyo= parseInt(prompt("Introduzca el año que nacio (aaaa): "));
			//controlo que introduce un año de 4 digitos:
			while(isNaN(anyo) || (anyo<1000 || anyo>9999)){
				while (isNaN(anyo)){
					anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
				}
				while (anyo<=1000 || anyo>=9999){
					anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
				}
			}
		mes-=1; //resto 1 al mes introducido pq en Date() los meses empiezan en 0
		var fechaNace= new Date(anyo, mes, dia);
		var fechaDespues= new Date(anyo, mes, dia+500);
		
		alert ("500 dias despues es el: " +fechaDespues.getDate()+ "/" +(fechaDespues.getMonth()+1)+ "/" +fechaDespues.getFullYear());
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 8. Crea un script que muestre la hora en España y la diferencia con UTC */
		var fechactual=new Date();
		var horactual= fechactual.getHours()+ ":" +fechactual.getMinutes()+ ":" +fechactual.getSeconds();
		var horaUTC= fechactual.getUTCHours()+ ":" +fechactual.getUTCMinutes()+ ":" +fechactual.getUTCSeconds();
		alert("La hora actual local es - " +horactual+
			  "\nLa hora actual UTC es - " +horaUTC);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 9. Crea un script que pida por pantalla la fecha de nacimiento (dd/mm/aa). Comprueba que ha
introducido valores correctos y muestra los años, meses y días que han pasado desde su nacimiento. */
		alert("Calculo en el tiempo: desde tu nacimiento hasta hoy.");
		var dia= parseInt(prompt("Introduzca el dia del mes que nacio (1-31): "));
			//controlo que solo introduzca numeros del 1 al 31:
			while(isNaN(dia) || (dia<1 || dia>31)){
				while (isNaN(dia)){
					dia= parseInt(prompt("ERROR. Introduzca el dia correcto (1-31): "));
				}
				while (dia<1 || dia>31){
					dia= parseInt(prompt("ERROR. Introduzca un dia del mes en rango (1-31): "));
				}
			}
		var mes= parseInt(prompt("Introduzca el mes que nacio (1-12): "));
			//controlo que solo introduzca numeros del 1 al 12:
			while(isNaN(mes) || (mes<1 || mes>12)){
				while (isNaN(mes)){
					mes= parseInt(prompt("ERROR. Introduzca el mes en numero (1-12) : "));
				}
				while (mes<1 || mes>12){
					mes= parseInt(prompt("ERROR. Introduzca el mes del rango (1-12) : "));
				}
			}
		var anyo= parseInt(prompt("Introduzca el año que nacio (aaaa): "));
			//controlo que introduce un año de 4 digitos:
			while(isNaN(anyo) || (anyo<1000 || anyo>9999)){
				while (isNaN(anyo)){
					anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
				}
				while (anyo<=1000 || anyo>=9999){
					anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
				}
			}
		mes-=1; //resto 1 al mes introducido pq en Date() los meses empiezan en 0
		var fechaNac= new Date(anyo, mes, dia);
		
		//Controlo que la fecha sea inferior a la de hoy, si es mayor aún no ha nacido:
		var fecha= new Date();
		while (fecha.getTime()<fechaNac.getTime()){
			alert("La fecha tiene que ser inferior a la de hoy. " +
					"\n Introduce la fecha de nuevo: ");
			var dia= parseInt(prompt("Introduzca el dia del mes que nacio (1-31): "));
				//controlo que solo introduzca numeros del 1 al 31:
				while(isNaN(dia) || (dia<1 || dia>31)){
					while (isNaN(dia)){
						dia= parseInt(prompt("ERROR. Introduzca el dia correcto (1-31): "));
					}
					while (dia<1 || dia>31){
						dia= parseInt(prompt("ERROR. Introduzca un dia del mes en rango (1-31): "));
					}
				}
			var mes= parseInt(prompt("Introduzca el mes que nacio (1-12): "));
				//controlo que solo introduzca numeros del 1 al 12:
				while(isNaN(mes) || (mes<1 || mes>12)){
					while (isNaN(mes)){
						mes= parseInt(prompt("ERROR. Introduzca el mes en numero (1-12) : "));
					}
					while (mes<1 || mes>12){
						mes= parseInt(prompt("ERROR. Introduzca el mes del rango (1-12) : "));
					}
				}
			var anyo= parseInt(prompt("Introduzca el año que nacio (aaaa): "));
				//controlo que introduce un año de 4 digitos:
				while(isNaN(anyo) || (anyo<1000 || anyo>9999)){
					while (isNaN(anyo)){
						anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
					}
					while (anyo<=1000 || anyo>=9999){
						anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
					}
				}
			mes-=1; //resto 1 al mes introducido pq en Date() los meses empiezan en 0
			var fechaNac= new Date(anyo, mes, dia);
		}
		
		var diferencia= fecha.getTime() - fechaNac.getTime(); //en milisegundos: Calculo la diferencia entre la fecha introducida y la de hoy
		
		//Paso los milisegundos a años, meses, días:
		//**El calculo no es preciso pq no se tiene en cuenta ni bisiestos ni meses de más o menos de 30 días
		var segundos= diferencia/1000; //paso los milisegundos a segundos.
		var dias=parseInt(segundos/86400); //paso los segundos a días.
		alert (dias);
		var anyos=parseInt(dias/365); //paso los meses a años.
		alert (anyos);
		var meses= parseInt((dias-(anyos*365))/30); //calculo los meses restantes.		
		dias= dias -((anyos*365)+(meses*30)); //calculo el resto de días.
		var diferenciaToString="La diferencia entre tu cumpleaños y hoy es: \n" +
								anyos+ " años, " +meses+ " meses y " +dias+ " dias";
		
		alert (diferenciaToString);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 10. Crea un script que pida la fecha de cumpleaños de los niños de una clase de Primaria de un colegio que
tiene 20 alumnos. El programa tiene que agrupar por trimestres los cumpleaños de los niños, es decir:
los niños que nazcan de oct-nov-dic (1º trimestre), ene-feb-mar(2º trimestre), abril-may-junio (3º
trimestre) y julio-agost-sept (4º trimestre). Debe de mostrar por pantalla el nombre y el primer apellido
de todos los niños agrupados por trimestres y si un trimestre tiene más de 5 niños que cumplen años,
mostrar una alerta por pantalla informando. */
		var listatr1= "PRIMER TRIMESTRE: \n"; //listado del primer trimestre a rellenar
		var listatr2= "SEGUNDO TRIMESTRE: \n"; //listado del segundo trimestre a rellenar
		var listatr3= "TERCER TRIMESTRE: \n"; //listado del tercer trimestre a rellenar
		var listatr4= "CUARTO TRIMESTRE: \n"; //listado del cuarto trimestre a rellenar
		for (var i=1;i<11;i++){
			alert ("Datos del alumno " +i);
			var nombreal= prompt("Introduce el nombre del alumno " +i+ ":");
			var apellal= prompt("Introduce el apellido del alumno " +i+ ":");
			alert ("A continuacion introduce la fecha de nacimiento del alumno");
			var dia= parseInt(prompt("Introduzca el dia del mes que nacio (1-31): "));
				//controlo que solo introduzca numeros del 1 al 31:
				while(isNaN(dia) || (dia<1 || dia>31)){
					while (isNaN(dia)){
						dia= parseInt(prompt("ERROR. Introduzca el dia correcto (1-31): "));
					}
					while (dia<1 || dia>31){
						dia= parseInt(prompt("ERROR. Introduzca un dia del mes en rango (1-31): "));
					}
				}
			var mes= parseInt(prompt("Introduzca el mes que nacio (1-12): "));
				//controlo que solo introduzca numeros del 1 al 12:
				while(isNaN(mes) || (mes<1 || mes>12)){
					while (isNaN(mes)){
						mes= parseInt(prompt("ERROR. Introduzca el mes en numero (1-12) : "));
					}
					while (mes<1 || mes>12){
						mes= parseInt(prompt("ERROR. Introduzca el mes del rango (1-12) : "));
					}
				}
			var anyo= parseInt(prompt("Introduzca el año que nacio (aaaa): "));
				//controlo que introduce un año de 4 digitos:
				while(isNaN(anyo) || (anyo<1000 || anyo>9999)){
					while (isNaN(anyo)){
						anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
					}
					while (anyo<=1000 || anyo>=9999){
						anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
					}
				}
			mes-=1; //resto 1 al mes introducido pq en Date() los meses empiezan en 0
			var fechaNac= new Date(anyo, mes, dia);
			var fechaFormato= fechaNac.getDate()+ "/" +(fechaNac.getMonth()+1)+ "/" +fechaNac.getFullYear();
			if (fechaNac.getMonth()>8 && fechaNac.getMonth()<12){
				listatr1+= nombreal+ " " +apellal+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()>=0 && fechaNac.getMonth()<3){
				listatr2+= nombreal+ " " +apellal+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()>2 && fechaNac.getMonth()<6){
				listatr3+= nombreal+ " " +apellal+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()>5 && fechaNac.getMonth()<9){
				listatr4+= nombreal+ " " +apellal+ " - " +fechaFormato+ "\n";
			}	
		}
		alert (listatr1 + listatr2 + listatr3 + listatr4); //muestro los 4 listados

/* 11. Crea un script que permita saber quién cumple años en un mes en concreto. Debe de reconocer al
menos 10 fechas de cumpleaños (créalas como variables) y el usuario debe introducir el mes del que
quiere saber los cumpleaños y mostrar por pantalla su nombre. Es decir: el usuario introducirá
“febrero” y mostrará por pantalla quién cumple años en febrero de las 10 personas que “conoce”. */
		//Creo una variable por cada mes para guardar la cadena de cumpleaños:
		var enero= "CUMPLES ENERO: \n";
		var febrero= "CUMPLES FEBRERO: \n";
		var marzo= "CUMPLES MARZO: \n";
		var abril= "CUMPLES ABRIL: \n";
		var mayo= "CUMPLES MAYO: \n";
		var junio= "CUMPLES JUNIO: \n";
		var julio= "CUMPLES JULIO: \n";
		var agosto= "CUMPLES AGOSTO: \n";
		var septiembre= "CUMPLES SEPTIEMBRE: \n";
		var octubre= "CUMPLES OCTUBRE: \n";
		var noviembre= "CUMPLES NOVIEMBRE: \n";
		var diciembre= "CUMPLES DICIEMBRE: \n";
		
		var num= parseInt(prompt("Cuantos cumpleaños quieres guardar (10-20)??"));
		//Controlamos que introduzca un número y no sean menos de 10, ni más de 20 (son demasiados ;-)
		while (isNaN(num) || num<10 || num>20){
			num= parseInt(prompt("ERROR. Introduce un numero en rango (10-20)??"));
		}
		
		//For para introducir los datos y guardarlos en su cadena de mes correspondiente:
		for (var i=1; i<=num; i++){
			var persona= prompt("Introduce el nombre de la persona " +i);
			alert ("A continuacion introduce la fecha de su nacimiento");
			var dia= parseInt(prompt("Introduzca el dia del mes que nacio (1-31): "));
				//controlo que solo introduzca numeros del 1 al 31:
				while(isNaN(dia) || (dia<1 || dia>31)){
					while (isNaN(dia)){
						dia= parseInt(prompt("ERROR. Introduzca el dia correcto (1-31): "));
					}
					while (dia<1 || dia>31){
						dia= parseInt(prompt("ERROR. Introduzca un dia del mes en rango (1-31): "));
					}
				}
			var mes= parseInt(prompt("Introduzca el mes que nacio (1-12): "));
				//controlo que solo introduzca numeros del 1 al 12:
				while(isNaN(mes) || (mes<1 || mes>12)){
					while (isNaN(mes)){
						mes= parseInt(prompt("ERROR. Introduzca el mes en numero (1-12) : "));
					}
					while (mes<1 || mes>12){
						mes= parseInt(prompt("ERROR. Introduzca el mes del rango (1-12) : "));
					}
				}
			var anyo= parseInt(prompt("Introduzca el año que nacio (aaaa): "));
				//controlo que introduce un año de 4 digitos:
				while(isNaN(anyo) || (anyo<1000 || anyo>9999)){
					while (isNaN(anyo)){
						anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
					}
					while (anyo<=1000 || anyo>=9999){
						anyo= parseInt(prompt("ERROR. Introduzca el año correcto (aaaa) : "));
					}
				}
			mes-=1; //resto 1 al mes introducido pq en Date() los meses empiezan en 0
			var fechaNac= new Date(anyo, mes, dia);
			var fechaFormato= fechaNac.getDate()+ "/" +(fechaNac.getMonth()+1)+ "/" +fechaNac.getFullYear();
			if (fechaNac.getMonth()==0){
				enero+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth==1){
				febrero+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()==2){
				marzo+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()==3){
				abril+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth==4){
				mayo+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()==5){
				junio+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()==6){
				julio+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth==7){
				agosto+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()==8){
				septiembre+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()==9){
				octubre+= persona+ " - " +fechaFormato+ "\n";
			}	
			else if(fechaNac.getMonth==10){
				noviembre+= persona+ " - " +fechaFormato+ "\n";
			}
			else if(fechaNac.getMonth()==11){
				diciembre+= persona+ " - " +fechaFormato+ "\n";
			}
		}
		
		//El usuario va a elegir el mes que quiere visualizar:
		//Para que el listado no sea infinito forzamos al usuario a introducirlo en mayusculas
		var meselegido=prompt("Introduce el mes (en mayusculas) del cual desea visualizar cumpleaños");
		while ((meselegido!="ENERO") && (meselegido!="FEBRERO") && (meselegido!="MARZO") && (meselegido!="ABRIL") &&
				(meselegido!="MAYO") && (meselegido!="JUNIO") && (meselegido!="JULIO") && (meselegido!="AGOSTO") &&
				(meselegido!="SEPTIEMBRE") && (meselegido!="OCTUBRE") && (meselegido!="NOVIEMBRE") && (meselegido!="DICIEMBRE")){
			meselegido=prompt("ERROR. Por favor, introduce el mes que desea visualizar EN MAYUSCULAS.");
		}
		switch (meselegido){
			case "ENERO":
				alert (enero);
				break;
			case "FEBRERO":
				alert (febrero);
				break;
			case "MARZO":
				alert (marzo);
				break;
			case "ABRIL":
				alert (abril);
				break;
			case "MAYO":
				alert (mayo);
				break;
			case "JUNIO":
				alert (junio);
				break;
			case "JULIO":
				alert (julio);
				break;
			case "AGOSTO":
				alert (agosto);
				break;
			case "SEPTIEMBRE":
				alert (septiembre);
				break;
			case "OCTUBRE":
				alert (octubre);
				break;
			case "NOVIEMBRE":
				alert (noviembre);
				break;
			case "DICIEMBRE":
				alert (diciembre);
				break;
		}







