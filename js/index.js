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

function verPrecio(cod) {
    switch (cod) {
        case "1":
            console.log("Bateria iPhone 7: $ 11500");
            alert("La bateria del iPhone 7 cuesta: $ 11500");
            break;
        case "2":
            console.log("Bateria iPhone 7 PLUS: $ 12000");
            alert("La bateria del iPhone PLUS cuesta: $ 12000");
            break;
        case "3":
            console.log("Bateria iPhone 8: $ 12000");
            alert("La bateria del iPhone 8 cuesta: $ 12000");
            break;
        case "4":
            console.log("Bateria iPhone 8 PLUS: $ 13000");
            alert("La bateria del iPhone 8 PLUS cuesta: $ 13000");
            break;
        case "5":
            console.log("Bateria iPhone X: $ 16000");
            alert("La bateria del iPhone X cuesta: $ 16000");
            break;
        case "6":
            console.log("Bateria iPhone XS: $ 17000");
            alert("La bateria del iPhone XScuesta: $ 17000");
            break;
        case "7":
            console.log("Bateria iPhone XS MAX: $ 19000");
            alert("La bateria del iPhone XS MAX cuesta: $ 19000");
            break;
        case "8":
            console.log("Bateria iPhone XR: $ 18000");
            alert("La bateria del iPhone XR cuesta: $ 18000");
            break;
        case "9":
            console.log("Bateria iPhone 11: $ 25000");
            alert("La bateria del iPhone 11 cuesta: $ 25000");
            break;
        case "10":
            console.log("Bateria iPhone 13: $ 29000");
            alert("La bateria del iPhone 13 cuesta: $ 29000");
            break;
        default:
            console.warn("Tu selección no es válida, por favor elegí un número del listado");
            alert("Tu selección no es válida, por favor elegí un número del listado");
    }
}

function verPrecios() {
    let respuesta = confirm("¿Deseas conocer el precio de la bateria de algun modelo de iPhone?")
    if (respuesta === true) {
        let cod = prompt("Seleccione un numero del listado:");
        console.log(cod);
        verPrecio(cod);
    } else {
        console.warn("No hay problema. Te esperamos cuando gustes :)");
        alert("No hay problema. Te esperamos cuando gustes :)");
    }
}

