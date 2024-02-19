//***************************
//60. Introduccion a las clases
//***************************

//ES5

function Persona( nombre ){

    this.nombre = nombre;

    //forma 2
    this.gritarNombre = function(){
        console.log( this.nombre.toUpperCase() );
    }
}

//forma 1
Persona.prototype.decirNombre = function(){
    console.log(this.nombre);
}

let fernando = new Persona("nombre");

fernando.gritarNombre(); // NOMBRE
fernando.decirNombre(); // nombre

console.log( fernando instanceof Persona ); // true
console.log( fernando instanceof Object ); // true


//***************************
//61. Declaracion basica de una clase en ES6
//***************************

class PersonaA {

    constructor(nombre) {
        this.nombre = nombre;
    }

    deicrNombre(){
        console.log( this.nombre );
    }

}

let fernandoA = new PersonaA("fernando");

fernandoA.deicrNombre(); // fernando

// let fernandoB = PersonaA("fernando"); // ERROR - Class constructor PersonaA cannot be invoked without 'new'

console.log( fernandoA instanceof PersonaA ); // true
console.log( fernandoA instanceof Object ); // true

console.log( typeof PersonaA); // function
console.log( typeof PersonaA.prototype.deicrNombre); // function


//***************************
//63. Clases como expresiones
//***************************

console.log("##############");

let miFuncion = function(){
    console.log("Hola mundo");
}

let otraFuncion = miFuncion;

console.log( typeof otraFuncion ); //  function

otraFuncion(); // Hola mundo

let Persona2 = class {

    constructor() {
        this.nombre = "";
        this.edad = 30;
        this.direccion = "mi direccion";
    }

    decirNombre(){
        console.log("Hola Mundo");
    }

}

let fernando2 = new Persona2();
console.log( typeof fernando2); // object
console.log( fernando2 instanceof Persona2); // true

//***************************
//64. Clases como parametro
//***************************

function creadorClases( definicionClase ){
    return new definicionClase();
}

let objeto = creadorClases( class {

    constructor() {
        this.nombre = undefined;
        this.edad = 30;
    }

    saludar(){
        console.log("Hola!!");
    }

} );

objeto.saludar(); // Hola!!

class Cuadrado {

    constructor(lado) {
        this.lado = lado;
    }

    getArea(){
        return this.lado * this.lado;
    }
}

function imprimirCuadrado( cuadrado ){

    if( !(cuadrado instanceof Cuadrado) ){
        console.error("El parametro enviado no es un cuadrado");
        return;
    }

    console.log( cuadrado.getArea() );
}

let mesa = new Cuadrado(10);

imprimirCuadrado( mesa ); // 100

let mesa2 = "123";
//imprimirCuadrado( mesa2 ); // ERROR - El parametro enviado no es un cuadrado

//***************************
//Cuestionario 10: Examen #10
//***************************

//pregunta 8
class PersonaZ{

}

let personaZ = new PersonaZ();

//pregunta 9
class PersonaX{

}

console.log( typeof PersonaX ); // function

let personaX = new PersonaX();
console.log( typeof personaX); // object





