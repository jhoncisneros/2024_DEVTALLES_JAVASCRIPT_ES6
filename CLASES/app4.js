
function sumar( a = 3, b = 4 ){
// function sumar( a, b ){
    console.log( arguments );
}

// sumar( 1, 2, 5, "fernando", {a:1, b: 2} );
sumar( );

/**********************************/

// function agregar_alumno( arr_alumnos, alumno1, alumno2, alumno3 ){
function agregar_alumno(arr_alumnos, ...alumnos ){

    console.log( arguments );

    for(let i= 0; i < alumnos.length; i++){
        arr_alumnos.push( alumnos[i] );
    }

    return arr_alumnos;

}

let alumnos_arr = ["Fernando"];
let alumnos_arr2 = agregar_alumno( alumnos_arr, "Maria", "Pedro", "Susana", "Juan", "Hernando" );

console.log(alumnos_arr2);

/****************************************/

// function juntar_nombres( ...nombres, apellidos ){ // ERROR
// function juntar_nombres( ...apellidos, ...nombres ){ // ERROR
function juntar_nombres( ...apellidos ){
    // cualquier cosa
}
