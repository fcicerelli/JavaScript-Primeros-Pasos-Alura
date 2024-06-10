// Palabra const
// Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = "Leandro";
const apellidoPasajero = "Lacruz";

//nombrePasajero = nombrePasajero + " " + apellidoPasajero;
//console.log(nombrePasajero);

// Palabra let
// Espacio de memoria que pueda cambiar durante la ejecución del programa
let nombreComletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreComletoPasajero);

// Palabra var
// Espacio de memoria que pueda cambiar durante la ejecución del programa
// El alcance
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

// Bloque
{
  // palabra let
  let nombreConLet = "Juan García";
  // palabra var
  var nombreConVar = "Carlos Perez";
}
//console.log("Variable con let: " + nombreConLet);
console.log("Variable con var: " + nombreConVar);