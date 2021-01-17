/*LÓGICA 3A*/
var gestores = { //Cada gestor se identifica con su codigo, al aceder con su codigo se de vuelve otro array. Formado por clientes, otro array, Antiguedad y nombre del gestor.
    "CodigoGestor1": { "Clientes": new Array("DNI1", "DNI2", "DNI3", "DNI47"), "Antiguedad": 1, "Nombre": "Pepito" },
    "CodigoGestor2": { "Clientes": new Array("DNI61", "DNI8", "DNI57", "DNI31"), "Antiguedad": 1, "Nombre": "Ramon" },
    "CodigoGestor3": { "Clientes": new Array("DNI129", "DNI23", "DNI13", "DNI14"), "Antiguedad": 0, "Nombre": "Pedro" },
    "CodigoGestor4": { "Clientes": new Array("DNI19", "DNI21", "DNI36", "DNI489"), "Antiguedad": 0, "Nombre": "Alfonso" },
    "CodigoGestor5": { "Clientes": new Array("DNI15", "DNI22", "DNI34", "DNI4", "DNI5", "DNI6"), "Antiguedad": 0, "Nombre": "Jacinto" },
};
 
var clientes = { //Cada cliente se identifica con un DNI, al acceder 
    "DNI1": new Array("Pedro", "Figeras", "Gallego", "IBAN1", "IBAN2", null, new Date(2018, 1, 3), null),
    "DNI2": new Array("Nacho", "del Prado", "Losada", "IBAN3", "IBAN4", null, new Date(2019, 10, 18), null),
    "DNI3": new Array("Pepito", "Grillo", "Del carmen", "IBAN5", "IBAN6", null, new Date(2014, 8, 30), null),
    "DNI4": new Array("Francisco", "Jimenez", "Puente", "IBAN7", "IBAN8", null, new Date(2015, 11, 25), null),
    "DNI5": new Array("Raul", "Nuñez", "Sebastián", "IBAN10", "IBAN9", null, new Date(2017, 5, 12), null),
    "DNI6": new Array("Ana", "Iglesias", "Vega", "IBAN11", null, null, new Date(2019, 5, 29), null)
}

var cuentas = { 
    "IBAN1": 12.4,
    "IBAN2": 150,
    "IBAN3": 11,
    "IBAN4": -14,
    "IBAN5": 12.54,
    "IBAN6": 17.78,
    "IBAN7": 456.4,
    "IBAN8": -895.5,
    "IBAN9": 752.12,
    "IBAN10": -78,
    "IBAN11": 1870,
}


var errores = "";
const clientesMax = 50;//Los clientes maximos que puede tener un gestor con antigüedad
const clientesMin = 20;//Los clientes maximos que puede tener un gestor sin antigüedad
const fechaActual = new Date(2018, 10, 4);//La fecha actua se establece 2 años antes para comprobar si el cliente tiene mas de dos años en el banco o menos

for (var gestor in gestores) {//El for comprueba que los gestores no es excedan de su clientes maximos
    if (gestores[gestor]["Antiguedad"] && gestores[gestor]["Clientes"].length > clientesMax) {//Comprueba que tiene la antiguedad y excede los clientes permitidos para esta, en caso de ser true lo guarda en errores
        errores += "El gestor" + gestores[gestor]["Nombre"] + "(" + gestor + ") supera su máximo de clientes permitidos por antiguedad\n";
    } else if (!gestores[gestor]["Antiguedad"] && gestores[gestor]["Clientes"].length > clientesMin) {//Comprueba que no tiene antiguedad y excede el maximo de clientes para los que no tienen antigueadd, en caso de true guarda en errores
        errores += "El gestor" + gestores[gestor]["Nombre"] + "(" + gestor + ") supera su máximo de clientes permitidos por antiguedad\n";
    }
}

var acum; //Acumulador para el importe de las cuentas
for (var cliente in clientes) {
    acum = cuentas[clientes[cliente][3]];//Saca el IBAN de clientes y lo inserta en cuenta para obtener su saldo y almacenarlo en acum

    if (clientes[cliente][4] != null) {//Saca el segundo IBAN de clientes, si  no es null, lo inserta tambien en acum

        acum += cuentas[clientes[cliente][4]];

    }
    acum >= 0 ? clientes[cliente][5] = false : clientes[cliente][5] = true;//Si acum es positivo establece en false el campo de saldo negativo de cada cliente
    clientes[cliente][7] = acum;//Inserta el importe en cada cliente
}

var codigos = Object.keys(gestores);//Saca todos las claves de gestores

longitud = codigos.length//La longitud de codigos disminuirá por cada iteración, la variable se encarga de guardar la longitud total
//El for se encargara de comprobrar que no se repita un 
for(var i = 0; i< longitud; i++){
    var codigo = codigos.shift();
    var dnis =  gestores[codigo]["Clientes"];
    
    for(var gestor in codigos){  
        for(var dni in dnis){
            if(gestores[codigos[gestor]]["Clientes"].includes(dnis[dni])){
                errores += "El dni "+dnis[dni]+" esta duplicado en el gestor "+codigo+" y en el gestor "+codigos[gestor]+"\n";
            }
        }
    }
}


if (!errores) {
    var texto = "";
    acum = 0;
    var opcion = parseInt(prompt("Introduce el numero 1-2-3-4-5"))
    switch (opcion) {
        case 1:
            for (var gestor in gestores) {
                texto += "El gestor " + gestores[gestor]["Nombre"] + " tiene " + gestores[gestor]["Clientes"].length + " clientes\n";
                acum += gestores[gestor]["Clientes"].length
            }
            texto += "En total el banco tiene " + acum + " clientes";
            alert(texto);
            break;
        case 2:
            for (var cliente in clientes) {
                if (!clientes[cliente][5]) {
                    acum += 1
                }
            }
            alert("El numero de clientes con saldo positivo es: " + acum);
            break;
        case 3:
            for (var cliente in clientes) {
                if (clientes[cliente][5]) {
                    acum += 1
                }

            }
            alert("El numero de clientes con saldo negativo es: " + acum);
            break;
        case 4:
            var max = null;
            var dni = null;

            for (var cliente in clientes) {

                if (clientes[cliente][7] > max && max != null) {
                    max = clientes[cliente][7];
                    dni = cliente;
                } else if (max == null) {
                    max = clientes[cliente][7];
                    dni = cliente;
                }
            }
            alert("La persona con mas saldo en sus cuentas es: " + clientes[dni][0] + " " + clientes[dni][1] + " " + clientes[dni][2]);

            break;
        case 5:
            var fechaTime = fechaActual.getTime();
            for (var cliente in clientes) {
                if (clientes[cliente][6].getTime() < fechaActual) {
                    texto += "El cliente " + cliente + " tiene que llamar para gestiones comerciales\n";
                }
            }
            alert(texto);
            break;
        default: alert("Se ha introducido un numero incorrecto");
    }

} else {
    alert(errores);
}