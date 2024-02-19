
//***************************
//65. Miembros estaticos y metodos computados
//***************************

let nombreMetodo = "gritarNombre";

class Persona {

    constructor( nombre) {
        this.nombre = nombre;
    }

    [ nombreMetodo ](){
        console.log( this.nombre.toUpperCase() );
    }

    decirNombre(){
        console.log( this.nombre );
    }

    static crear( nombre ){
        return new Persona( nombre );
    }

}

let yo = Persona.crear("Fernando");

console.log( yo ); // Persona {nombre: 'Fernando'}

console.log( yo.decirNombre() ); // Fernando
console.log( yo.gritarNombre() ); // FERNANDO

// let otraPersona = yo.crear("Juan");  // ERROR - yo.crear is not a function
// console.log( otraPersona ); // ERROR - yo.crear is not a function

//***************************
//66. Herencia de las clases
//***************************

class Rectangulo{

    constructor(alto, largo) {
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return "Rectangulo:" + (this.alto * this.largo);
    }

}

let rectangulo = new Rectangulo(3, 2);

console.log( rectangulo.getArea() ); // 6

class Cuadrado extends Rectangulo {

    constructor(alto) {
        super(alto, alto);
    }

}

let cuadrado = new Cuadrado( 3);

console.log( cuadrado.getArea() ); // 9

console.log( cuadrado instanceof Cuadrado ); // true
console.log( cuadrado instanceof Rectangulo ); // true


//***************************
//67. Sobrescribiendo funciones del padre
//***************************

class Cuadrado2 extends Rectangulo {

    constructor(alto) {
        super(alto, alto);
    }

    getArea() {
        // return "Cuadrado: " + (this.alto * this.largo);
        return super.getArea();
    }

}

let cuadrado2 = new Cuadrado2( 3);

console.log( cuadrado2.getArea() ); // Cuadrado: 9
console.log( cuadrado2.getArea() ); // Rectangulo:9


//***************************
//Cuestionario 11: Examen #11
//***************************

// Pregunta 3

class Figura{
    static imprime(){
        console.log("=================");
        console.log("=               =");
        console.log("=    Cuadrado   =");
        console.log("=               =");
        console.log("=================");
    }
}

Figura.imprime();

// Pregunta 4

let metodo = "imprime";

class Figura2{
    static [metodo](){
        console.log("=================");
        console.log("=               =");
        console.log("=    Cuadrado   =");
        console.log("=               =");
        console.log("=================");
    }
}

Figura2.imprime();

// Pregunta 10

class Figura3{

    constructor(lado) {
        this.lado = lado;
    }

    obtenerVentana(){
        // return super(); // ERROR -  'super' keyword unexpected here
    }

}

let figura3 = new Figura3();
console.log( figura3.obtenerVentana());








