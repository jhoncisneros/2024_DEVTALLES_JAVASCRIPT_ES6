//***************************
//44. Simbolos y propiedades
//***************************

//los simbolos son perfectos para poner nombre de propiedades

// let primerNombre = new Symbol(); // ERROR - Symbol is not a constructor

let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol();

let persona = {
    [segundoNombre]: 'Herrera'
};

persona[primerNombre] = 'Fernando';

// console.log( persona.primerNombre ); // undefined
// console.log( persona[primerNombre] ); // Fernando
// console.log( persona[segundoNombre] ); // Herrera

console.log( primerNombre ); // Symbol(primer nombre)
console.log( segundoNombre ); // Symbol()

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log( simbolo1 == simbolo2); // false
console.log( simbolo1 === simbolo2); // false
console.log( Object.is(simbolo1, simbolo2)); // false

//los simbolos siempre son diferentes

console.log( typeof primerNombre ); // symbol

// console.log( " Mi simbolo: " + primerNombre ); // ERROR - Cannot convert a Symbol value to a string
// console.log( ` Mi simbolo: ${ primerNombre }` ); // ERROR - Cannot convert a Symbol value to a string

console.log( 'primer nombre' in persona ); // false
console.log( persona[primerNombre] ); // Fernando

//***************************
//45. Compratiendo simbolos - Symbol.for() y Symbol.keyFor()
//***************************

let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "12345";

console.log( objeto[userID] ); // 12345
console.log( userID ); // Symbol(userID)

let userID2 = Symbol.for("userID");

console.log( userID == userID2); // true
console.log( userID === userID2); // true
console.log( Object.is(userID, userID2)); // true

console.log( objeto[userID2] ); // 12345
console.log( userID2 ); // Symbol(userID)

let id = Symbol.for("id unico");
console.log( Symbol.keyFor( id ) ); // id unico

let id2 = Symbol.for("id unico");
console.log( Symbol.keyFor( id2 ) ); // id unico

console.log( id === id2 ); // true

let id3 = Symbol("id unico");
console.log( Symbol.keyFor( id3 ) ); // undefined


//***************************
//46. Coercion de los simbolos
//***************************

// coercion =  union de varios tipos

let idA = Symbol.for("idA");
let numero = 10;
let texto = "10";
let bool = true;
let NotAN = NaN;

console.log( numero + texto ); // 1010
console.log( numero + Number(texto) ); // 20

console.log( numero + NotAN ); // NaN
console.log( bool + bool ); // 2
console.log( bool + !bool ); // 1

// console.log( texto + idA ); // ERROR - Cannot convert a Symbol value to a string
console.log( idA ); // Symbol(idA)
// console.log( "Mi sombolo es:" + idA ); // ERROR - Cannot convert a Symbol value to a string
console.log( "Mi sombolo es:", idA ); // Mi sombolo es: Symbol(idA)
console.log( "Mi sombolo es:" + String(idA) ); //Mi sombolo es:Symbol(idA)


//***************************
//47. Recuperando las propiedades simbolo
//***************************

console.log("*************************");

let idZ = Symbol.for("id");
let activo = Symbol.for("activo");

let personaA = {
    [idZ]: "123",
    [activo]: true,
    ["codigo"]: "XY123",
    nombre: "fernando",
    apellido: "herrera",
    edad: 31
}

console.log( Object.keys( personaA ) ); // (4) ['codigo', 'nombre', 'apellido', 'edad']

for( key in personaA ){
    console.log( key, personaA[key]);
    // codigo XY123
    // nombre fernando
    // apellido herrera
    // edad 31
}

//ES6

let simbolos = Object.getOwnPropertySymbols( personaA );

console.log( simbolos ); // (2) [Symbol(id), Symbol(activo)]

for( i in simbolos){
    console.log( simbolos[i], Symbol.keyFor( simbolos[i]) );
    // Symbol(id) 'id'
    // Symbol(activo) 'activo'
}

//***************************
// Cuestionario 7: Examen #7
//***************************

// pregunta 3

let idB = Symbol();
let vehiculo = {
  [idB]: 12
};

console.log( vehiculo.idB ); // undefined
console.log( vehiculo[idB] ); // 12

// pregunta 4

let nombreB = Symbol();
let personaZ = {
    [nombreB]: "fernando",
    nombreB: "maria"
};

console.log( personaZ.nombreB ); // maria
console.log( personaZ[nombreB] ); // fernando

// pregunta 5

let simboloM = Symbol("simboloP");
let simboloN = Symbol("simboloP");

console.log( simboloM === simboloN ); // false

// pregunta 6

let simboloR = Symbol.for("simboloQ");
let simboloS = Symbol.for("simboloQ");

console.log( simboloR === simboloS ); // true

// pregunta 7

let salario = 1500;
let salarioTexto = "2000";
let pagar = true;

console.log( salario + Number(salarioTexto) + pagar ); // 3501

// pregunta 8

let salarioB = 1500;
let salarioTextoB = "2000";
let pagarB = true;
// let bonificacionB = new Symbol("50");

// console.log( salarioB + Number(salarioTextoB) + pagarB + Number(bonificacionB) ); //ERROR - Symbol is not a constructor

// pregunta 9









