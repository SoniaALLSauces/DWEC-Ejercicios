/*LÓGICA 2*/
/*
	Autor.- Susana Fabián Antón
	Fecha.- 29/10/2020
*/

/* 
	ESTRUCTURA DEL ARRAY CLIENTE:
	
	[0] DNI => String
	[1] Nombre => String
	[2] Apellido 1 => String
	[3] Apellido 2 => String
	[4] Número de cuenta 1 => String
	[5] Número de cuenta 2 => String
	[6] Saldo negativo => Boolean (calcular)
	[7] Fecha de alta => Date
	[8] Importe total de las cuentas => Float
*/


//arrays de clientes
	//declaración e inicilización de variables
	var aClientes = Array(); //array que almacenará todos los clientes del banco
	var aCliente1 = Array("69884633F", "Mikel", "Alcala", "Cruz", "ES1601285515985272494378", null, false, new Date(2020, 4, 28), 2000);
	var aCliente2 = Array("97909983H", "Rodrigo", "Chen", "Casas", "ES1321030822160044427632", null, false, new Date(2019, 1, 14), 3500);
	var aCliente3 = Array("17575203Y", "Francisco Manuel", "Velazquez", "Marrero", "ES8420484441820166933993", null, false, new Date(2020, 0, 3), -400);
	var aCliente4 = Array("09466851M", "Juan Jesus", "Conde", "Rincon", "ES5720483629520529441008", "ES5720951417261488326098", false, new Date(2018, 2, 4), 12000);
	var aCliente5 = Array("46871553Z", "Jose Ramon", "Da Silva", "Poveda", "ES0201820907351035606853", null, false, new Date(2020, 10, 30), 8000);
	var aCliente6 = Array("68882388X", "Helena", "Tejero", "Silva", "ES9401828048906053576051", "ES0220804561059560507191", false, new Date(2015, 4, 11), 22000);
	var aCliente7 = Array("63194069M", "Joaquim", "Millan", "Falcon", "ES7601822267542872098118", null, false, new Date(2017, 8, 15), -1500);
	var aCliente8 = Array("07176371A", "Nuria", "Aranda", "Velazquez", "ES1620854351020696780951", null, false, new Date(2019, 7, 19), -800);
	var aCliente9 = Array("43528917Z", "Jon", "Quesada", "Gimeno", "ES5120800308482420944552", "ES6921006772244698075816", false, new Date(2018, 3, 21), 11500);
	var aCliente10 = Array("51431202M", "Juan Ramon", "Rojo", "Carrion", "ES8820950597216782629695", "ES5120856780635128318647", false, new Date(2016, 3, 15), 15000);
	
	//almacenamos los clientes creados en aClientes
	aClientes.push(aCliente1, aCliente2, aCliente3, aCliente4, aCliente5, aCliente6, aCliente7, aCliente8, aCliente9, aCliente10);
	
	//calculamos los saldos positivos y negativos
	for(var i=0; i<aClientes.length; i++) { //recorremos el vector de clientes
		if(aClientes[i][8] < 0) { //si el saldo del cliente es negativo
			aClientes[i][6] = true; //cambiamos el valor del campo 'saldo negativo' a true
		}
	}
	
//arrays de gestores
	//declaración e inicilización de variables
	var aGestor1 = Array();
	var aGestor2 = Array();
	var aGestor3 = Array();
	var aGestor4 = Array();
	var aGestor5 = Array();

	//añadimos los clientes a los gestores -> FALTARÍAN COMPROBACIONES (num máxmo de clientes x gestor, un únicio gestor para cada cliente)
	aGestor1.push(aCliente1,aCliente2,aCliente3);
	aGestor2.push(aCliente4,aCliente5);
	aGestor3.push(aCliente6, aCliente7);
	aGestor4.push(aCliente8);
	aGestor5.push(aCliente9,aCliente10);
	
//menú
	//declaración e inicilización de variables
	var menu = //cadena que contiene el texto a mostrar en el menú
		"1. Número clientes total por gestor y número de clientes total por sede del banco\n" + 
		"2. Número de clientes que tienen en sus cuentas saldo positivo\n" +
		"3. Número de clientes que tienen en sus cuentas saldo negativo\n" +
		"4. DNI, nombre y apellidos del cliente que tiene más saldo en sus cuentas en el banco.\n" +
		"5. DNI de los clientes que deben de llamar para gestiones comerciales\n" +
		"0. Salir\n";
		
		;
	var opcion = 0; //entero que contiene la opción introducida por el usuario	

	//código de ejecución de la aplicación
	do {
		opcion = parseInt(prompt(menu + "\n¿Qué quieres hacer?"));
		switch(opcion) {
			case 0:
				alert("Adiós");
				break;
				
			case 1: //número de clientes que tiene el banco y cada uno de los gestores
				alert(
					"El gestor 1 tiene un total de " + aGestor1.length + " clientes\n" + //miramos el número de clientes que tiene el gestor 1
					"El gestor 2 tiene un total de " + aGestor2.length + " clientes\n" + //miramos el número de clientes que tiene el gestor 2
					"El gestor 3 tiene un total de " + aGestor3.length + " clientes\n" + //miramos el número de clientes que tiene el gestor 3
					"El gestor 4 tiene un total de " + aGestor4.length + " clientes\n" + //miramos el número de clientes que tiene el gestor 4
					"El gestor 5 tiene un total de " + aGestor5.length + " clientes\n" + //miramos el número de clientes que tiene el gestor 5
					"El banco tiene un total de " + aClientes.length + " clientes\n" //miramos el número de clientes que tiene el banco
				);
				break;
				
			case 2: //número de clientes con saldo positivo
				var contador = 0;
				for(var i=0; i<aClientes.length; i++) { //recorremos el array de clientes 
					if(!aClientes[i][6]){
						contador++; //contamos los clientes que tienen saldo positivo
					}
				}
				alert("En el banco hay " + contador + " clientes con saldo positivo en sus cuentas");
				break;
				
			case 3: //número de clientes con tienen saldo negativo
				var contador = 0;
				for(var i=0; i<aClientes.length; i++) { //recorremos el array de clientes
					if(aClientes[i][6]){
						contador++; //contamos los clientes que tienen saldo negativo
					}
				}
				alert("En el banco hay " + contador + " clientes con saldo negativo en sus cuentas");
				break;
				
			case 4: //cliente con más saldo
				var maxSaldo = aClientes[0][8]; //variable en la que almacenamos el saldo máximo encontrado en el banco
				var indexMax = 0; //índice del cliente con el saldo máximo del banco
				
				for(var i=0; i<aClientes.length; i++) { //recorremos el array de clientes
					if(aClientes[i][8] > maxSaldo){ //si el saldo de este cliente es mayor que el saldo máximo almacenado
						maxSaldo = aClientes[i][8]; //guardamos el nuevo valor máximo en nuestra variable maxSaldo
						indexMax = i; //indicamos el índice del cliente con el nuevo saldo máximo
					}
				}
				alert("El cliente con más saldo en sus cuentas del banco es " + aClientes[indexMax][1] + " " + aClientes[indexMax][2] + " " + aClientes[indexMax][3] + ", con DNI " + aClientes[indexMax][0]);
				break;
				
			case 5:
				var fecha = new Date(); //objeto Date que contendrá la fecha de hace dos años
				fecha.setFullYear(fecha.getFullYear() - 2); //calculamos la fecha de hace dos años y la almacenamos en fecha
				var clientes = ""; //cadena que contendrá los DNI de los clientes que tienen pendientes destiones comerciales
				
				for(var i=0; i<aClientes.length; i++) { //recorremos el array de clientes
					if(aClientes[i][7] < fecha){ //si la fecha de alta de este cliente es anterior a hace dos años
						clientes += aClientes[i][0] + ", ";
					}
				}
				alert("Los clientes con DNI " + clientes + "deben llamar para atender a gestiones comerciales");
				break;
				
			default:
				alert("La opcion introducida no existe");		
		}
	}while(opcion!=0);