/* Autor: Sonia Anton Llanes */
/* Fecha: 13/11/2020 */
/* Practica 05 - Objetos */


/* SCRIPT ESCUELA DE ARTE */

		//OBJEGO ACTIVIDADES:
			function Actividad(nombre_in, dia1_in, dia2_in, turno_in){
				this.nombre = nombre_in;
			 	this.dia1 = dia1_in;
			 	this.dia2 = dia2_in;
				this.turno = turno_in;				
			}
		
		//FUNCION IMPRIMIR ALUMNOS:
			function imprimirDatos(){
				return this.nombre +": "+ this.telefono +" - "+ this.email +" -  "+ this.actividad.nombre;
			}
		//OBJETO ALUMNOS MATRICULADOS:
			function Alumno(nombre_in, telefono_in, email_in, actividad_in){
				this.nombre = nombre_in;
			 	this.telefono = telefono_in;
			 	this.email = email_in;
				this.actividad = actividad_in;
				this.imprimirDatos = imprimirDatos;
			}
	
		//CREO OBJETOS PARA RELLENAR DATOS DE LA ESCUELA
		//ACTIVIDADES:
			var actividades = new Array();  //array para almacenar las actividades de la escuela
			actividades[0]= new Actividad ('oleo','lunes','miercoles','mañana');
			actividades[1]= new Actividad ('oleo','martes','jueves','tarde');
			actividades[2]= new Actividad ('grabado','lunes','miercoles','tarde');
			actividades[3]= new Actividad ('acrilico','martes','viernes','mañana');
			actividades[4]= new Actividad ('modelaje','miercoles','viernes','mañana');
			actividades[5]= new Actividad ('modelaje','martes','viernes','tarde');
		//ALUMNOS:
			var alumnos = new Array();  //array para guardar los datos de los alumnos y la actividad matriculad@
			alumnos[0]= new Alumno ('Maria','654987321','maria@maria.es',actividades[1]);  
			alumnos[1]= new Alumno ('Pepe','693582474','pepe@pepe.es',actividades[3]); 
			alumnos[2]= new Alumno ('Juan','624862485','juan@juan.es',actividades[5]); 
			alumnos[3]= new Alumno ('Alvaro','641397852','alvaro@alvaro.es',actividades[0]); 
			alumnos[4]= new Alumno ('Sofia','621598473','sofia@sofia.es',actividades[0]); 
			alumnos[5]= new Alumno ('Almudena','675324196','almu@almudena.es',actividades[2]); 
			alumnos[6]= new Alumno ('Alfonso','693582474','alfonso@alfonso.es',actividades[1]); 
			alumnos[7]= new Alumno ('Jesus','624862485','jesus@jesus.es',actividades[1]); 
			alumnos[8]= new Alumno ('Elena','641397852','elena@elena.es',actividades[4]); 
			alumnos[9]= new Alumno ('Fernando','621598473','fer@fernando.es',actividades[0]);
			alumnos[10]= new Alumno ('Pilar','675324196','pili@pilar.es',actividades[3]);

		
	//MENU DE LA ESCUELA:
		var opcion= prompt("Selecciona una de las siguientes opciones: \n" +
							"1. Teléfono e email de todos los alumnos matriculados. \n" +
							"2. Número de alumnos matriculados en la clase de óleo. \n" +
							"3. Número de alumnos matriculados en la clase de óleo el día indicado. \n" +
							"4. Datos de los alumnos de la clase indicada.");
			while (isNaN(opcion) || opcion<1 || opcion>4){  //controlo que solo se introduzcan valores de 1 a 3
				opcion= prompt("ERROR. Selecciona una opción correcta: \n" +
							   "1. Teléfono e email de todos los alumnos matriculados. \n" +
							   "2. Número de alumnos matriculados en la clase de óleo. \n" +
							   "3. Número de alumnos matriculados en la clase de óleo el día indicado. \n" +
							   "4. Datos de los alumnos de la clase indicada.");
			}
		
		opcion= parseInt(opcion);
		switch (opcion){
			case 1:
				var cadena= "1. TELÉFONO E EMAIL DE LOS ALUMNOS MATRICULADOS ESTE AÑO: \n";
				for (var a=0; a<alumnos.length; a++){  //recorro el array alumnos y añado a la cadena el telefono y el email
					cadena+= alumnos[a].telefono +" - "+ alumnos[a].email +"\n";
				}
				alert (cadena);
				break;
				
			case 2:
				var alumnosOleo= 0;  //variable para contar los alumnos de oleo
				for (var a=0; a<alumnos.length; a++){  
					if (alumnos[a].actividad.nombre =='oleo'){
						alumnosOleo++;
					}
				}
				alert ("2. EL NÚMERO DE ALUMNOS DE OLEO SON: " +alumnosOleo);
				break;
			
			case 3:
				var alumnosOleo= 0;  //variable para contar los alumnos de oleo
				var cadena="";  //variable para guardar datos de los alumnos a mostrar
				var dia= prompt("¿De qué día quieres visualizar la información (lunes-jueves)?");
				dia= dia.toLowerCase();
					while(dia!='lunes' && dia!='martes' && dia!='miercoles' && dia!='jueves'){
						dia= prompt("ERROR. Introduce un día en rango: lunes, martes, miercoles o jueves");
						dia= dia.toLowerCase();
					}
				for (var a=0; a<alumnos.length; a++){  
					if (alumnos[a].actividad.nombre =='oleo' && (alumnos[a].actividad.dia1==dia || alumnos[a].actividad.dia2==dia)){
						alumnosOleo++;
						cadena+= alumnos[a].imprimirDatos() +"\n";
					}
				}
				alert ("2. EL NÚMERO DE ALUMNOS DE OLEO EL " +dia.toUpperCase()+ " SON: " +alumnosOleo+ "\n" +
						cadena);
				break;
			
			case 4:
				var cadena="";  //variable para guardar datos de los alumnos a mostrar
				var clase= prompt("¿De qué actividad quieres mostrar la información?");
				clase= clase.toLowerCase();
					while(clase!='oleo' && clase!='grabado' && clase!='acrilico' && clase!='modelaje'){
						clase= prompt("ERROR. Introduce una actividad correcta (oleo, grabado, acrilico, modelaje)");
						clase= clase.toLowerCase();
					}
				for (var a=0; a<alumnos.length; a++){  
					if (alumnos[a].actividad.nombre ==clase){
						cadena+= alumnos[a].imprimirDatos() +" DIAS: "+ alumnos[a].actividad.dia1 +" y "+ alumnos[a].actividad.dia2 +"\n";
					}
				}
				alert ("2. LOS ALUMNOS DE " +clase.toUpperCase()+ " SON: \n" +
						cadena);
				break;
		}
		
		