/*LÓGICA 3*/
/* 
	Autor.- Javier Nieto Lorenzo
	Fecha.- 2020-11-04
*/
	/*var banco = new Array(5);
	
	for (i=0;i<banco.length;i++){
		banco[i]= new Array ();
	}
	
	var cliente
	
	
	for(var clave in coche) {
		
	}*/
	
//var cuenta1 = {"dni":"12345678X","nombre":"Fernando","saldo":0};
//var cuenta2 = {"dni":"89101112P","nombre":"Pepito","saldo":0};




var cuentasCliente1= new Array({dni:"11111111X",nombre:"Fernando",apellido1:"García",apellido2:"Salgado",numeroCuenta:"1",fechaAlta:"2020-05-10",saldo:2000.50},{dni:"11111111X",nombre:"Fernando",apellido1:"García",apellido2:"Salgado",numeroCuenta:"2",fechaAlta:"2020-05-10",saldo:-50});
var cuentasCliente2= new Array({dni:"22222222P",nombre:"Martina",apellido1:"Perez",apellido2:"Nuevo",numeroCuenta:"3",fechaAlta:"2018-06-10",saldo:500});
var cuentasCliente3= new Array({dni:"33333333J",nombre:"Mario",apellido1:"Anta",apellido2:"Zapatero",numeroCuenta:"4",fechaAlta:"2017-10-05",saldo:1000},{dni:"33333333J",nombre:"Mario",apellido1:"Anta",apellido2:"Zapatero",numeroCuenta:"4",fechaAlta:"2017-10-10",saldo:-5000});
var cuentasCliente4= new Array({dni:"44444444K",nombre:"Leticia",apellido1:"Lopez",apellido2:"Manjon",numeroCuenta:"5",fechaAlta:"2020-05-10",saldo:2000.50},{dni:"44444444K",nombre:"Leticia",apellido1:"Lopez",apellido2:"Manjon",numeroCuenta:"6",fechaAlta:"2020-05-10",saldo:5000});
var cuentasCliente5= new Array({dni:"55555555L",nombre:"Marcos",apellido1:"Rodriguez",apellido2:"Fernandez",numeroCuenta:"7",fechaAlta:"2018-05-10",saldo:20.75},{dni:"55555555L",nombre:"Marcos",apellido1:"Rodriguez",apellido2:"Fernandez",numeroCuenta:"8",fechaAlta:"2019-04-10",saldo:-100});



var gestor1 = new Array(cuentasCliente1);
var gestor2 = new Array(cuentasCliente2);
var gestor3 = new Array(cuentasCliente3);
var gestor4 = new Array(cuentasCliente4);
var gestor5 = new Array(cuentasCliente5);

var banco = new Array(gestor1,gestor2,gestor3,gestor4,gestor5);

//Recorremos el array con un for each
/*for(var clave in gestor1) {
	for var clave2 in gestor1[clave]{
		document.write(clave2+": " +clave2["dni"]);
	}
}*/

//document.write(banco[0][0][0]["dni"]+ "<br>");
/*
for(var clave in gestor1) { // clave es gestor1[1-5]["dni"];
	for(var clave2 in gestor1[clave]){
	document.write("gestor1"+"["+clave+"]"+"["+clave2+"]"+": " +gestor1[clave][clave2]["dni"]+ "<br>");
	document.write("gestor1"+"["+clave+"]"+"["+clave2+"]"+": " +gestor1[clave][clave2]["nombre"]+ "<br>");
	document.write("gestor1"+"["+clave+"]"+"["+clave2+"]"+": " +gestor1[clave][clave2]["saldo"]+ "<br>");
	}
}	*/
/*
for (var clave in banco){
	document.write("Gestor " + clave +"<br>");
	var gestor = banco[clave];
	for(var clave1 in gestor) { // clave es gestor1[1-5]["dni"];
		var cliente = banco[clave][clave1];
		for(var clave2 in cliente){
		document.write("banco"+"["+clave+"]"+"["+clave2+"]"+"["+clave2+"]"+": " +banco[clave][clave1][clave2]["dni"]+ "<br>");
		document.write("banco"+"["+clave+"]"+"["+clave2+"]"+"["+clave2+"]"+": " +banco[clave][clave1][clave2]["nombre"]+ "<br>");
		document.write("banco"+"["+clave+"]"+"["+clave2+"]"+"["+clave2+"]"+": " +banco[clave][clave1][clave2]["apellido1"]+ "<br>");
		document.write("banco"+"["+clave+"]"+"["+clave2+"]"+"["+clave2+"]"+": " +banco[clave][clave1][clave2]["apellido2"]+ "<br>");
		document.write("banco"+"["+clave+"]"+"["+clave2+"]"+"["+clave2+"]"+": " +banco[clave][clave1][clave2]["numeroCuenta"]+ "<br>");
		document.write("banco"+"["+clave+"]"+"["+clave2+"]"+"["+clave2+"]"+": " +banco[clave][clave1][clave2]["fechaAlta"]+ "<br>");
		document.write("banco"+"["+clave+"]"+"["+clave2+"]"+"["+clave2+"]"+": " +banco[clave][clave1][clave2]["saldo"]+ "<br>");
		}
	}
	
}*/

var opcion=parseInt(prompt("Opción 1: Número clientes total por gestor y número de clientes total por sede del banco \nOpción 2: Número de clientes que tienen en sus cuentas salgo positivo \nOpción 3: Número de clientes que tienen en sus cuentas salgo negativo \nOpción 4: DNI, nombre y apellidos del cliente que tiene más saldo en sus cuentas en el banco. \nOpción 5: DNI de los clientesque deben de llamar para gestiones comerciales:"));
switch(opcion){
	case 1:
		// Opcion 1
		var salida = "";
		var contClientesBanco = 0;

		for (var clave in banco) {
			var gestor = banco[clave];
			var contClientesBancoGestor = 0; // inicializoo el contador declientes por gestor a 0
			for (var clave1 in gestor) { // clave es gestor1[1-5]["dni"];
				//var cliente = banco[clave][clave1];

				contClientesBancoGestor++; // cuento los lientes por gestor
				contClientesBanco++; // cuento el numero de clientes totales


			}
			salida += "El Gestor " + clave + " tiene " + contClientesBancoGestor + " clientes \n";
		}
		salida += "El total de clientes en el banco es  " + contClientesBanco + " clientes \n";
		alert(salida);

		break;

	case 2:
		// Opcion 2
		var contadorCuentasPositivas = 0;

		for (var clave in banco) {
			var gestor = banco[clave];
			for (var clave1 in gestor) { // clave es gestor1[1-5]["dni"];
				var cliente = banco[clave][clave1];
				var sumaCuentas = 0; // inicializo a 0 la suma de los saldos de cuentas
				for (var clave2 in cliente) {
					sumaCuentas += cliente[clave2]["saldo"];
				}
				if (sumaCuentas > 0) { // si la suma de las cuentas es positiva
					contadorCuentasPositivas++; // añado uno mas al contador de clientes con saldo positivo
				}

			}

		}
		alert("El numero de cuentas con saldo positivo es " + contadorCuentasPositivas + "\n");
		break;

	case 3:
		// Opcion 3
		var contadorCuentasNegativas = 0;

		for (var clave in banco) {
			var gestor = banco[clave];
			for (var clave1 in gestor) { // clave es gestor1[1-5]["dni"];
				var cliente = banco[clave][clave1];
				var sumaCuentas = 0; // inicializo a 0 la suma de los saldos de cuentas
				for (var clave2 in cliente) {
					sumaCuentas += cliente[clave2]["saldo"]; // acumulo la suma de los saldos de las cuentas del cliente
				}
				if (sumaCuentas < 0) { // si la suma de las cuentas es negativa
					contadorCuentasNegativas++; // añado uno mas al contador de clientes con saldo negativo
				}

			}

		}
		alert("El numero de cuentas con saldo negativo es " + contadorCuentasNegativas + "\n");
		break;

	case 4:
		// Opcion 4	
		var maximoImporte = 0;
		var dniCliente = "";
		var nombreCliente = "";
		var apellido1Cliente = "";
		var apellido2Cliente = "";

		for (var clave in banco) {
			var gestor = banco[clave];
			for (var clave1 in gestor) { // clave es gestor1[1-5]["dni"];
				var cliente = banco[clave][clave1];
				var sumaCuentas = 0;
				for (var clave2 in cliente) {
					sumaCuentas += cliente[clave2]["saldo"]; // sumo los saldos de las cuentas del cliente

				}
				if (sumaCuentas > maximoImporte) { //si el importe mazximo de las dos cuentas del cliente es mayor que las del cliente anterior guardo los datos del cliente
					dniCliente = banco[clave][clave1][clave2]["dni"];
					nombreCliente = banco[clave][clave1][clave2]["nombre"];
					apellido1Cliente = banco[clave][clave1][clave2]["apellido1"];
					apellido2Cliente = banco[clave][clave1][clave2]["apellido2"];
					maximoImporte = sumaCuentas; // cambio el valor de el maximo importe para el nuevo importe maximo
				}


			}

		}
		alert("Los datos del cliente con mas saldo en sus cuentas son \n" + "DNI: " + dniCliente + ",\nNombre " + nombreCliente + ",\nPrimer Apellido: " +apellido1Cliente+",\nSegundo Apellido: "+apellido2Cliente);
	break;

	case 5:
	//var diferenciaDias=
	var fechaAComparar= new Date("2020-11-04");
	var clienteComercial=false;
	var salida="El dni de los clientes a los que se dirigen las gestiones comerciales son: \n";

	for (var clave in banco){
		var gestor = banco[clave];
		for(var clave1 in gestor) { // clave es gestor1[1-5]["dni"];
			var cliente = banco[clave][clave1];
			clienteComercial=false; // lo pongo a false para que cada vez que acabe con un cliente me compruebe las cuentas
			for(var clave2 in cliente){
				
				if(!clienteComercial){ // si es false comprueba la cuenta
					var fechaAlta= new Date(cliente[clave2]["fechaAlta"]); // creo un objeto Date con la fecha de alta de la cuenta
					var diferenciaAnyos=(fechaAComparar.getTime()-fechaAlta.getTime()) / (1000*60*60*24)/360 ; // compruebo la diferencia de años que hay entre el 4-Noviembre-2020
					if(diferenciaAnyos>2){ // si la diferencia de alguna de las cuentas es mayor a 2 años 
						salida+=cliente[clave2]["dni"]+"\n"; // meto el dni en la variable de salida
						clienteComercial=true; // pongo el valor de la variable a true para que si la primera cuenta cumple con que la fecha de alta es mayor que 2 no compruebe la segunda cuenta
					}
				}
			}
		}
	}	
	alert(salida);
	break;
}
	
	
	
	
	
	
	
	