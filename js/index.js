let nombre = prompt("Ingresa tu nombre para continuar: ");
if (nombre) {
    alert("Hola " + nombre + ", bienvenido a CAMBIO CAMBIO");
}

function verCuotas() {
    let interes = " sin interes."
    console.log("Podes pagar las baterias en cuotas!!")
    for (let i = 1; i <= 6; i++) {
        if (i > 3) {
            interes = " con interes."
        }
        console.log(i + " cuota(s) " + interes)
    }
}

const misBaterias = {
    "1": {
        nombre: "Bateria iPhone 7",
        precio: 11500
    },
    "2": {
        nombre: "Bateria iPhone 7 PLUS",
        precio: 12000
    },
    "3": {
        nombre: "Bateria iPhone 8",
        precio: 12000
    },
    "4": {
        nombre: "Bateria iPhone 8 PLUS",
        precio: 13000
    },
    "5": {
        nombre: "Bateria iPhone X",
        precio: 16000
    },
    "6": {
        nombre: "Bateria iPhone XS",
        precio: 17000
    },
    "7": {
        nombre: "Bateria iPhone XS MAX",
        precio: 19000
    },
    "8": {
        nombre: "Bateria iPhone XR",
        precio: 18000
    },
    "9": {
        nombre: "Bateria iPhone 11",
        precio: 25000
    },
    "10": {
        nombre: "Bateria iPhone 13",
        precio: 29000
    }
};

function verProducto(cod) {
    const bateria = misBaterias[cod];
    if (bateria) {
        console.log(`${bateria.nombre}: $ ${bateria.precio}`);
        alert(`La bateria del ${bateria.nombre} cuesta: $ ${bateria.precio}`);
    } else {
        console.warn("Tu selección no es válida, por favor elige un número del listado");
        alert("Tu selección no es válida, por favor elige un número del listado");
    }
}

function obtenerPrecio(cod) {
    const bateria = misBaterias[cod];
    return `${bateria.precio}`;
}

function obtenerProductos() {
    let resultado = '';
    for (let clave in misBaterias) {
        resultado += `Clave: ${clave}, Nombre: ${misBaterias[clave].nombre}, Precio: ${misBaterias[clave].precio}\n`;
    }
    return resultado;
}

function bienvenida() {
    let opc=prompt(`¿Deseas conocer el precio de la bateria de algun modelo de iPhone? \n Seleccione un numero del listado:\n
    ${obtenerProductos()}`);   
}