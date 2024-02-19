//***************************
//55. Mapas y sus metodos
//***************************

let mapa = new Map();

mapa.set( "nombre", "fernando" );
mapa.set( "edad", 31 );

console.log( mapa ); // Map(2) {'nombre' => 'fernando', 'edad' => 31}
console.log( mapa.size ); // 2

console.log( mapa.get("nombre") ); // fernando
console.log( mapa.get("edad") ); // 31
console.log( mapa.has("nombre") ); // true
console.log( mapa.has("apellido") ); // false

mapa.set( "apellido" ); // undefined

console.log( mapa ); // Map(3) {'nombre' => 'fernando', 'edad' => 31, 'apellido' => undefined}
console.log( mapa.size ); // 3

mapa.set(  ); // undefined, undefined

console.log( mapa ); // Map(4) {'nombre' => 'fernando', 'edad' => 31, 'apellido' => undefined, undefined => undefined}
console.log( mapa.size ); // 4

mapa.set( {}, { hola: "hola mundo" } );
// 4:{Object => Object}
// key:{}
// value:{hola: 'hola mundo'}

console.log( mapa ); // {'nombre' => 'fernando', 'edad' => 31, 'apellido' => undefined, undefined => undefined, {…} => {…}}
console.log( mapa.size ); // 5

mapa.delete("nombre"); //

console.log( mapa.has("nombre") ); // false
console.log( mapa.get("nombre") ); // undefined

mapa.set("edad"); // 'edad' => undefined
console.log( mapa ); // Map(4) {'edad' => undefined, 'apellido' => undefined, undefined => undefined, {…} => {…}}

mapa.clear(); // elimina todo

console.log( mapa ); // Map(0) {size: 0}

//***************************
//56. Inicializaciones de los mapas
//***************************

let mapa2 = new Map( [ ["nombre", "fernando"],["edad", 31] ] );

console.log( mapa2); // Map(2) {'nombre' => 'fernando', 'edad' => 31}

// let mapa3 = new Map( ["nombre", "fernando"],["edad", 31] ); // ERROR - Iterator value nombre is not an entry object at new Map

let mapa4 = new Map( [ ["nombre", "fernando"],[null, undefined] ] );

console.log( mapa4 ); // Map(2) {'nombre' => 'fernando', null => undefined}
console.log( mapa4.get(null) ); // undefined

let mapa5 = new Map( [ ["nombre", "fernando"],[undefined, null] ] );

console.log( mapa5 ); // Map(2) {'nombre' => 'fernando', undefined => null}
console.log( mapa5.get(undefined) ); // null

let mapa6 = new Map( [ ["nombre", "fernando"],[undefined] ] );

console.log( mapa6 ); // Map(2) {'nombre' => 'fernando', undefined => undefined}
console.log( mapa6.get(undefined) ); // undefined


//***************************
//57. forEach() de los mapas
//***************************

let mapa10 = new Map( [["nombre","fernando"],["edad",31]] );

mapa10.forEach( function( value, key, mapOrigin ){

    console.log(`Llave: ${key}, valor: ${value}`);
    console.log( mapOrigin );

    // Llave: nombre, valor: fernando
    // Map(2) {'nombre' => 'fernando', 'edad' => 31}
    // Llave: edad, valor: 31
    // Map(2) {'nombre' => 'fernando', 'edad' => 31}

});

mapa10.forEach(
    (valor, llave) => console.log(`Llave: ${llave}, valor: ${valor}`)
);
// Llave: nombre, valor: fernando
// Llave: edad, valor: 31

mapa10.forEach(
    valor => console.log(`valor: ${valor}`)
);
// valor: fernando
// valor: 31


//***************************
//58. Nuevo ciclo - FOR-OF
//***************************

let numeros = [100,20,30,50,200];

// for (let i = 0; i< numeros.length; i++){
//     console.log(numeros[i]);
//     // 100
//     // 20
//     // 30
//     // 50
//     // 200
// }

// for(let i in numeros){
//     console.log(numeros[i]);
// //     // 100
// //     // 20
// //     // 30
// //     // 50
// //     // 200
// }

for( let numero of numeros ){
    console.log( numero );
// //     // 100
// //     // 20
// //     // 30
// //     // 50
// //     // 200
}

let personas = [
    { nombre: "fernando", edad: 30},
    { nombre: "maria", edad: 10},
    { nombre: "susana", edad: 18},
    { nombre: "victor", edad: 25},
    { nombre: "juan", edad: 40},
];

for (let per of personas){
    console.log( per.nombre, per.edad );
    // fernando 30
    // maria 10
    // susana 18
    // victor 25
    // juan 40
}

let personasA = new Set();

personasA.add( {nombre: "fernando", edad: 31 } );
personasA.add( {nombre: "melissa", edad: 26 } );
personasA.add( {nombre: "juan", edad: 28 } );

for (let per of personasA) {
    console.log(per.nombre, per.edad);
    // fernando 31
    // melissa 26
    // juan 28
}

let personasB = new Set();

personasB.add( "fernando" );
personasB.add( "maria" );
personasB.add( "melissa" );

for (let per of personasB) {
    console.log( per );
    // fernando
    // maria
    // melissa
}

let personasC = new Map( [["nombre","fernando"],["nombre","maria"]] );

for (let per of personasC) {
    console.log(per); // (2) ['nombre', 'maria']
}

let personasD = new Map( [["nombre","fernando"],["apellido","herrera"]] );

for (let per of personasD) {
    console.log(per);
    // (2) ['nombre', 'fernando']
    // (2) ['apellido', 'herrera']
}

// console.log( per ); // (2) ['apellido', 'herrera']

// console.log( per ); // ERROR -  per is not defined


//***************************
//Cuestionario 9: Examen #9
//***************************

//pregunta 3
let mapaA = new Map([[]]);

console.log( mapaA ); // Map(1) {undefined => undefined}

//pregunta 4
let mapaB = new Map([[]]);

console.log( mapaB.has() ); // true

//pregunta 5
let mapaC = new Map([["nombre","fernando"],["apellido","herrera"]]);

console.log( mapaC.has("fernando")); // false

//pregunta 6
let mapaD = new Map([["nombre","fernando"],["apellido","herrera"]]);

console.log( mapaD.get("nombre")); // fernando








