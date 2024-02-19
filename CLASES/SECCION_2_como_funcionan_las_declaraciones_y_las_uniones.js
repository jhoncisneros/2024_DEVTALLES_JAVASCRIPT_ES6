//*************
//4. declaraciones de las variables VAR vs LET
//**********************

//va secuencial
console.log( mensaje ); //undefined (por defecto)
var mensaje = "Hola Mundo";

//*************
console.log( mensaje ); // error de referencia (Cannot access 'mensaje' before initialization)
let mensaje = "Hola Mundo";

//*************
if( 1 === 3 ){
    // var mensaje = "Hola mundo";
    let mensaje = "Hola mundo";
}

// console.log( mensaje ); // undefined
console.log( mensaje ); //error de referencia con let (ReferenceError: mensaje is not defined)

//*************
let mensaje = "123";
// var mensaje = "Hola"; // error ya está declarado // error ya está declarado (Identifier 'mensaje' has already been declared)

if( 1 === 2 ){
    mensaje = "Hola mundo";
}

console.log( mensaje ); // Hola mundo / 123

//**********************
//5. no hay re-declaraciones
//**********************

var mensaje = "123";
var mensaje = "Hola";
var mensaje = "Hola 1";
let mensaje = "Hola 2"; // error (Identifier 'mensaje' has already been declared)
var mensaje = "Hola 3";

console.log( mensaje); // Hola 3

//**********************

let mensaje = "hola";

// if( 2 === 3){
if( 2 === 2){
    let mensaje = "que tal";
    console.log( mensaje ); // que tal
}

console.log( mensaje); // hola - hola

//**********************
//6. declaraciones de constantes
//**********************

const IMPUESTO_SV = 15.25; // inicializar al momento de ser definidas sino manda error
// IMPUESTO_SV = 33; //error - no se puede hacer cambios en las constantes (TypeError: Assignment to constant variable.)

if(true){
    const IMPUESTO_SV = 19.75;
    console.log( IMPUESTO_SV ); // 19.75
}

console.log( IMPUESTO_SV ); // 15.25

//**********************

const PERSONA = {
    nombre: "fernando",
    apellido: "herrera"
}

// PERSONA.nombre = "alberto"; //SI ES PERMITIDO

// ERROR - TypeError: Assignment to constant variable.
// PERSONA = {
//     nombre: "alberto",
//     apellido: "quiros"
// }

console.log( PERSONA ); // {nombre: 'fernando', apellido: 'herrera'} - {nombre: 'alberto', apellido: 'herrera'}

//**********************
//7. declaraciones de variables en ciclos
//**********************

for ( var i =0; i<=10; i++){

}

console.log( i ); // 11

//**********************

for ( let i =0; i<=10; i++){

}

console.log( i ); // error - Uncaught ReferenceError: i is not defined

//**********************
//8. declaraciones de funciones en ciclos
//**********************

var funciones = [];

for(var i=0; i<10; i++){

    funciones.push( function(){
        console.log( i ); // 10 veces 10
    });

}

// i = 100; // 10 veces 100

funciones.forEach( function(func){

    func(); //10 veces 10

});

//**********************
//EMC 5
var funciones = [];

for(var i=0; i<10; i++){

    // funciones.push( function(){
    //     console.log( i ); // 10 veces 10
    // });

    funciones.push(
        (function(valor){
            return function(){
                console.log( valor ); //del 0 al 9
            }
        })(i)
    );
}

funciones.forEach( function(func){

    func(); //del 0 al 9

});

//**********************
//EMC 6
var funciones = [];

for(let i=0; i<10; i++){

    funciones.push( function(){
        console.log( i ); //del 0 al 9
    });
}

funciones.forEach( function(func){

    func(); //del 0 al 9

});
