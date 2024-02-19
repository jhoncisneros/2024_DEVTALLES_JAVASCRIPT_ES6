//***************************
//29. Extensiones de objetos literales
//***************************

//ES5
var objeto = {
  nombre: "melissa"
};

//ES5
function crearPersona( nombre, apellido, edad){

    return {
     nombre: nombre,
     apellido: apellido,
     edad: edad
    }
}

var melissa = crearPersona("melissa", "flores", 30);
console.log( melissa ); // {nombre: 'melissa', apellido: 'flores', edad: 30}

//ES6

function crearPersona2( nombre, apellido, edad){

    return {
        nombre, // si se cambia a "nombre2" sale ERROR - ReferenceError: nombre2 is not defined
        apellido,
        edad
    }
}

var melissa2 = crearPersona2("melissa", "flores", 30);
console.log( melissa2 ); // {nombre: 'melissa', apellido: 'flores', edad: 30}


//***************************
//30. Metodos concisos
//***************************

//ES5
var personaA = {
    nombre: "fernando",
    getNombre: function(){
        console.log( this.nombre ); // fernando
    }
}

personaA.getNombre(); // fernando

//ES6

var personaB = {
    nombre: "fernando",
    getNombre(){
        console.log( this.nombre ); // fernando
    }
}

personaB.getNombre(); // fernando


//***************************
//31. Nombres de propiedades computadas o procesadas
//***************************
console.log("****************************")

//ES5
var persona20 = {};

var apellido20 = "apellido";

persona20["primer nombre"] = "fernando"
persona20[apellido20] = "herrera";

console.log( persona20 ); // {primer nombre: 'fernando', apellido: 'herrera'}
console.log( persona20["primer nombre"]); // fernando
console.log( persona20[apellido20]); // herrera

var persona20 = {
    "primer nombre": "melissa"
}

console.log( persona20 ); // {primer nombre: 'melissa'}
console.log( persona20["primer nombre"]); // melissa

//*******************
//ES6

var apellido20 = "primer apellido";

var persona20 = {
    "primer nombre": "hernando",
    [apellido20] : "ferrera"
}

console.log( persona20 ); // {primer nombre: 'hernando', primer apellido: 'ferrera'}
console.log( persona20["primer nombre"] ); // hernando
console.log( persona20[apellido20] ); // ferrera

//*******************

var subFijo = " nombre";

var persona20 = {
    ["primer" + subFijo]: "Melisssa",
    ["segundo" + subFijo]: "Karen"
}

console.log( persona20 ); // {primer nombre: 'Melisssa', segundo nombre: 'Karen'}
console.log( persona20["primer nombre"] ); // Melisssa
console.log( persona20["segundo" + subFijo] ); // Karen



//***************************
//32. Nuevo metodo: Object.is()
//***************************
console.log("****************************")

console.log( +0 == -0 ); // true

console.log( +0 === -0 ); // true

console.log( Object.is( +0, -0) ); // false

console.log("============");

console.log( NaN == NaN); // false
console.log( NaN === NaN); // false

console.log( Object.is( NaN, NaN)); // true

console.log("============");

console.log( 5 == 5 ); // true
console.log( 5 == "5" ); // true

console.log( 5 === 5 ); // true
console.log( 5 === "5" ); // false

console.log("============");

console.log( Object.is(5, 5) ); // true
console.log( Object.is(5, "5") ); // false


//***************************
//33. Nuevo metodo: Object.assign()
//***************************
console.log("****************************")

//ES5
function mezclar( objReceptor, objDonador ){

    Object.keys( objDonador ).forEach( function( key){

        objReceptor[key] = objDonador[key];

    });

    return objReceptor;
}

var objReceptor = {};
var objDonador = {
    // nombre: "mi-archivo.js",
    get nombre(){
        return "mi-archivo.js"
    }
}

console.log( objDonador.nombre ); // mi-archivo.js
console.log( mezclar( objReceptor, objDonador) ); // {nombre: 'mi-archivo.js'}
console.log( objDonador ); // nombre: "mi-archivo.js"

//ES6
console.log( Object.assign( objReceptor, objDonador ) ); // {nombre: 'mi-archivo.js'}


//***************************
//34. Orden de enumeracion de las propiedades de los objetos
//***************************
console.log("****************************");

var objeto = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1
}

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;

console.log( objeto ); // {0: 1, 2: 1, 3: 1, 15: 1, c: 1, x: 1, r: 1, b: 1, d: 1, a: 1}
console.log( Object.getOwnPropertyNames( objeto ).join(",") ); // 0,2,3,15,c,x,r,b,d,a
console.log( Object.keys( objeto ) ); // (10) ['0', '2', '3', '15', 'c', 'x', 'r', 'b', 'd', 'a']
console.log( JSON.stringify( objeto ) ); // {"0":1,"2":1,"3":1,"15":1,"c":1,"x":1,"r":1,"b":1,"d":1,"a":1}

for (i in Object.keys( objeto )){
    console.log( Object.keys( objeto )[i] );
}
// 0
// 2
// 3
// 15
// c
// x
// r
// b
// d
// a


//*************************** EXAMEN #5 **************
// Pregunta 1:

function crearCarro( marca, modelo, anio ){
    return {
        marca,
        tipo: modelo,
        anio
    }
}

let mazda = crearCarro("mazda", "sedan", 2020);

console.log( mazda ); // {marca: 'mazda', tipo: 'sedan', anio: 2020}

//pregunta 5

let personaZ = {};
personaZ["!nombre-completo*"] = "maria susana perez";
console.log( personaZ["!nombre-completo*"] ); // maria susana perez

//pregunta 6

let personaX = {
    [getPropiedad()]: "marai susana perezz"
};

function getPropiedad(){
    return "nombre";
}

console.log( personaX[getPropiedad()] ); // marai susana perezz

// pregunta 8
console.log( Object.is( NaN, NaN ) ); // true






