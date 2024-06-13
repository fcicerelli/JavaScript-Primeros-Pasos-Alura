// Operadores de comparación

const ciudadDestino = 'lima';
const ciudadesDisponibles = new Array('Bogotá','Lima','Santiago','Montevideo');

// Palabra reservada if
// Evalua una condición
console.log(`Verificando pasajer para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
  console.log('Pasaje disponible para venta');
} else {
  console.log('Ciudad no disponible para viajar');
}

const valorPasaje = "1000";

if (valorPasaje === 1000) {
  console.log("El pasaje vale 1000");
} else {
  console.log("El pasaje No vale 1000");
}