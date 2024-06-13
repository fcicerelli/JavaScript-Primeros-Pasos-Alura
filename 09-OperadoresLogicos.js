// Operadores de comparación

const ciudadDestino = 'Lima';
const ciudadesDisponibles = new Array('Bogotá','Lima','Santiago','Montevideo');

// Palabra reservada if
// Evalua una condición
//console.log(`Verificando pasajer para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
  //console.log('Pasaje disponible para venta');
} else {
  //console.log('Ciudad no disponible para viajar');
}

const valorPasaje = "1000";

if (valorPasaje === 1000) {
  //console.log("El pasaje vale 1000");
} else {
  //console.log("El pasaje No vale 1000");
}

// Operadores lógicos
// AND = &&
// OR = ||
// NOT = !

let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasaje para ${ciudadDestino} y el pasajero tiene ${edadPasajero} años`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) >=-1) &&
    (edadPasajero >= 18 || estaAcompanado)) {
  console.log('Pasaje disponible para venta');
} else {
  console.log('Ciudad no disponible para viajar o pasajero no cumple requisitos');
}

edadPasajero = 17;
estaAcompanado = false;

// Aplicando lógica negativa
if (!((ciudadesDisponibles.indexOf(ciudadDestino) >=-1) &&
    (edadPasajero >= 18 || estaAcompanado))) {
  console.log('Ciudad no disponible para viajar o pasajero no cumple requisitos');
} else {
  console.log('Pasaje disponible para venta');
}
