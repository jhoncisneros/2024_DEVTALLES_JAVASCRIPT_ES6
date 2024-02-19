var saludo = "Hola Mundo!";

//ECMAS 5
console.log(saludo.substr(0, 1) === "h"); //false
console.log(saludo.indexOf("x")); //-1 regresa la posicion

//ECMAS 6
console.log(saludo.startsWith("Hola")); // true
console.log(saludo.endsWith("!")); // true
console.log(saludo.includes("x")); //false
console.log(saludo.startsWith("Mu", 5)); //true
console.log(saludo.includes("a", 5)); //false

/***********************************/

let texto = "Hola";

console.log(texto.repeat(2)); //HolaHola
console.log("0".repeat(2)); //00

const ESPACIOS = 12;
let nombres = ["Fernando", "Melissa", "Juan"];
let telefonos = ["988889898", "365236523", "212225452"];

for (i in nombres) {
    let dif = ESPACIOS - nombres[i].length;
    console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}

/*****************************************/

function obtenerNombre() {
    return "Maria Perez";
}

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

let nombre2 = 'Maria';
let nombre3 = "Maria";

console.log(nombre2 === nombre3); //true

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2); // El nombre completo es Maria Perez

let nombreCompleto3 = `El nombre completo es ${obtenerNombre()} ${1 + 2}`;
console.log(nombreCompleto3); // El nombre completo es Maria Perez

let multiLinea = "<h1>Titulo</h1> \n<p>Hola Mundo</p> ";

console.log(multiLinea); //<h1>Titulo</h1><p>Hola Mundo</p>

let multiLinea2 = `<h1 class="algo">${nombre}</h1>
<p>Hola Mundo ${apellido}</p>
Iam Fernando`;

console.log(multiLinea2); //<h1 class="algo">Maria</h1><p>Hola Mundo Perez</p>Iam Fernando

/************************************/

function etiqueta( literales, ...substituciones ){

    console.log( arguments );

    console.log(literales);
    console.log(substituciones);

    let resultado = "";
    for (let i = 0; i < substituciones.length; i++) {
        resultado += literales[i];
        resultado += substituciones[i];
    }

    return resultado;
}

let unidades = 5;
    costo_unitario = 10;

let mensaje = etiqueta`${unidades} lapices cuesta ${ unidades * costo_unitario } pesos`;

console.log(mensaje);

/*****************************************/

let mensaje2 = `Hola \nMundo\\`,

    mensaje3 = String.raw`Hola \nMundo\\`;

// var mensaje4 = String.raw"Hola \nMundo\\"; //ERROR

console.log(mensaje2);
console.log(mensaje3);
// console.log(mensaje4);

/**********************************/

let numero = 10;
// console.log( numero.startsWith("1") ); //ERROR

let texto2 = "Que tal estas Juan!";
console.log( texto2.includes("j") ); //false

let texto3 = 10;
// console.log( texto3.repeat(2) ); //ERROR

let texto10 = "Hola";
let texto11 = 'Hola';
let texto12 = `Hola`;

console.log(texto10 === texto11 === texto12); //false
console.log(texto10 === texto11); //true
console.log(texto10 === texto12); //true
console.log(texto11 === texto12); //true

let nombre10 = "Maria";
let salida1 = `El nombre de ella es ${nombre10}`;
let salida2 = 'El nombre de ella es Maria';

console.log( salida1 === salida2); //true
