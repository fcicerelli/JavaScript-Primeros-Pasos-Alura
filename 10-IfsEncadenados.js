const ciudadDestino = 'Lima';
const ciudadesDisponibles = new Array('Bogotá','Lima','Santiago','Montevideo');


let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasaje para ${ciudadDestino} y el pasajero tiene ${edadPasajero} años`);
if (edadPasajero >= 18 || estaAcompanado) {
  if (ciudadesDisponibles.indexOf(ciudadDestino) >=-1) {
    console.log('Pasaje disponible para venta');
  } else {
    console.log('Ciudad no disponible para viajar');
  }
} else {
  if (edadPasajero >= 16 && ciudadDestino == "Lima") {
    console.log('Pasaje disponible para venta (Lima)');
  } else {
    console.log('El pasajero no cumple las reglas');
  }
}