const ciudadesDisponibles = new Array('Bogotá','Lima','Santiago','Montevideo');
const paisesDisponibles = ["Colombia","Perú","Chile","Brasil","Argentina","Uruguay","Venezuela"];

let cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de países tenemos ${paisesDisponibles.length} elementos`);

// Remover el primer elemento
ciudadesDisponibles.shift();

// Remover el último elemento
ciudadesDisponibles.pop();

console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

// Filtro de elementos de la lista.
let paisesFiltrados = paisesDisponibles.filter((e) => e == 'Brasil');
console.log(paisesFiltrados);

paisesFiltrados = paisesDisponibles.filter((e) => e == 'Bolivia');
console.log(paisesFiltrados);

paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

// Unificar los elementos de un arreglo en una cadena de caracteres
console.log(paisesDisponibles.join("-"));

// Ordenar la lista
console.log(paisesDisponibles.sort());
console.log(paisesDisponibles);   // Si lo cambia

// Conociendo la posición
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Perú')}`);

let listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log('Lista de países y cuidades:');
console.log(listaPaisesYCiudades);
console.log('Lista de países: ');
console.log(paisesDisponibles);