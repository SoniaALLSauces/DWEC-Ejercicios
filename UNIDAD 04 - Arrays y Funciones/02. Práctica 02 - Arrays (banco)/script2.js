/* Autor: Sonia Anton Llanes */
/* Fecha: 03/11/2020 */
/* Practica 02 - Arrays */


/* SCRIPT BANCO */

	//ARRAYS:
		var dniS= new Array();
		var nombres= new Array();
		var numCuenta= new Array();
		var gestorAsig= new Array();
		
	//Variables para validar datos a los Arrays:
        var dni;
		var nombre;
		var cuenta;
		var gestor;
		
	//Rellenamos los Arrays con .push():
		//VALIDACIONES para añadir un nuevo cliente:
			//DNI: un cliente puede tener máximo 2 cuentas: contamos las veces que un DNI aparece en el array
				function totalDnis(dni){
					var sumaDni= 0;
					for (var i=0; i<dniS.length;i++){
						if(dni==dniS[i]){
							sumaDni++;
						}
					}
					return sumaDni;
				}
			//El número de cuenta no se pueden duplicar:
				function cuentaExiste(cuenta){
					var cuentaEx= false;
					for (var i=0; i<dniS.length;i++){
						if(cuenta==numCuenta[i]){
							cuentaEx= true;
						}
					}
					return cuentaEx;
				}	
			//El mismo cliente debe tener el mismo gestor si ya tiene otra cuenta:
				function gestorAnt(dni, gestor){
					var antGestor= null;
					var mismoGestor= true;
					for (var i=0; i<dniS.length;i++){
						if(dni==dniS[i]){
							antGestor= gestorAsig[i];
						}
					}
					if (antGestor!=null && antGestor!=gestor){
						mismoGestor= false;
					}
					return mismoGestor;
				}
			//El gestor1, gestor2, gestor3, gestor4 pueden tener maximo 10 clientes y el gestor5 maximo 5 clientes
				// function clientesGestor(){
					// var totalClientes= 0;
					// for (var i=0; i<dniS.length;i++){
						// if(gestor==gestorAsig[i]){
							// totalClientes++;
						// }
					// }
					// return totalClientes;
				// }
			
			
		//FUNCION PARA AÑADIR AL ARRAY NUEVO CLIENTE: Si pasa todas las validaciones rellenamos con .push():
			function anadir (dni,nombre,cuenta,gestor){
				var ok= false;
				if((totalDnis(dni)<2) && (cuentaExiste(cuenta)==false) && (gestorAnt(dni,gestor)==true)){
					console.log("hola");
					ok= true;
					dniS.push(dni);
					nombres.push(nombre);
					numCuenta.push(cuenta);
					gestorAsig.push(gestor);
				}
				return ok;
			}
				
		
		//Pasamos clientes con datos:
			var rdo;
			anadir ('11111A','Cliente1','ES11111','Gestor1');
				rdo= (anadir ('11111A','Cliente1','ES11111','Gestor1'));
				alert (rdo);
			anadir ('22222B','Cliente2','ES22222','Gestor1');
				rdo= (anadir ('22222B','Cliente2','ES22222','Gestor1'));
				alert (rdo);
			//cliente con cuenta duplicada
			anadir ('22222B','Cliente2','ES22222','Gestor2');
				rdo= (anadir ('22222B','Cliente2','ES22222','Gestor2'));
				alert (rdo);
			//cliente existente con distinto gestor
			anadir ('22222B','Cliente2','ES22223','Gestor2');
				rdo= (anadir ('22222B','Cliente2','ES22223','Gestor2'));
				alert (rdo);
			anadir ('22222B','Cliente2','ES22224','Gestor1');
				rdo= (anadir ('22222B','Cliente2','ES22224','Gestor1'));
				alert (rdo);
			
			
			var cadena= "DATOS DE LOS CLIENTES INTRODUCIDOS: \n";
			for (var i=0; i<dniS.length; i++){
				cadena+= dniS[i] +" - "+ nombres[i] +" - "+ 
						numCuenta[i] +" - "+ gestorAsig[i] +"\n ";
			}
			alert (cadena);
	
	
	//MENU DEL EJERCICIO:
		// var opcion= prompt("Selecciona una de las siguientes opciones: \n" +
							// "1. Número clientes por gestor y total clientes. \n" +
							// "2. Número de clientes con cuentas en saldo positivo. \n" +
							// "3. Número de clientes con cuentas en saldo negativo. \n" +
							// "4. DNI, nombre y apellidos del cliente con más saldo. \n" +
							// "5. DNI de clientes para llamadas comerciales.");
			// while (isNaN(opcion) || opcion<1 || opcion>5){
				// opcion= prompt("ERROR. Selecciona una opción correcta: \n" +
							   // "1. Número clientes por gestor y total clientes. \n" +
							   // "2. Número de clientes con cuentas en saldo positivo. \n" +
							   // "3. Número de clientes con cuentas en saldo negativo. \n" +
							   // "4. DNI, nombre y apellidos del cliente con más saldo. \n" +
							   // "5. DNI de clientes para llamadas comerciales.");
			// }
		
		// opcion= parseInt(opcion);
		// switch (opcion){
			
			// case 1:
				// var cliGestor1= 0;
				// var cliGestor2= 0;
				// for (var i=0; i<dniS.length; i++){
					////compruebo que el dni no existe ya para no duplicar clientes
					// var dniEx= false; 
					// for(var j=0; j<i; j++){
						// if (dniS[i]==dniS[j]){
							// dniEx= true;
						// }
					// }
					////si el dni no existe añado cliente al gestor que corresponda
					// if (gestorAsig[i]=='Gestor1' && !dniEx){
						// cliGestor1++;
					// } else if (gestorAsig[i]=='Gestor2' && !dniEx){
						// cliGestor2++;
					// }
				// }
				// alert ("1. TOTAL CLIENTES: " + (cliGestor1+cliGestor2)+ "\n" +
					   // "Clientes del Gestor 1: " +cliGestor1+ "\n" +
					   // "Clientes del Gestor 2: " +cliGestor2);
				// break;
				
			// case 2:
				// alert ("caso 2");
				// break;
				
			// case 3:
				// alert ("caso 3");
				// break;
				
			// case 4:
				// alert ("caso 4");
				// break;
				
			// case 5:
				// alert ("caso 5");
				// break;
		// }
			
	
	// var saldos= "2. SALDOS DE LOS CLIENTES: \n";
		// for (var i=0; i<dniS.length; i++){ //
			// var saldoAcCli= new Array();
			// var saldoCli= 0;
			// for(var j=0; j<=i; j++){
				// if (dniS[i]==dniS[j]){
					// saldoCli+= saldoCuenta[j];
				// }
			// }
			// saldoAcCli[i]= saldoCli;
			// saldos+= "Saldo Cliente " +(i+1)+ ": " +saldoAcCli[i] +"\n";	
		// }
		// alert (saldos);

		