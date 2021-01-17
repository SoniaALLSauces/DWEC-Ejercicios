/* Autor: Sonia Anton Llanes */
/* Fecha: 19/11/2020 */
/* Practica A - Lógica Programación */


/* 1. Crea un script que haga una estadística del tipo de alimentos que vende con más frecuencia un
supermercado de barrio. Pídele al usuario toda la información que necesites.  */
			alert ("1. ALIMENTOS MÁS VENDIDOS");
		
		//Creo un objeto para guardar los distintos alimentos y su contador
			function Alimento(nombre_in){  
					this.nombre = nombre_in;
					this.contador = 1;  //la primera vez que se crea se cuenta un elemento vendido
				}
		
		//Solicito el primer alimento vendido
			var alimentoVendido= prompt("Introduce el alimento vendido ('fin' para terminar): "); 
				while (!isNaN(alimentoVendido)){
					alimentoVendido= prompt("ERROR, introduzca descripción en letra. \n Introduce el alimento vendido ('fin' para terminar): ");
				}
		
		//Creo array para  
			var arrayAlimentos= new Array();
			arrayAlimentos.push(new Alimento(alimentoVendido));

			
		//Bucle para seguir vendiendo alimentos que finaliza cuando escribo 'fin'
		//Guardo el alimento vendido: si existe aumento el contador, si no existe añado al array un nuevo objeto Alimento
			var existe; //variable para saber si existe o no el alimento en el array
			while(alimentoVendido!="fin"){
				existe= false;
				for (var i=0; i<arrayAlimentos.length; i++){
					if(arrayAlimentos[i].nombre==alimentoVendido){
						// arrayAlimentos[i].contador++;
					} else{
						arrayAlimentos.push(new Alimento(alimentoVendido));
					}
					
				}
				
				alimentoVendido= prompt("Introduce siguiente alimento vendido ('fin' para terminar): "); 
					while (!isNaN(alimentoVendido)){
						alimentoVendido= prompt("ERROR, introduzca descripción en letra. \n Introduce siguiente alimento vendido ('fin' para terminar): ");
					}
			}

			var cadena= "ALIMENTOS: \n";
			for (var i=0; i<arrayAlimentos.length; i++){
				cadena+= arrayAlimentos[i].nombre + arrayAlimentos[i].contador +"\n ";
			}
			alert (cadena);
			
			
			