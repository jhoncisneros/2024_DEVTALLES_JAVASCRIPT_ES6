//*************************
//9. segmentos de caracteres - startwith - endwith - includes
//**********************

//ECM 5
var saludo = "Hola Mundo!";

console.log(saludo.substring(0, 1) === "H"); //true - para saber si la palabra comienza con H MAY
console.log(saludo.substring(0, 1) === "h"); //false - para saber si la palabra comienza con H MAY

//*************************
// ECM 6

console.log(saludo.startsWith("H")); // true - para saber si la palabra comienza con H MAY
console.log(saludo.startsWith("Hola")); // true - para saber si la palabra comienza con Hola
console.log(saludo.endsWith("!")); // true - para saber en que palabra termina

//*************************
//EMC5
console.log(saludo.indexOf("x")); //-1 - regresa un entero (-1 si no lo encontro)

//EMC6
console.log(saludo.includes("x")); // false - retorna boolean
console.log(saludo.startsWith("Mu")); // false
console.log(saludo.startsWith("Mu", 5)); //true
console.log(saludo.includes("a")); //true - si esiste la letra a
console.log(saludo.includes("a", 5)); //false - no lo encuentra desde "Mundo!"

//*************************
//10. repeticiones de strings - repeat
//**********************

let texto = "Hola";

console.log(texto.repeat()); // retorna vacio (por default es 0)
console.log(texto.repeat(2)); // HolaHola
console.log("0".repeat(10)); // 0000000000

//*************************

const ESPACIOS = 12;
let nombres = ["fernando", "melissa", "juan"];
let telefonos = ["11111111", "22222222", "222222"];

for (i in nombres) {
    // console.log(i); //0,1,2
    let dif = ESPACIOS - nombres[i].length;

    console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
    // fernando    |11111111
    // melissa     |22222222
    // juan        |222222
}

//*************************
//11. plantillas literales - literal templates
//**********************

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto); //Maria Perez

//*************************

let nombre2 = 'Maria';
let nombre3 = "Maria";

console.log(nombre2 === nombre3); //true - son iguales

//*************************
//usando template literals

function obtenerNombre() {
    return "Maria Perez";// retorna undefined si es que no se pone un return
}

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2); //El nombre completo es Maria Perez

let nombreCompleto3 = `El nombre completo es ${obtenerNombre()}`;
console.log(nombreCompleto3); //El nombre completo es Maria Perez

let nombreCompleto4 = `El nombre completo es ${1 + 2}`;
console.log(nombreCompleto4); //El nombre completo es 3

//*************************

let multiLinea = "<h1>Titulo</h1>  \n<p>Hola Mundo</p>";

console.log(multiLinea);
// <h1>Titulo</h1>
// <p>Hola Mundo</p>

//usando template literals
let multiLinea2 = `<h1 class="algo">${nombre}</h1>
<p>Hola ${apellido}</p>
I'am fernando`;

console.log(multiLinea2);
// <h1 class="algo">Maria</h1>
// <p>Hola Perez</p>
// I'am fernando

//*************************
//12. templates con tags
//**********************

function etiqueta( literales, ...substituciones ){

    console.log( arguments ); //Arguments(3) [Array(3), 5, 50, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log( literales ); // (3) ['', ' lapices cuestan ', ' pesos.', raw: Array(3)]
    console.log( substituciones ); // (2) [5, 50]

    let resultado = "";

    for ( let i=0; i< substituciones.length; i++){

        resultado += literales[i];
        resultado += substituciones[i];

    }

    return resultado;
}

let unidades = 5,
    costo_unitario = 10;

// let mensaje = `${unidades} lapices cuestan ${ unidades * costo_unitario } pesos.`;
let mensaje = etiqueta`${unidades} lapices cuestan ${ unidades * costo_unitario } pesos.`;

// console.log( mensaje ); //5 lapices cuestan 50 pesos.
// console.log( mensaje ); //undefined
// console.log( mensaje ); //Otro texto
console.log( mensaje ); //5 lapices cuestan 50

//*************************
//13. usando valores "raw" (crudos) en templates
//**********************

let mensaje2 = `Hola \nMundo\\`,
    mensaje3 = String.raw`Hola \nMundo\\`;

// var mensaje4 = String.raw"Hola \nMundo\\"; // ERROR

console.log( mensaje2 );
// Hola
// Mundo\
console.log( mensaje3 );
// Hola \nMundo\\
// console.log( mensaje4 );
