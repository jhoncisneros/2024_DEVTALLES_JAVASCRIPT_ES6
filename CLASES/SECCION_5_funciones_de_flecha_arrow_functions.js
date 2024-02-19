//***************************
//23. Arrow Functions - Funciones de Flecha ( => )
//**********************

//ES5
var miFuncion2 = function(valor){
    return valor;
};

//ES6
let miFuncion1 = valor => valor;

console.log( miFuncion1( 'juan' )); // juan
console.log( miFuncion2( 'juan' )); // juan

//**********************

//ES5
var sumar2 = function(num1, num2){
    return num1 + num2;
};

//ES6
let sumar1 = (num1, num2) => num1 + num2;

console.log( sumar1( 2,3)); // 5
console.log( sumar2( 2,3)); // 5

//**********************

//ES5
var saludar2 = function(){
    return "Hola Mundo";
};

//ES6
let saludar1 = () => "Hola Mundo";

console.log( saludar1()); // Hola Mundo
console.log( saludar2()); // Hola Mundo

//**********************

//ES5
var saludarPersona = function(nombre){

    var salida = "Hola, " + nombre;

    return salida;
};

//ES6
let saludarPersona2 = nombre => {

    let salida = `Hola, ${nombre}`;

    return salida;
};

console.log( saludarPersona("pedro")); // Hola, pedro
console.log( saludarPersona2("pedro")); // Hola, pedro

//**********************

//ES5
var obtenerLibro = function(id){
    return {
        id: id,
        nombre: "harry potter"
    }
};

//ES6
let obtenerLibro2 = id => ({
    id: id,
    nombre: "harry potter"
});

console.log( obtenerLibro("1")); // {id: '1', nombre: 'harry potter'}
console.log( obtenerLibro2("1")); // {id: '1', nombre: 'harry potter'}



//***************************
//25. Creando funciones anonimas
//**********************

//EC5
var saludo1 = function(nombre){
    return "Hola " + nombre;
}("Maria");

console.log( saludo1 ); // Hola Maria

//EC6
var saludo2 = ( nombre => `Hola ${nombre}` )("Melissa");

console.log( saludo2 ); // Hola Melissa

//***************************
//26. No hay cambios en el objeto "this"
//**********************

//ES5
var manejador = {

    id: "123",

    init: function(){

        document.addEventListener("click", (function(event){
            this.clickEnPagina( event.type );
            // console.log( this ); // #document
            console.log( this ); // {id: '123', init: ƒ, clickEnPagina: ƒ}
        }).bind(this), false);

    }, // fin del init

    clickEnPagina: function( type ){
        console.log( "Manejando " + type + " para el id: " + this.id );
    }
};

// manejador.init(); // error - TypeError: this.clickEnPagina is not a function

// manejador.init(); // Manejando click para el id: 123

//ES6

var manejador2 = {

    id: "123",

    init: function(){

        document.addEventListener("click",
                event => this.clickEnPagina( event.type ));

    }, // fin del init

    clickEnPagina: function( type ){
        console.log( "Manejando " + type + " para el id: " + this.id );
    }
};

manejador2.init(); // Manejando click para el id: 123


//***************************
//27. funciones de flecha y arreglos
//**********************

//ES5
var arreglo = [5,10,11,2,1,9,20];

var ordenado = arreglo.sort( function(a,b){
    return a - b;
});

console.log( ordenado ); // (7) [1, 2, 5, 9, 10, 11, 20]

//ES6
let ordenado2 = arreglo.sort( (a,b) => a - b);

console.log( ordenado2 ); // (7) [1, 2, 5, 9, 10, 11, 20]


//***************************
//28. Identificando funciones de flecha y otros ejemplos
//***************************

var restar = (a,b) => a - b;

console.log( typeof restar ); // function
console.log( restar instanceof Function ); //true

// var restar2 = new restar(1,2); // ERROR - TypeError: restar is not a constructor
// var restar2 = restar(1,2); // OK

//**********************

((a,b) => {
    // console.log( arguments[0] ); // ERROR - ReferenceError: arguments is not defined
})();

//**********************

function ejemplo(x,y){

    ((a,b) => {
        console.log( arguments[0] ); // 10
        console.log( arguments[1] ); // 20
        console.log( arguments[3] ); // undefined
    })();

}

ejemplo(10, 20);

//********************** EXAMEN #4 *******************
//pregunta 4
function parametro(){

    let nombres = ((arguments) => {
        return `${arguments[0]} - ${arguments[1]}`;
    })(arguments);

    console.log( nombres ); //
}

parametro("fernando", 31); // fernando - 31

//pregunta 5

var saludoA = function(nombre){
    return "Hola " + nombre;
}

let saludoB = nombre => `Hola ${nombre}`;

console.log(saludoA("juan")); // Hola juan
console.log(saludoB("juan")); // Hola juan

// pregunta 6

(()=>{});

// pregunta 10

let restarA = (a,b) => a - b;
// var restasA = new restarA(1,2); // ERROR - TypeError: restarA is not a constructor






















