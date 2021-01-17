/* Autor: Sonia Anton Llanes */
/* Fecha: 13/11/2020 */
/* Practica 04 - Objetos */


/* SCRIPT VEHICULOS */

		//OBJETO CONCESIONARIO
			function Concesionario(cod_oficina_in, ciudad_in, responsable_in){
				this.codigoOficina = cod_oficina_in;
			 	this.ciudad = ciudad_in;
			 	this.responsable = responsable_in;
			}
		
		//OBJETO PERSONA
			function Persona(dni_in, nombre_in, apellidoUno_in, apellidoDos_in){
				this.dni = dni_in;
				this.nombre = nombre_in;
				this.apellidoUno = apellidoUno_in;
				this.apellidoDos = apellidoDos_in;
			}

		//FUNCION IMPRIMIR	
			function imprimirDatos(){
				alert (this.marca);
				alert (this.modelo);
				alert (this.anyo);
				alert (this.concesionario.codigoOficina);
				alert (this.concesionario.ciudad);
				alert (this.concesionario.responsable);
				alert (this.persona.dni);
				alert (this.persona.nombre);
				alert (this.persona.apellidoUno);
				alert (this.persona.apellidoDos);
				//más propiedades y métodos... 

			}

		//OBJETO VEHICULO
			function Vehiculo(tipo_in, matricula_in, marca_in, modelo_in, anyo_in, concesionario_in, estado_in, persona_in){
				this.tipo = tipo_in;
				this.matricula = matricula_in;
				this.marca = marca_in;
			 	this.modelo = modelo_in;
			 	this.anyo = anyo_in;
			 	this.concesionario = concesionario_in;
				this.estado = estado_in;
				this.persona = persona_in;
			 	this.imprimirDatos = imprimirDatos;				
			}
			
	//CREO OBJETOS PARA RELLENAR DATOS DEL CONCESIONARIO
		//CONCESIONARIOS:
			var concesionarioAtocha = new Concesionario ("281", "Madrid", "Pedro Navarro");
		//PERSONAS:
			var personas = new Array(3);  //array para almacenar las personas que compran o reservan
			personas[0]= new Persona ('11111A','Maria','Sanchez','Alonso');
			personas[1]= new Persona ('22222B','Pepe','Garcia','Fernandez');
			personas[2]= new Persona ('33333C','Oscar','Alhambra','Toledo');
		//VEHICULOS:
			var vehiculos = new Array();  //array para guardar los datos de los vehículos
			vehiculos[0]= new Vehiculo ('coche','1111AAA','seat','toledo',2011,concesionarioAtocha,'comprado',personas[1]);  //sustituyo vendido por comprado
			vehiculos[1]= new Vehiculo ('coche','2222BBB','renault','clio',2016,concesionarioAtocha,'no vendido',null); 
			vehiculos[2]= new Vehiculo ('coche','3333CCC','citroen','C4',2012,concesionarioAtocha,'no vendido',null); 
			vehiculos[3]= new Vehiculo ('coche','4444DDD','renault','megane',2019,concesionarioAtocha,'comprado',personas[0]); 
			vehiculos[4]= new Vehiculo ('furgoneta','5555EEE','mercedes','vito',2010,concesionarioAtocha,'reservado',personas[0]); 
			vehiculos[5]= new Vehiculo ('furgoneta','6666FFF','renault','master',2015,concesionarioAtocha,'comprado',personas[2]); 
			// alert (vehiculos[0].matricula);
	
	//MENU DEL CONCESIONARIO:
		var opcion= prompt("Selecciona una de las siguientes opciones: \n" +
							"1. Número de vehículos que tiene el concesionario \n" +
							"2. Vehículos que tiene el concesionario comprados o reservados \n" +
							"3. Número de vehículos disponibles de la marca seleccionada \n");
			while (isNaN(opcion) || opcion<1 || opcion>3){  //controlo que solo se introduzcan valores de 1 a 3
				opcion= prompt("ERROR. Selecciona una opción correcta: \n" +
							   "1. Número de vehículos que tiene el concesionario \n" +
							   "2. Vehículos que tiene el concesionario comprados o reservados \n" +
							   "3. Número de vehículos disponibles de la marca seleccionada \n");
			}
		
		opcion= parseInt(opcion);
		switch (opcion){
			case 1:
				alert ("1. NÚMERO DE VEHÍCULOS DEL CONCESIONARIO: " +vehiculos.length);
				break;
			case 2:
				var comprados= "2. VEHÍCULOS COMPRADOS O RESERVADOS: \n";
				for(var v=0; v<vehiculos.length; v++){  //recorro array vehiculos y comparo que el estado sea 'comprado' o 'reservado'
					if (vehiculos[v].estado=='comprado' || vehiculos[v].estado=='reservado'){  //sustituyo vendido por comprado para mostrar mejor la salida
						comprados+= vehiculos[v].matricula +" - "+ vehiculos[v].estado +" por "+ vehiculos[v].persona.nombre +"\n";
					}
				}
				alert (comprados);
				break;
			case 3:
				var selMarca= prompt ("Introduce una marca de vehiculos (Seat, Renault, Citroen o Mercedes)");
				selMarca= selMarca.toLowerCase();  //convierto lo introducido por teclado a minusculas para comparar con los datos del array vehiculos
					while (selMarca!='seat' && selMarca!='renault' && selMarca!='citroen' && selMarca!='mercedes'){
						selMarca= prompt ("ERROR. Introduce una marca del concesionario (Seat, Renault, Citroen o Mercedes)");
						selMarca= selMarca.toLowerCase();
					}
				var seleccionados= "3. VEHÍCULOS DISPONIBLES DE LA MARCA " +selMarca.toUpperCase()+ ": \n";
				var contador= 0;
				for(var v=0; v<vehiculos.length; v++){  //recorro array vehiculos y comparo que la marca sea la introducida y el estado sea 'no vendido'
					if (vehiculos[v].marca==selMarca && vehiculos[v].estado=='no vendido'){ 
						seleccionados+= vehiculos[v].matricula +" - "+ vehiculos[v].marca +"  "+ vehiculos[v].modelo +"\n";
						contador++;
					}
				}
				if (contador>0){
					alert (seleccionados);
				}else{
					alert (seleccionados + "NO EXISTE NINGÚN VEHÍCULO DISPONIBLE");
				}
				
				break;
		}
			
			
			
			
			