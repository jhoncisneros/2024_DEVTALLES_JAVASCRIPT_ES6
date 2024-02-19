
function saludo2( tiempo ){
    saludo("Hola Mundo", tiempo);
}

function saludo( mensaje, tiempo = 1500 ){ //ES6

    //ES5
    // mensaje = mensaje || "Hola Mundo";
    // mensaje = ( typeof mensaje !== "undefined" ) ? mensaje : "Hola Mundo2"

    setTimeout( function(){
        console.log(mensaje);
    }, tiempo );

}

saludo(); // undefined
saludo2();

/*****************************************/

// function saludar ( fn = function (){ console.log("Hola Mundo"); } ){
function saludar ( fn = fnTemporal, persona = { nombre:"Fernando"} ){

    console.log( typeof fn );

    if( typeof fn === "undefined" ){
        console.error("No es una funcion");
        return;
    }

    fn();

    console.log( persona );

}

function fnTemporal(){
    console.log("Hola Mundo FN");
}

var persona = {
    nombre: "Juan Carlos"
}
saludar( fnTemporal,  persona);
