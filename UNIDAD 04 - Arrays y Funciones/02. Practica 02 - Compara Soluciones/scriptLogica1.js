/*LÓGICA 1*/
/* Autor: Sonia Anton Llanes */
/* Fecha: 03/11/2020 */
/* Practica 02 - Arrays */


/* SCRIPT BANCO */

	//ARRAYS:
		var dniS= new Array();
		var nombres= new Array();
		var apellido1= new Array();
		var apellido2= new Array();
		var numCuenta= new Array();
		var fechaAlta= new Array();
		var saldoCuenta= new Array();
		var saldoNeg= new Array();
		var gestorAsig= new Array();
		
	//Variables para validar datos a los Arrays:
        var dni;
		var nombre;
		var apellUno;
		var apell2;
		var cuenta;
		var fecha;
		var saldo;
		var gestor;
		
	//Rellenamos los Arrays con .push():
		//VALIDACIONES para añadir un nuevo cliente:
			//DNI: un cliente puede tener máximo 2 cuentas, es decir, se puede repetir un DNI como máximo 2 veces
				function totalDnis(dni){  //funcion para contar las veces que un DNI aparece en el array DNIs
					var sumaDni= 0;
					for (var i=0; i<dniS.length;i++){
						if(dni==dniS[i]){
							sumaDni++;
						}
					}
					return sumaDni;
				}
			//El número de cuenta no se pueden duplicar:
				function cuentaExiste(cuenta){  //funcion para saber si la cuenta ya existe
					var cuentaEx= false;
					for (var i=0; i<dniS.length;i++){
						if(cuenta==numCuenta[i]){
							cuentaEx= true;
						}
					}
					return cuentaEx;
				}	
			//El mismo cliente debe tener el mismo gestor si ya tiene otra cuenta:
				function gestorAnt(dni, gestor){  //funcion para saber si ya existe un DNI que gestor tiene
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
			//El gestor1, gestor2, gestor3, gestor4 pueden tener maximo 100 clientes y el gestor5 maximo 50 clientes
				function clientesGestor(){  //funcion para saber cuantos clientes tiene un gestor
					var totalClientes= 0;
					for (var i=0; i<dniS.length;i++){
						if(gestor==gestorAsig[i]){
							totalClientes++;
						}
					}
					return totalClientes;
				}
			//
			
		//FUNCION PARA AÑADIR AL ARRAY NUEVO CLIENTE: Si pasa todas las validaciones rellenamos con .push():
			function anadir (dni,nombre,apellUno,apell2,cuenta,fecha,saldo,gestor){
				var ok;
				if((totalDnis(dni)<2) && (cuentaExiste(cuenta)==false) && (gestorAnt(dni,gestor)==true)){
					dniS.push(dni);
					nombres.push(nombre);
					apellido1.push(apellUno);
					apellido2.push(apell2);
					numCuenta.push(cuenta);
					fechaAlta.push(fecha);
					saldoCuenta.push(saldo);
					var saldoTotal=0;
					for (var i=0; i<dniS.length;i++){ //Indicamos saldoNeg en funcion del total de los saldos, recorremos el array para sumar los saldos de todas las cuentas de este cliente por DNI	
						if(dni==dniS[i]){
							saldoTotal+= saldoCuenta[i];
						}
					}
					if (saldoTotal<0){
						saldoNeg.push('True');
					} else{
						saldoNeg.push('False');
					}
					gestorAsig.push(gestor);
					ok= true;
				} else{
					ok= false;
				}
				
				for (var i=0; i<dniS.length;i++){ //Modificamos saldoNeg en funcion del total de los saldos, recorremos el array para sumar los saldos de todas las cuentas de este cliente por DNI	
					for(var j=0; j<i; j++){
						if (dniS[i]==dniS[j]){
							saldoNeg[j]= saldoNeg[i];
						}
					}
				}
				
				return ok;
			}
				
		
		//Pasamos clientes con datos:
			var returnOK;
			anadir ('11111A','Cliente1','Apellido1','Apellido1','ES11111',new Date(2016,4,16),-100,'Gestor1');
			anadir ('22222B','Cliente2','Apellido2','Apellido2','ES22222',new Date(2016,5,5),-200,'Gestor1');
			//cliente con cuenta duplicada
			anadir ('22222B','Cliente2','Apellido2','Apellido2','ES22222',new Date(2016,5,23),320,'Gestor2');
			//cliente existente con distinto gestor
			anadir ('22222B','Cliente2','Apellido2','Apellido2','ES22223',new Date(2016,7,13),430,'Gestor2');
			anadir ('22222B','Cliente2','Apellido2','Apellido2','ES22224',new Date(2016,9,14),-300,'Gestor1');				
			anadir ('33333C','Cliente3','Apellido3','Apellido3','ES33333',new Date(2017,1,16),300,'Gestor2');		
			anadir ('33333C','Cliente3','Apellido3','Apellido3','ES33334',new Date(2017,5,2),-200,'Gestor2');
			anadir ('44444D','Cliente4','Apellido4','Apellido4','ES44444',new Date(2017,7,18),400,'Gestor1');
			anadir ('55555E','Cliente5','Apellido5','Apellido5','ES55555',new Date(2017,10,10),-500,'Gestor2');
			anadir ('11111A','Cliente1','Apellido1','Apellido1','ES11112',new Date(2018,10,12),1000,'Gestor1');
			anadir ('44444D','Cliente4','Apellido4','Apellido4','ES44445',new Date(2018,12,10),400,'Gestor1');
			anadir ('66666F','Cliente6','Apellido6','Apellido6','ES66666',new Date(2019,2,10),300,'Gestor1');
			
			var cadena= "DATOS DE LOS CLIENTES INTRODUCIDOS: \n";
			for (var i=0; i<dniS.length; i++){
				cadena+= dniS[i] +" - "+ nombres[i] +" "+ apellido1[i] +" "+ apellido2[i] +" - "+ 
						numCuenta[i] +" - "+ fechaAlta[i].getDate()+"/"+fechaAlta[i].getMonth()+"/"+fechaAlta[i].getFullYear() +" - "+
						saldoCuenta[i] +" - "+ saldoNeg[i] +" - "+ gestorAsig[i] +"\n ";
			}
			alert (cadena);
	
	
	//MENU DEL EJERCICIO:
		var opcion= prompt("Selecciona una de las siguientes opciones: \n" +
							"1. Número clientes por gestor y total clientes. \n" +
							"2. Número de clientes con cuentas en saldo positivo. \n" +
							"3. Número de clientes con cuentas en saldo negativo. \n" +
							"4. DNI, nombre y apellidos del cliente con más saldo. \n" +
							"5. DNI de clientes para llamadas comerciales.");
			while (isNaN(opcion) || opcion<1 || opcion>5){
				opcion= prompt("ERROR. Selecciona una opción correcta: \n" +
							   "1. Número clientes por gestor y total clientes. \n" +
							   "2. Número de clientes con cuentas en saldo positivo. \n" +
							   "3. Número de clientes con cuentas en saldo negativo. \n" +
							   "4. DNI, nombre y apellidos del cliente con más saldo. \n" +
							   "5. DNI de clientes para llamadas comerciales.");
			}
		
		opcion= parseInt(opcion);
		switch (opcion){
			
			case 1:
				var cliGestor1= 0;
				var cliGestor2= 0;
				for (var i=0; i<dniS.length; i++){
					//compruebo que el dni no existe ya para no duplicar clientes
					var dniEx= false; 
					for(var j=0; j<i; j++){
						if (dniS[i]==dniS[j]){
							dniEx= true;
						}
					}
					//si el dni no existe añado cliente al gestor que corresponda
					if (gestorAsig[i]=='Gestor1' && !dniEx){
						cliGestor1++;
					} else if (gestorAsig[i]=='Gestor2' && !dniEx){
						cliGestor2++;
					}
				}
				alert ("1. TOTAL CLIENTES: " + (cliGestor1+cliGestor2)+ "\n" +
					   "Clientes del Gestor 1: " +cliGestor1+ "\n" +
					   "Clientes del Gestor 2: " +cliGestor2);
				break;
				
			case 2:
				var cliCtasPos= 0;
				for (var i=0; i<dniS.length; i++){
					if (saldoCuenta[i]>=0){
						//comprobamos si un cliente tiene 2 cuentas con saldo positivo
						var dni2Pos= false; 
						for(var j=0; j<i; j++){
							if (dniS[i]==dniS[j] && saldoCuenta[j]>=0){
								dni2Pos= true;
							}
						}
						//si las dos son con saldo positivo solo cuenta una
						if (!dni2Pos){
							cliCtasPos++;
						} 
					}
				}
				alert ("2. Número clientes con cuentas en saldo positivo: " + cliCtasPos);
				break;
				
			case 3:
				var cliCtasNeg= 0;
				for (var i=0; i<dniS.length; i++){
					if (saldoCuenta[i]<0){
						//comprobamos si un cliente tiene 2 cuentas con saldo negativo
						var dni2Neg= false; 
						for(var j=0; j<i; j++){
							if ((dniS[i]==dniS[j]) && (saldoCuenta[j]<0)){
								dni2Neg= true;
							}
						}
						//si las dos son con saldo negativo solo cuenta una
						if (!dni2Neg){
							cliCtasNeg++;
						} 
					}
				}
				alert ("3. Número clientes con cuentas en saldo negativo: " + cliCtasNeg);
				break;
				
			case 4:
			// CREO DOS NUEVOS ARRAYS PARA JUNTAR CLIENTES CON DOS CUENTAS Y EL SALDO ACUMULADO
				var saldoAcCli= new Array();
				for (var i=0; i<dniS.length; i++){ //for para calcular el saldo total de cada cliente por dni
					var saldoCli= 0;
					for(var j=0; j<=i; j++){
						if (dniS[i]==dniS[j]){
							saldoCli+= saldoCuenta[j];
						}	
					}
					saldoAcCli.push(saldoCli);
				}
				//Creamos dos nuevos arrays de = longitud: uno con los distintos dniS y otro con su saldo total
				var newDniS= new Array();
				var newSaldos= new Array();
				//for para incluir los dnis repetidos
				for (var i=0; i<dniS.length; i++){
					dniEx= false; //variable booleana para saber si el dni existe
					for (var j=0; j<i; j++){ //recorro para saber que dnis están repetidos
						if (dniS[i]==dniS[j]){
							dniEx= true;
						}
					}
					if (dniEx){ //si el dni está repetido añado a los nuevos arrays el último dni y saldo acumulado
						newDniS.push(dniS[i]);
						newSaldos.push(saldoAcCli[i]);
					}
				}
				//for para incluir los dnis que no estan repetidos, comparando con los que ya existen en los nuevos
				for (var i=0; i<dniS.length; i++){  
					var yadni= false;  //variable booleana para saber si el dni ya existe en el array newDniS
					for (var d=0; d<newDniS.length; d++){
						if (dniS[i]==newDniS[d]){
							yadni= true;
						}
					}
					if (!yadni){  //si el dni no está ya en estos nuevos arrays añado el dni y saldo acumulado
						newDniS.push(dniS[i]);
						newSaldos.push(saldoAcCli[i]);
					}
				}
				// var cadena="Clientes y saldo total \n"; //muestro cada cliente con su saldo total
				// for (var i=0; i<newDniS.length; i++){
					// cadena+= newDniS[i] + newSaldos[i] + "\n";
				// }
				// alert (cadena);
			// COMPARO LOS SALDOS ACUMULADOS PARA EXTRAER EL MAYOR Y MUESTRO EL NOMBRE Y APELLIDOS DEL CLIENTE
				var saldoMax= newSaldos[0];  //variable saldoMaximo comienza con el primer saldo del array newSaldos
				for (var i=0; i<newDniS.length; i++){
					if (newSaldos[i]>saldoMax){
						saldoMax= newSaldos[i];
					}
				}
				var guardoDni;  //variable donde guardo el dni del cliente con mayor saldo
				for (var i=0; i<newDniS.length; i++){
					if (newSaldos[i]==saldoMax){
						guardoDni= newDniS[i];
					}
				}
				//MUESTRO EL NOMBRE Y APELLIDOS DEL DNI GUARDADO
				var yaMostrado= false;
				for(var i=0; i<dniS.length; i++){
					if (dniS[i]==guardoDni && !yaMostrado){
						alert ("4. Cliente con mayor saldo: " +nombres[i]+ " " +apellido1[i]+ " " +apellido2[i]);
						yaMostrado= true;
					}
				}
				break;
				
			case 5:
				var lista= new Array();  //array donde vamos a guardar dnis de clientes con cuentas de más de dos años
				var fecha= new Date();  //fecha del dia de hoy
				var anyoAnt= fecha.getFullYear()-2;  //variable para sacar la fecha de hoy y restarle dos años
				var mes= fecha.getMonth();
				var dia= fecha.getDate();
				var fechaAnt= new Date(anyoAnt, mes, dia);  //fecha dos años antes
				for (var i=0; i<dniS.length; i++){ //recorro el array fechaAlta, si es menor que la fecha hace dos años añado DNI al array lista
					if (fechaAlta[i]<fechaAnt){
						var contDni=0;  //para no repetir dnis creo un contador y si el dni no aparece (=0) lo añado
						for (var l=0; l<lista.length; l++){
							if (dniS[i]==lista[l]){
								contDni++;
							}
						}
						if (contDni==0){
							lista.push(dniS[i]);
						}
					}
				}
				
				alert ("5. CLIENTES PARA LLAMADAS COMERCIALES: \n" +lista.join("\n"));
				break;
		}
			

		