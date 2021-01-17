/*LÓGICA 2BIS*/
/* Este ejercicio, como viste en clase, está hecho entre las tres pero también hay partes que ha hecho solo Nerea Álvarez.
 Todo lo que tiene que ver con los gestores lo ha hecho ella.
 He comentado el código yo para que veas que entiendo las partes que no he hecho yo.
 */
var fecha1 = new Date(1996, 4, 8);
var fecha2 = new Date(1993, 3, 5);
var fecha3 = new Date(2000, 2, 7);
var fecha4 = new Date(2020, 12, 1);
var fecha5 = new Date(2021, 8, 3);

var aDni = new Array("4862a", "0351j", "8496s", "7310c", "9650h");
var aNom = new Array("Lucas", "Mateo", "Juan", "Magdalena", "María");
var aApe1 = new Array("Sánchez", "Pérez", "López", "Martínez", "Alonso");
var aApe2 = new Array("Nuevo", "Merino", "Álvarez", "Robles", "Justel");

//Creamos dos arrays para los números de cuenta porque habrá clientes con más de una cuenta.
//En el caso de los clientes con solo una cuenta, su valor correspondiente en el segundo array será null
var aNumCuenta = new Array("123a", "456b", "789c", "983d", "321t");
var aNumCuenta2 = new Array(null, null, null, "879f", null);

//Dos arrays para guardar el importe de las cuentas para los clientes que tengan más de una
//En el caso de los clientes con solo una cuenta, su valor correspondiente en el segundo array será null
var aImporte = new Array(-150, 150, 300, -300, 450);
var aImporte2 = new Array(null, null, null, 250, null);

//Creamos el array que guardará los valores de saldo negativo
//Los dos contadores, uno para saldo negativo y otro para positivo, son para los case 3 y 4
var aSaldoN = new Array();
var contN = 0;
var contP = 0;
//Recorremos el array de dni
for (var k = 0; k < aDni.length; k++) {
    //Si la suma de los dos importes es mayor que 0, se asignará false al valor, se introducirá en el array y aumenta el contador de positivos
    if(aImporte[k] + aImporte2[k] > 0){
        aSaldoN[k] = false;
        contP++;
    }else{
        //Si la suma es menor que 0, se asigna el valor true, se introduce en el array y aumenta el contador de negativos
        aSaldoN[k] = true;
        contN++;
    }
}

//Creamos el array de fechas con las fechas creadas al principio del script en formato dd/mm/aaaa sin hora
var aFecha = new Array(fecha1.toLocaleDateString(), fecha2.toLocaleDateString(), fecha3.toLocaleDateString(), fecha4.toLocaleDateString(), fecha5.toLocaleDateString());

var aNomGestor = new Array("gestor1", "gestor2", "gestor2", "gestor4", "gestor3");

//Creamos el array clientes y para rellenarlo recorremos el array de los dni
var aClientes = new Array();
for (var i = 0; i < aDni.length; i++) {
    //Si en los arrays aNumCuenta2 y aImporte2 alguno de los valores no está a null se crea el cliente con esos valores
    if(aNumCuenta2[i] !== null && aImporte2[i] !== null){
        aClientes[i] = "Cliente: " + aNom[i] + " " + aApe1[i] + " " + aApe2[i] + ". DNI: " + aDni[i] + ". Número de Cuenta1: " + aNumCuenta[i] + " y número de Cuenta2: " + aNumCuenta2[i] + ". Saldo Negativo: " + aSaldoN[i] + ". Fecha de alta: " + aFecha[i] + ". Total de Cuenta1: " + aImporte[i] +". Total de Cuenta2: " + aImporte2[i] + ". Gestor: " + aNomGestor[i];
    }else{
        //Si el cliente tiene alguno de los valores en null, no los mostramos
        aClientes[i] = "Cliente: " + aNom[i] + " " + aApe1[i] + " " + aApe2[i] + ". DNI: " + aDni[i] + ". Número de Cuenta: " + aNumCuenta[i] + ". Saldo Negativo: " + aSaldoN[i] + ". Fecha de alta: " + aFecha[i] + ". Total de Cuenta: " + aImporte[i] + ". Gestor: " + aNomGestor[i];
    }
    
}
//Comprobamos por consola que los clientes se crean correctamente
console.log(aClientes);

//Pedimos la opción del switch y mostramos el menú de opciones
var opcion = parseInt(prompt("Opción 0: Salida del SCRIPT.\n\
                                Opción 1: Número clientes total por gestor y número de clientes total por sede del banco. \n\
                                Opción 2: Número de clientes que tienen en sus cuentas saldo positivo.\n\
                                Opción 3: Número de clientes que tienen en sus cuentas saldo negativo.\n\
                                Opción 4: DNI, nombre y apellidos del cliente que tiene más saldo en sus cuentas en el banco.\n\
                                Opción 5: DNI de los clientes que deben de llamar para gestiones comerciales\n\
                                Introduzca número de opción:"));

switch (opcion) {

    case 1: //Número clientes por gestor y número de clientes total por sede del banco.
        var lista = "";
        var gest1 = 0;
        var gest2 = 0;
        var gest3 = 0;
        var gest4 = 0;
        var gest5 = 0;
        var acumulador = 0;
        var sede;

        //Recorremos el array de clientes para buscar el valor que indica el gestor de cada uno de los clientes
        for (var j = 0; j < aClientes.length; j++) {

            //Creamos un switch para contar los clientes que tiene cada gestor y acumular los clientes totales del banco
            switch (aNomGestor[j]) {
                case "gestor1":
                    gest1++;
                    acumulador++;
                    break;
                case "gestor2":
                    gest2++;
                    acumulador++;
                    break;
                case "gestor3":
                    gest3++;
                    acumulador++;
                    break;
                case "gestor4":
                    gest4++;
                    acumulador++;
                    break;
                case "gestor5":
                    gest5++;
                    acumulador++;
                    break;
            }
        }
        //Si el acumulador total de clientes no está a 0, mostramos los gestores con su número de clientes y el número total de clientes
        if (acumulador !== 0) {
            if (gest1 !== 0) {
                lista += "El Gestor 1 tiene " + gest1 + " clientes \n";
            }
            if (gest2 !== 0) {
                lista += "El Gestor 2 tiene " + gest2 + " clientes \n";
            }
            if (gest3 !== 0) {
                lista += "El Gestor 3 tiene " + gest3 + " clientes \n";
            }
            if (gest4 !== 0) {
                lista += "El Gestor 4 tiene " + gest4 + " clientes \n";
            }
            if (gest5 !== 0) {
                lista += "El Gestor 5 tiene " + gest5 + " clientes \n";
            }

            sede = (gest1 + gest2 + gest3 + gest4 + gest5);
            lista += "\nEsta SEDE tiene " + sede + " clientes";

            alert(lista);
        } else {
            //Si el acumulador está a 0 mostramos un mensaje
            alert("No hay clientes");
        }
        break;
        
    case 2: //Número de clientes que tienen en sus cuentas saldo positivo.
        alert("El número de clientes con saldo positivo es: " + contP);
        break;
        
    case 3: //Número de clientes que tienen en sus cuentas saldo negativo.
        alert("El número de clientes con saldo negativo es: " + contN);
        break;
        
        
    case 4: //DNI, nombre y apellidos del cliente que tiene más saldo en sus cuentas en el banco
        
        //Creamos las variables mayor, igualada al primer valor del array de importe y posicion para guardar la posición del array en la que se encuentra el cliente con mayor saldo
        var mayor = aImporte[0];
        var posicion;

        //Recorremos el array de clientes
        for (var k = 0; k < aClientes.length; k++) {
            //Si el valor de aImporte2 no es null, es decir, si el cliente tiene dos cuentas
            if(aImporte2[k] !== null){
                //Si la suma de los importes es mayor que el primer valor del array aImporte
                if(aImporte[k] + aImporte2[k] > mayor){
                    //El valor de la variable mayor pasa a ser el resultado de la suma de los dos importes
                    mayor = aImporte[k] + aImporte2[k];
                    //La posición pasa a ser la del cliente en el que esté el for en ese momento
                    posicion = k;
                }    
            }else{
                //Si el cliente solo tiene una cuenta compara el valor del importe con mayor
                if(aImporte[k] > mayor){
                    //Si el importe es mayor se intercambian los valores y la posición pasa a ser la de ese cliente
                    mayor = aImporte[k];
                    posicion = k;
                }
            }
        }
        //Muestra de los valores
        alert("El Cliente: " + aNom[posicion] + " " + aApe1[posicion] + " " + aApe2[posicion] + ". Con DNI: " + aDni[posicion] + ", es quién más dinero tiene en el banco con un saldo de : " + mayor + "€");
        break;
    case 5: //DNI de los clientes que deben de llamar para gestiones comerciales
        //Creamos una variable con la fecha y con el método getTime() obtenemos los milisegundos desde el 01/01/1970 hasta la fecha
        var fecha = new Date(2020, 10, 4).getTime();
        //La variable posicion guardará la posición del array en la que se encuentran los clientes con cuentas antiguas a la fecha
        var posicion;
        //Con la variable lista podremos sacar la información en un alert con el formato que queramos
        var lista = "";
        //Recorremos el array de clientes
        for(var i = 0; i < aClientes.length; i++){
            //Creamos una variable para guardar las fechas que hay en el array pero en milisegundos, para poder compararlas con la fecha antes creada
            var fechaAlta = new Date (aFecha[i]).getTime();
            //Si la fecha antes creada es mayor que la fecha del array que se acabe de pasar a milisegundos
            if(fecha > fechaAlta){
                //Guardamos la posición del array en la que está la fecha y la lista se cambia para mostrar el mensaje que queramos
                posicion = i;
                lista += "El cliente: " + aNom[posicion] + " " + aApe1[posicion] + " " + aApe2[posicion] + ", dni " + aDni[posicion] + ", tiene que llamar para las gestiones comerciales.\n";
            }
        }
         //Mostramos la lista con los datos del array
        alert(lista);
        break;
}