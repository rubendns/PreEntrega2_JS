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

const misBaterias = [
    {
        nombre: "Bateria iPhone 7",
        precio: 11500
    },
    {
        nombre: "Bateria iPhone 7 PLUS",
        precio: 12000
    },
    {
        nombre: "Bateria iPhone 8",
        precio: 12000
    },
    {
        nombre: "Bateria iPhone 8 PLUS",
        precio: 13000
    },
    {
        nombre: "Bateria iPhone X",
        precio: 16000
    },
    {
        nombre: "Bateria iPhone XS",
        precio: 17000
    },
    {
        nombre: "Bateria iPhone XS MAX",
        precio: 19000
    },
    {
        nombre: "Bateria iPhone XR",
        precio: 18000
    },
    {
        nombre: "Bateria iPhone 11",
        precio: 25000
    },
    {
        nombre: "Bateria iPhone 13",
        precio: 29000
    }
];

function verProducto(cod) {
    const bateria = misBaterias[cod - 1];
    if (bateria) {
        console.log(`${bateria.nombre}: $ ${bateria.precio}`);
        alert(`La bateria del ${bateria.nombre} cuesta: $ ${bateria.precio}`);
    } else {
        console.warn("Tu selección no es válida, por favor elige un número del listado");
        alert("Tu selección no es válida, por favor elige un número del listado");
    }
}

function obtenerProductos() {
    let resultado = '';
    misBaterias.forEach((bateria, index) => {
        resultado += `${index + 1} - ${bateria.nombre}\n`;
    });
    return resultado;
}

function buscarBateria() {
    let termino = prompt("Ingresa el término de búsqueda: ");
    let resultados = misBaterias.filter(bateria =>
        bateria.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    if (resultados.length > 0) {
        console.log(`Se encontraron ${resultados.length} resultado(s) para '${termino}':`);
        alert(`Se encontraron ${resultados.length} resultado(s) para '${termino}'.`);
        resultados.forEach((bateria, index) => {
            console.log(`${index + 1}. ${bateria.nombre}: $ ${bateria.precio}`);
            alert(`${bateria.nombre}: $ ${bateria.precio}`);
        });
    } else {
        console.log(`No se encontraron resultados para '${termino}'.`);
        alert(`No se encontraron resultados para '${termino}'.`);
    }
}

function Bienvenido() {
    let opc = prompt(`¿Deseas conocer el precio de la batería de algún modelo de iPhone? \n
                        Seleccione 1 para ver listado\n
                        Seleccione 2 para buscar una batería`);
    if (opc === "1") {
        let opc2 = prompt(`Seleccione un elemento de la lista:\n${obtenerProductos()}`);
        verProducto(opc2);
    } else if (opc === "2") {
        buscarBateria(opc);
    } else {
        console.warn("Tu selección no es válida, por favor elige un número del listado");
        alert("Tu selección no es válida, por favor elige un número del listado");
    }
}