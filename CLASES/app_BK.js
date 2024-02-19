



// console.log( mensaje );//UNDEFINED (con var) //error (con let)
// let mensaje = "hola mundo";

/***************************************************/

// let mensaje = "123";
// var mensaje = "Hola"; //ERROR
// if (1 === 2 ) {
//     let mensaje = "Hola Mundo";
// }
// console.log(mensaje); //ERROR

/***************************************************/

// var mensaje = "123";
// var mensaje = "Hola";
// let mensaje = "Hola2";
// var mensaje = "Hola3";
// console.log(mensaje); //ERROR

/***************************************************/

// var mensaje = "Hola";
// if ( 2 === 2) {
//     var mensaje = "Que tal";
//     console.log(mensaje);//Que tal
// }
// console.log(mensaje); //Que tal

let mensaje = "Hola";
if ( 2 === 2) {
    let mensaje = "Que tal";
    console.log(mensaje);//Que tal
}
console.log(mensaje); //Hola

/***************************************************/

const IMPUESTO_SV = 15.25; //inicializar obligatorio
// IMPUESTO_SV = 33; // ERROR
// const IMPUESTO_SV = 12.33; //ERROR

if ( true ){
    const IMPUESTO_SV = 19.75;
    console.log(IMPUESTO_SV); //19.75
}

console.log(IMPUESTO_SV); //15.25

/***************************************************/

const PERSONA = {
    nombre: "Fernando",
    apellido: "Herrera"
}

PERSONA.nombre = "Alberto"; //OK

// PERSONA = { // ERROR
//     nombre: "Alberto",
//     apellido: "Quirpz"
// }

console.log(PERSONA);

/***************************************************/

// for (let i = 0; i <= 10; i++) {
//
// }
//
// console.log( i ); //ERROR

/***************************************************/

var funciones = [];

//codigo antiguo ECMAS 5 para imprimir del 1 al 9
for (var i =0; i<10; i++){
    funciones.push(
        (function(valor){
            return function (){
                console.log(valor);
            }
        })(i)
    );
}
//fin ECMAS 5
//llamar anterior
funciones.forEach( function(func){
    func();
});
//fin llamar anterior

//ECMAS 6
console.log("*************");
var funciones = [];

for (let i =0; i<10; i++){
    funciones.push( function(){
        console.log( i ); //IMPRIME 10 VECES 10
    } );
}
// console.log(funciones);
// i = 100; //IMPRIME 10 VECES 100

funciones.forEach( function(func){
    func();
});
//fin ECMAS 6
/***************************************************/

const FOO = "Hola Mundo";
console.log( typeof FOO ); //string

/***************************************************/


