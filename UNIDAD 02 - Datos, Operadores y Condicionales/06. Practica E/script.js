/* Autor: Sonia Anton Llanes */
/* Fecha: 23/10/2020 */
/* Practica E - FOR */

/* 1. Realiza un script que muestre la siguiente figura:
  *
 ***
*****
 */
		var cadena="";
		var filas= 3;
		for(var alto=1; alto<=filas; alto++) {  
			for (var esp=1; esp<=filas-alto; esp++){  //espacios
				cadena+= " ";
			}
			for (var ast=1; ast<=(alto*2)-1; ast++){  //asteriscos 
			//realmente busque el código en internet hasta que encontre uno que funcionase
			//tiene su logica ya que necesito en cada línea un numero impar de asteriscos: el doble de la línea en la que estoy menos 1
			// en la línea 1 necesito 1*2-1=1 asterisco
			// en la línea 2 necesito 2*2-1=3 asteriscos......
				cadena+= "*";
			}
			cadena+= "\n";  
		}  
 
		alert (cadena);
 

 /* 2. Realiza un script que muestre la siguiente figura:
  *
 ***
*****
 ***
  *
 */
		var cadena="";
		var filas= 3;
		//triangulo creciente:
		for(var alto=1; alto<=filas; alto++) {
			for (var esp=1; esp<=filas-alto; esp++){  //espacios
				cadena+= " ";
			}
			for (var ast=1; ast<=(alto*2)-1; ast++){  //asteriscos 
				cadena+= "*";
			}
			cadena+= "\n";  
		}
		//triangulo menguante:
		for(var alto=filas-1; alto>=1; alto--) {  
			for (var esp=filas-alto; esp>=1; esp--){  //espacios
				cadena+= " ";
			}
			for (var ast=(alto*2)-1; ast>=1; ast--){  //asteriscos 
				cadena+= "*";
			}			
			cadena+= "\n";  
		}  
 
		alert (cadena);
		

/* 3. Realiza un script que muestre la siguiente figura:
  *
 * *
*   *
 * *
  * 
*/
		var cadena= "";
		var filas= 3;
			//primera línea
			for (var esp=1; esp<=filas; esp++){  //espacios primera línea
				cadena+= " ";
			}
			cadena+= "* \n";
			//triangulo creciente:
			for (var alto=1; alto<=filas-2; alto++){  //primer asterisco de la línea
				for(var esp=(alto*2)-1; esp>=1; esp--){  //espacios exterior
					cadena+= " ";
				}
				cadena+= "*";
				for (var esp=1; esp<=(alto*2)-1; esp++){  //espacios interior
					cadena+= " ";
				}
				cadena+= "* \n";  //ultimo asterisco de la línea
			}
			//linea central:
				cadena+= "*";
				for (var esp=(alto*2)-1; esp>=1; esp--){  //espacios interior
					cadena+= " ";
				}
				cadena+= "* \n";
			//triangulo menguante:
			for (var alto=filas-2; alto>=1; alto--){  //primer asterisco de la línea
				for (var esp=1; esp<=(alto*2)-1; esp++){  //espacios exterior
					cadena+= " ";
				}
				cadena+= "*";
				for (var esp=(alto*2)-1; esp>=1; esp--){  //espacios interior
					cadena+= " ";
				}
				cadena+= "* \n";  //ultimo asterisco de la línea
			}
			//ultima línea
			for (var esp=1; esp<=filas; esp++){  //espacios ultima línea
				cadena+= " ";
			}
			cadena+= "*";
		
		alert (cadena);
 
 
		
		
		
		
		
		
 