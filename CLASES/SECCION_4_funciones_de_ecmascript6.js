
//***************************
//14. parametros por defecto
//**********************

function saludo(mensaje, tiempo){

    //ECMS 5
    // mensaje = mensaje || "Hola Mundo";
    mensaje = (typeof mensaje !== "undefined") ? mensaje : "Hola Mundo2!";

    setTimeout(function(){

        // console.log( mensaje ); //undefined
        // console.log( mensaje ); // Hola Mundo
        // console.log( mensaje ); //Hola Fernando
        console.log( mensaje ); // Hola Mundo2!

    }, tiempo);

}

// saludo(); //undefined
// saludo("Hola Fernando"); // Hola Fernando
// saludo(); // Hola Mundo2!

//***************************

//ES6
function saludo2(mensaje = "Hola Mundo", tiempo = 1500){

    setTimeout(function(){

        console.log( mensaje ); //Hola Mundo

    }, tiempo);
}

// saludo2(); // Hola Mundo

//***************************

function saludar( fn =  fnTemporal, persona = { nombre: "fernando"} ){

    console.log( typeof fn ); // undefined

    if( typeof fn === "undefined"){
        console.error('NO es una funcion'); // NO es una funcion
        return;
    }

    fn();

    // console.log( persona ); // {nombre: 'fernando'}
    console.log( persona ); // {nombre: 'Juan carlos'}
}

function fnTemporal(){
    console.log("Hola Mundo FN"); // Hola Mundo FN
}

// saludar(); // error - TypeError: fn is not a function
// saludar(); // Hola Mundo
// saludar(); //Hola Mundo FN

var persona = {
    nombre: "Juan carlos"
}
saludar( fnTemporal, persona ); //{nombre: 'Juan carlos'}

//***************************
//15. como los valores por defecto afectan el objeto "arguments"
//**********************

function sumar(a = 1, b = 2 ){
    console.log( arguments ); // Arguments(5) [1, 2, 5, 'fernando', {…}, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

// sumar( 1, 2 , 5, "fernando", {a:1,b:2} ); // Arguments(5) [1, 2, 5, 'fernando', {…}, callee: ƒ, Symbol(Symbol.iterator): ƒ]
sumar( ); // Arguments [callee: (...), Symbol(Symbol.iterator): ƒ] - []

//***************************
//16. parametros REST - parametros sin nombre
//**********************

function agregar_alumno( ){

    console.log( arguments ); //Arguments(6) [Array(1), 'Maria', 'Pedro', 'Susana', 'Juan', 'Fernando', callee: ƒ, Symbol(Symbol.iterator): ƒ]

    for( var i = 1; i < arguments.length; i++){
        arguments[0].push( arguments[i] );
    }

    return arguments[0];
}

var alumnos_arr = ["fernando"];
var alumnos_arr2 = agregar_alumno( alumnos_arr, "Maria", "Pedro", "Susana", "Juan", "Fernando" );

console.log( alumnos_arr2 ); //(6) ['fernando', 'Maria', 'Pedro', 'Susana', 'Juan', 'Fernando']

//***************************
// parametros rest - parametros sin nombre - despues ( ... )

function agregar_alumno2( arr_alumnos, ...alumnos ){

    console.log( arguments ); //Arguments(6) [Array(1), 'Maria', 'Pedro', 'Susana', 'Juan', 'Fernando', callee: (...), Symbol(Symbol.iterator): ƒ]

    for( let i = 0; i < alumnos.length; i++){
        arr_alumnos.push( alumnos[i] );
    }

    return arr_alumnos;
}

var alumnos_arr2 = ["fernando"];
var alumnos_arr3 = agregar_alumno2( alumnos_arr2, "Maria", "Pedro", "Susana", "Juan", "Fernando" );

console.log( alumnos_arr3 ); //(6) ['fernando', 'Maria', 'Pedro', 'Susana', 'Juan', 'Fernando']

//***************************
//17. restricciones del parametro REST
//**********************

// function juntar_nombres( ...nombres, apellidos ){ // error - Uncaught SyntaxError: Rest parameter must be last formal parameter
// function juntar_nombres( ...apellidos, ...nombres ){ // error - Uncaught SyntaxError: Rest parameter must be last formal parameter
function juntar_nombres( apellidos, ...nombres ){ //correcto

}

//***************************
//18. el operador "spread"
//***************************

var num1 = 10,
    num2 = 30;

var max = Math.max(num1, num2);

console.log( max ); // 30

var numeros = [1,5,10,20,100,234];

var max2 = Math.max( numeros );

console.log( max2); // NaN

var max3 = Math.max.apply( Math, numeros );

console.log( max3 ); // 234

//EN ES6
let numeros2 = [1,5,10,20,100,234];

let max4 = Math.max( ...numeros2 );

console.log( max4 ); // 234

//***************************
//19. Romper la relacion de referencia de los objetos
//***************************

let persona1 = {
    nombre: 'fernando',
    edad: 33
}

let persona2 = persona1;

// console.log( persona1 ); // {nombre: 'fernando', edad: 33}
// console.log( persona2 ); // {nombre: 'fernando', edad: 33}

persona2.nombre = 'juan'; // cambia persona1 implicitamente

console.log( persona1 ); // {nombre: 'juan', edad: 33}
console.log( persona2 ); // {nombre: 'juan', edad: 33}

let persona3 = { ...persona1 };

persona3.nombre = 'pedro';

console.log( persona1 ); // {nombre: 'juan', edad: 33}
console.log( persona3 ); // {nombre: 'pedro', edad: 33}

//***************************
//20. añadir propiedades a objetos a partir de otros objetos
//***************************

let persona20 = {
    nombre: 'fernando',
    edad: 33
}

let persona21 = {
    nombre: 'juan',
    edad: 18
};

console.log( persona20 ); // {nombre: 'fernando', edad: 33}
console.log( persona21 ); // {nombre: 'juan', edad: 18}

let persona22 = {
    nombre: 'juan',
    edad: 18,
    direccion: 'Residencial A',
    conduce: true,
    vehiculo: true,
    vegetariano: false,
    casado: true
};

persona20.direccion = persona22.direccion;

persona22.direccion = 'Barrio alcantilado';

console.log( persona20 ); // {nombre: 'fernando', edad: 33, direccion: 'Residencial A'}
console.log( persona22 ); // {nombre: 'juan', edad: 18, direccion: 'Barrio alcantilado', conduce: true, vehiculo: true, …}

//otr forma rapida

let persona23 = {
    nombre: 'fernando',
    edad: 33
}

let persona24 = {
    nombre: 'pedro',
    edad: 18,
    direccion: 'Residencial bella vista',
    conduce: true,
    vehiculo: true,
    vegetariano: false,
    casado: true
};

persona23 = {
    ...persona24,
    ...persona23
}

console.log( persona23 ); // {nombre: 'fernando', edad: 33, direccion: 'Residencial bella vista', conduce: true, vehiculo: true, …}
console.log( persona24 ); // {nombre: 'pedro', edad: 18, direccion: 'Residencial bella vista', conduce: true, vehiculo: true, …}

//***************************
//21. Diferencia entre el "spread" y el "rest"
//***************************

function saludarRest( saludo, ...nombres ){

    for( i in nombres ){
        console.log( `${saludo} ${nombres[i]}` );
    }

}

function saludarSpread( saludo, ...nombres ){
    console.log( `${saludo} ${nombres}.` );
}

saludarRest( "Hola", "fernando", "maria", "susana");
// Hola fernando
// Hola maria
// Hola susana

let personas = ["melissa", "hernando", "juan"];
saludarSpread("que tal", personas);
// que tal melissa,hernando,juan.

let partes = ["brazos", "piernas"];
let cuerpo = ["cabeza", "cuello", ...partes, "pies", "dedos"];

console.log( cuerpo ); // (6) ['cabeza', 'cuello', 'brazos', 'piernas', 'pies', 'dedos']

//***************************
//22. Aclarando el doble comportamiento de las funciones
//***************************

var nombre = "Juan";

function PersonaA(nombreA){
    this.nombreA = nombreA;
}

var personaA = new PersonaA("fernando");
var noEsPersonaA = PersonaA("hernando");

console.log( personaA ); // PersonaA {nombreA: 'fernando'}
console.log( noEsPersonaA ); // undefined

//ES 6

function PersonaB(nombreB){

    if( this instanceof PersonaB ){
        this.nombreB = nombreB;
    }else{
     throw new Error('Esta funcion debe de ser utilizada con el new');
    }

}

var personaB = new PersonaB("fernando");

//ES 5
// var noEsPersonaB = PersonaB("hernando"); // ERROR - Error: Esta funcion debe de ser utilizada con el new
var noEsPersonaB = PersonaB.call( personaB, "hernando"); // NO MUESTRA ERROR

//***************************
//ES 6

function PersonaC(nombreC){

    if( typeof new.target !== "undefined" ){
        this.nombreC = nombreC;
    }else{
        throw new Error('Esta funcion debe de ser utilizada con el new');
    }

}

var personaC = new PersonaC("fernando");
// var noEsPersonaC = PersonaC.call( personaC, "hernando"); //ERROR - Error: Esta funcion debe de ser utilizada con el new

//*************************** EXAMEN #3 ****************
//pregunta 1:

function saludarA( nombre = "juan", apellido){
    console.log( `${nombre} ${apellido}`);
}

saludarA("matamoros"); // matamoros undefined

// pregunta 3

function crear_persona(){
    console.log(arguments);
}

crear_persona("juan", "carlos", 30, "san jose"); //Arguments(4) ['juan', 'carlos', 30, 'san jose', callee: ƒ, Symbol(Symbol.iterator): ƒ]

//pregunta 4:

function crear_personaB(nombre="fernando", apellido="herrera"){
    console.log(arguments);
}

crear_personaB(); //Arguments [callee: (...), Symbol(Symbol.iterator): ƒ]
