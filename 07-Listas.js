const ciudad1 = "Bogotá";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

// Definición de una lista con tipo de dato alfanumérico
const ciudadesDisponibles = new Array('Bogotá','Lima','Santiago');
//console.log(ciudadesDisponibles);

// Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Perú","Chile","Brasil","Argentina"];;
//console.log(paisesDisponibles);

// Push: Agrega item al final
paisesDisponibles.push('Uruguay');
ciudadesDisponibles.push('Montevideo');

//console.log(ciudadesDisponibles);
//console.log(paisesDisponibles);

// Unshift: Agrega item al principio
paisesDisponibles.unshift('Ecuador');
ciudadesDisponibles.unshift('Quito');

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

paisesDisponibles.splice(1,2,'Venezuela','Paraguay');
console.log(paisesDisponibles);

// Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

paisesDisponibles.slice(1,2,'Venezuela','Paraguay');
console.log(paisesDisponibles);