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
        resultado += `${clave} - ${misBaterias[clave].nombre}\n`;
    }
    return resultado;
}

function buscarBateria() {
    let termino = prompt("Ingresa el término de búsqueda: ");
    let resultados = [];

    for (let clave in misBaterias) {
        let nombreBateria = misBaterias[clave].nombre;
        if (nombreBateria.toLowerCase().includes(termino.toLowerCase())) {
            resultados.push(misBaterias[clave]);
        }
    }

    if (resultados.length > 0) {
        console.log(`Se encontraron ${resultados.length} resultado(s) para '${termino}':`);
        for (let i = 0; i < resultados.length; i++) {
            console.log(`${i + 1}. ${resultados[i].nombre}: $ ${resultados[i].precio}`);
        }
        alert(`Se encontraron ${resultados.length} resultado(s) para '${termino}'.`);
    } else {
        console.log(`No se encontraron resultados para '${termino}'.`);
        alert(`No se encontraron resultados para '${termino}'.`);
    }
}

function Bienvenida() {
    let opc = prompt(`¿Deseas conocer el precio de la batería de algún modelo de iPhone? \n
                        Seleccione 1 para ver listado\n
                        Seleccione 2 para buscar una batería`);

    if (opc === "1") {
        let opc2 = prompt(`${obtenerProductos()}`);
        verProducto(opc2);
    } else if (opc === "2") {
        buscarBateria(opc);
    } else {
        console.warn("Tu selección no es válida, por favor elige un número del listado");
        alert("Tu selección no es válida, por favor elige un número del listado");
    }
}
