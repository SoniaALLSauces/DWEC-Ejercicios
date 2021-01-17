//1
var text1 = prompt("Introduce un texto para comprobar si es exactametne igual al siguiente.");
var text2 = prompt("Introduce un texto para comprobar si es exactametne igual al anterior.");

if (text1.length === text2.length) {
    if (text1 === text2) {
        alert("Los textos son iguales");
    } else {
        alert("ERROR los textos no son iguales");
    }
} else {
    alert("ERROR los textos tienen el mismo tamaño");
}

//1
var string1 = prompt("Introduce una cadena: ");
        var string2 = prompt("Introduce otra cadena: ");
        
        var iguales = true;
        
        if(string1.length == string2.length){

            for(var i=0; i<string1.length && iguales; i++){
                if(string1.charAt(i) != string2.charAt(i)){
                    iguales = false;
                }
            }

            if(iguales){
                alert("Las cadenas son iguales.");
            }else{
                alert("Las cadenas son diferentes.");
            }

        }else{
            alert("Las cadenas no tienen la misma longitud.");
        }

//2
var frase = prompt("Introduce cadena de caracteres");
var palabra1="", palabra2="";
if(frase.length%2==0){
	for(var i=0;i<frase.length/2;i++){
		palabra1+=frase.charAt(i);
	}
	for(var i=frase.length/2;i<frase.length;i++){
		palabra2+=frase.charAt(i);
	}
	if(palabra1==palabra2){
		alert("Son iguales "+palabra1+", "+palabra2);
	}else{
		alert("No son iguales "+palabra1+", "+palabra2);
	}
}else{
	frase+=" ";
	alert("Se ha añadido un espacio al final "+frase+".");
}

//3
var OK = false;
var lista = "";
var cadena = "";
var dividir;
var contador = 0;

do {
    cadena = prompt("Introduzca una cadena de 5 palabras");
    dividir = cadena.split(" ");
    if (dividir.length === 5) {
        for (var i = 0; i < dividir.length; i++) {
            if (dividir[i][0] === dividir[1][0]) {
                contador++;
            }
            lista = lista + (i + 1) + "º palabra: " + dividir[i][0] + "\n";
        }
    } else {
        alert("Introzuca una frase de 5 palabras, por favor");
    }

    if (contador === 5) {
        alert("OK");
    } else {
        alert(lista);
    }

} while (dividir.length !== 5)

//4
var cadena = prompt("Introduce una cadena");

var texto = "";
var letras = "aeiouAEIOU"
var contador;
for (var i = 0; i < letras.length; i++) {
    contador = 0;
    for(var j = 0; j < cadena.length; j++){
        if(cadena.charAt(j) == letras.charAt(i)){
            contador++;
        }
    }
    texto += "Nº de apariciones de "+letras.charAt(i)+": "+contador+"\n";
}
alert(texto);

