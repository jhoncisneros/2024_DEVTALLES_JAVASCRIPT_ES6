//***************************
//35. Cambiar el prototipo de un objeto
//***************************

let gato = {
    sonido(){
        console.log("Miau");
    },
    chillido(){
        console.log("miau miau!!")
    }
}

let perro = {
    sonido(){
        console.log("guau");
    }
}

//ES5
//herencia de propiedades
let angora = Object.create( gato );
console.log( Object.getPrototypeOf( angora ) === gato); // true
console.log( Object.getPrototypeOf( angora ) === perro); // false

angora.sonido(); // Miau
angora.chillido(); // miau miau!!

//ES6
//herencia de propiedades
Object.setPrototypeOf( angora, perro );

console.log( Object.getPrototypeOf( angora ) === gato); // false
console.log( Object.getPrototypeOf( angora ) === perro); // true

angora.sonido(); // guau
// angora.chillido(); // ERROR - Uncaught TypeError: angora.chillido is not a function


//***************************
//36. Acceso al prototipo con la referencia "SUPER"
//***************************

let persona = {
    saludar(){
        return "Hola";
    }
};

//ES5
// let amigo = {
//     saludar(){
//         return Object.getPrototypeOf( this ).saludar.call( this ) + ", saludos!!";
//     }
// }

//ES6
let amigo = {
    saludar(){
        return super.saludar() + ", saludos!!";
    }
}

// heredar propiedades (herencia de prototipos)
Object.setPrototypeOf( amigo, persona );

//ES5
// console.log( amigo.saludar() ); // Hola, saludos!!

//ES6
console.log( amigo.saludar() ); // Hola, saludos!!


//***************************
//37. Destructuracion de objetos
//***************************

let ajustes = {
    nombre : "Fernando Herrera",
    email : "fernando.herrera85@gmail.com",
    facebook : "fernando.herrera.777",
    google : "fernando.her123",
    premium : true,
    twitter : "fernando_her85"
};

//ES5
// let nombre = ajustes.nombre,
//     email = ajustes.email,
//     facebook = ajustes.facebook;

//console.log( nombre, email, facebook ); //Fernando Herrera fernando.herrera85@gmail.com fernando.herrera.777

//ES6
let { nombre, email, facebook, google, premium:dePago , dePago2, twitter:cuentaTwi = "fer85" } = ajustes;

console.log( nombre, email, facebook ); //Fernando Herrera fernando.herrera85@gmail.com fernando.herrera.777
console.log( dePago2 ); // undefined
console.log( dePago ); // true
// console.log( premium ); // ERROR: premium is not defined
// console.log( cuentaTwi ); // fer85
console.log( cuentaTwi ); // fernando_her85


//***************************
//38. Destructuracion de objetos anidados
//***************************

let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo: {
        subNodo: {
            cursor: {
                linea: 11,
                columna: 10
            }
        }
    }
}


let { cursor:cursorActivo } = autoGuardado;

console.log( cursorActivo ); // {linea: 7, columna: 16}

let { ultimoArchivo:{ cursor:ultimoArchivoA } } = autoGuardado;

console.log( ultimoArchivoA ); // {linea: 8, columna: 20}

let { otroNodo:{subNodo:{ cursor:otroSuperNodo }} } = autoGuardado;

console.log( otroSuperNodo ); // {linea: 11, columna: 10}

let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;

console.log( otroSuperNodo2 ); // {linea: 11, columna: 10}



//***************************
//39. Destructuracion de arreglos
//***************************

let frutas = ["banano", "pera", "uva"];

let [ fruta1, fruta2 ] = frutas;

console.log( fruta1, fruta2 ); // banano pera

let [,, fruta3] = frutas;

console.log( fruta3 ); // uva

let otraFruta = "manzana";

[ otraFruta ] = frutas;

console.log( otraFruta ); // banano

//*********************

let a = 1;
let b = 2;
let temp;

// temp = a;
// a = b;
// b = temp;
//
// console.log( a ); // 2
// console.log( b ); // 1

[a,b] = [b,a];

console.log( a ); // 2
console.log( b ); // 1

let arrObj = [{}];


//***************************
//40. Destructuracion de arreglos anidados
//***************************

let colores1 = ["rojo", ["verde","amarillo"],"morado","naranja"];

let [ color1, [color2] ] = colores1;

console.log( color1 ); // rojo
console.log( color2 ); // verde

let colores2 = ["rojo","verde","amarillo","morado","naranja"];

//el operador rest(...) solo se usa para la destructuracion de arreglos mas no para objetos
let [colorPrincipal, colorSecundario, ...demasColores] = colores2;

console.log( colorPrincipal); // rojo
console.log(colorSecundario ); // verde
console.log(demasColores ); // ['amarillo', 'morado', 'naranja'] - [] en caso no haya colores


//***************************
//41. Valores por defecto en la destructuracion
//***************************

let frutasA = ["banano","pera"];

let [frutaA, frutaB = "manzana" ] = frutasA;

console.log( frutaA ); // banano
// console.log( frutaB ); // undefined (sin definir)
// console.log( frutaB ); // manzana
console.log( frutaB ); // pera

let opciones = {
    nombreA:"fernando",
    apellidoA: "jimenez"
};

let { nombreA, apellidoA = "Herrera" } = opciones;
console.log( nombreA); // fernando
// console.log( nombreA, apellidoA ); // fernando undefined
// console.log( nombreA, apellidoA ); // fernando Herrera

console.log( nombreA, apellidoA ); // fernando jimenez

let nombreB = opciones.nombreA || "Ferrando";
console.log( nombreB ); // fernando



//***************************
//42. Destructuración de parámetros
//***************************

// function crearJugador( nickname, opciones ){
//
//     opciones = opciones || {};
//
//     let hp = opciones.hp,
//         sp = opciones.sp,
//         clase = opciones.clase;
//
//     console.log( nickname, hp, sp, clase );
//
//     // codigo para crear el jugador...
// }

function crearJugador( nickname,
                       { hp, sp, clase } = { hp:200, sp:150, clase:"Guerrero" }
){

    console.log( nickname, hp, sp, clase );

    // codigo para crear el jugador...
}

crearJugador( "Strider", {
    hp: 100,
    sp: 50,
    clase: "mago"
} ); // Strider 100 50 mago


// crearJugador("Strider"); // ERROR - TypeError: Cannot destructure property 'hp' of 'undefined' as it is undefined.
//crearJugador("Strider"); // Strider undefined undefined undefined

crearJugador("Strider"); // Strider 200 150 Guerrero


//***************************
//Cuestionario 6: Examen #6
//***************************

// pregunta 5
let opcionesA = {
    imprime: false,
    soloLectura: true
};

let { imprime } = opcionesA;

if( imprime ){
    console.log("imprimiendo...");
}else{
    console.log("no puede imprimir...");
}
// no puede imprimir...

// pregunta 6
let { puedeEscribir } = opcionesA;

if(puedeEscribir){
    console.log("escribiendo...");
}else{
    console.log("no puede escribir...");
}
// no puede escribir...

// pregunta 9
let { puedeEscribirA = true } = opcionesA;

if(puedeEscribirA){
    console.log("escribiendo A...");
}else{
    console.log("no puede escribir A...");
}
// escribiendo A...

// pregunta 10
let carros = ["mazda","honda","toyota"];

let [,,carro] = carros;

console.log( carro ); // toyota
