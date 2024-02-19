//***************************
//49 - Creando sets - agregando items y buscando elementos
//***************************

let items = new Set();

console.log( items ); // Set(0) {size: 0}

items.add( 10 );
items.add( 11 );
items.add( 8 );
items.add( 7 );
items.add( 7 );
items.add( 7 );
items.add( 7 );

console.log( items.size ); // 4
console.log( items ); // Set(4) {10, 11, 8, 7}

items.add( "7" );
items.add( "7" );
items.add( "7" );
items.add( "7" );

console.log( items ); // Set(5) {10, 11, 8, 7, '7'}
console.log( Object.is(7, "7") ); // false - por eso lo inserta

let items2 = new Set( [1,2,3,4,5,6,7,7,7,7,7,7] );

console.log( items2 ); // Set(7) {1, 2, 3, 4, 5,…}
console.log( items2.size ); // 7

let items3 = new Set( [1,2,3,4,5,6,7,7] );

console.log( items3.has(7) ); // true
console.log( items3.has("7") ); // false
console.log( items3.has(9) ); // false
console.log( items3.has(1) ); // true

//***************************
//50 - Removiendo valores
//***************************

let items4 = new Set([1,2,3,4,5]);

console.log( items4.size ); // 5

items4.delete( 3 );

console.log( items4.size ); // 4
console.log( items4 ); // Set(4) {1, 2, 4, 5}

items4.delete( 3 ); // NO muestra error

items4.clear();

console.log( items4.size ); // 0
console.log( items4 ); // Set(0) {size: 0}


//***************************
//51. forEach() - en los Sets
//***************************

let personas = new Set(["fernando", "maria", "susana"]);

personas.forEach( function( valor, llave, setOriginal ){

    console.log( valor, llave, setOriginal ); //
    // fernando fernando Set(3) {'fernando', 'maria', 'susana'}
    // maria maria Set(3) {'fernando', 'maria', 'susana'}
    // susana susana Set(3) {'fernando', 'maria', 'susana'}

    console.log( personas === setOriginal ); // true
} );

//***************************
//52. Convertir un Set en Array
//***************************

let numeros = [1,2,3,4,5,6,7,7,7,3,1,2,3,4,5];

let setNumeros = new Set( numeros );

console.log( setNumeros ); // Set(7){1, 2, 3, 4, 5,…}

let arrayNumeros = [...setNumeros];

console.log( arrayNumeros ); // (7) [1, 2, 3, 4, 5, 6, 7]

function eliminaDuplicados( items ){
    // let set = new Set(items);
    // return [...set];

    // de otra forma
    return [...new Set(items)];
}

let arrayNumeros2 = eliminaDuplicados( setNumeros);

console.log( arrayNumeros2 ); // (7) [1, 2, 3, 4, 5, 6, 7]

//***************************
//53. WeakSets
//***************************

let set10 = new WeakSet();

let persona10 = {
    nombre: "juan carlos"
};

let persona20 = {
    nombre2: "maria perez"
};

set10.add(persona10);
set10.add(persona20);

set10.delete( persona10 );

console.log( set10 ); //
//  0
//      value
//          nombre2
//              "maria perez"

//***************************
//Cuestionario 8: Examen #8
//***************************

// pregunta 4

let numerosA = new Set();
numerosA.add(2);
numerosA.add("2");

console.log( numerosA ); // Set(2) {2, '2'}

// pregunta 6
let personasB = new Set("fernando");
console.log( personasB ); // Set(7) {'f', 'e', 'r', 'n', 'a', 'd', 'o'}

// pregunta 7

let personasC = new Set(["fernando", "maria"]);

personasC.clear(1);

console.log( personasC ); // Set(0) {size: 0}

// pregunta 8

let personasD = new Set(["fernando", "maria"]);

personasD.delete(1);

console.log( personasD ); // Set(2) {'fernando', 'maria'}

// pregunta 10

let personasG = new Set( [["nombre","fernando"],["nombre","maria"]]);

console.log( personasG ); // Set(2) {Array(2), Array(2)}

// 0
// Array(2)
// value
//     (2) ['nombre', 'fernando']
// 1
// Array(2)
// value
//     (2) ['nombre', 'maria']
