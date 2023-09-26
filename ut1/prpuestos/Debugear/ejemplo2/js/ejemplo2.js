/**
 * DWEC: Ejemplo 2
 * @author Maria R.F.
 * 
 * Realiza una nueva versión del programa anterior donde en primer lugar se lea el número de nombres que vamos a introducir 
 * (habrá que validar usando la función parseInt() que se trata de un número entero). 
 * 
 * A continuación se leerán tantos nombres como se ha especificado y se mostrarán en una tabla como en el ejercicio anterior. 
 * Por último se pedirá un nombre al usuario, para el cual se quiere averiguar su posición en el array. 
 * 
 * Se informará al usuario de la posición que ocupa el nombre o, en caso de no estar, del error correspondiente.
 */
 
 /* Encontrar los errores del siguiente script, usando el depurador de Google Chrome */

var nombres=[];
var numeroNombres=0; 
var nombreBuscado="",encontrado=false;

 while(numeroNombres==0){
	numeroNombres=parseInt(prompt("¿Cuántos nombres vas a leer?","10"));
 }

for (var i=0;i<numeroNombres;i++){
	nombres[i]=prompt("Introduce un nombre","Agapito ");
} 

nombreBuscado=prompt("¿Qué nombre deseas buscar?","");

for (var i=0;i<nombres.length;i++){
	if(nombres[i] == nombreBuscado){
		encontrado=true;
		alert(nombreBuscado + " está en la posición " + i);
	}
} 

if(!encontrado){
	prompt("No se encuentra el nombre buscado");
}