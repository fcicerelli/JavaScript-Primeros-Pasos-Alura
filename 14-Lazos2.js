const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago', 'Montevideo');
const precioCiudad = new Array(500, 400, 380, 200);

const datos = [
  {
    'ciudad': 'Bogotá',
    'precio': 500
  },
  {
    'ciudad': 'Lima',
    'precio': 400
  },
  {
    'ciudad': 'Santiago',
    'precio': 300
  },
  {
    'ciudad': 'Montevideo',
    'precio': 200
  }
];

const presupuestoDisponible = 500;

let i = 0;
while (i < datos.length && datos[i].precio > presupuestoDisponible) {
  i++;
}

if (i == datos.length) {
  console.log("No tenemos pasajes disponibles");
} else {
  console.log("Puedes comprar pasaje para: " + datos[i].ciudad);
}

// Do While
i = 0;
let ciudadSeleccionada = '';
do {
  if (datos[i].precio <= presupuestoDisponible) {
    ciudadSeleccionada = datos[i].ciudad;
  }
  i++;
} while (i < datos.length && ciudadSeleccionada == '');

if (ciudadSeleccionada == '') {
  console.log("No tenemos pasajes disponibles");
} else {
  console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}