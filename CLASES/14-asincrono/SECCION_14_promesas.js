//***************************
//73. Promesas en lugar de callbacks
//***************************

const empleados = [{
    id: 1,
    nombre: 'fernando'
},{
    id: 2,
    nombre: 'melisa'
},{
    id: 3,
    nombre: 'juan'
}];

const salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

const getEmpleado = ( id ) => {

    // const promesa = new Promise( ( resolve, reject ) => {
    return new Promise( ( resolve, reject ) => {

        const empleadoDB = empleados.find( empleado => empleado.id === id );

        if( !empleadoDB ){
            reject(`No existe empleado con el id ${ id }`);
        }else{
            resolve( empleadoDB);
        }

    } );

    // return promesa;

};

const getSalario = ( empleado) => {

    return new Promise( (resolve, reject) => {

        const salarioDB = salarios.find( salario => salario.id === empleado.id);

        if( !salarioDB ){
            reject(`No existe un salario para el empleado ${ empleado.nombre }`);
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }

    });

};

//*********************************

getEmpleado( 1 ).then( empleado => {

    console.log('El empleado es', empleado); // El empleado es {id: 1, nombre: 'fernando'}

});

getEmpleado( 5 ).then( empleado => {

    console.log('El empleado es', empleado); // ERROR - Uncaught (in promise) No existe empleado con el id 5

})
.catch( err => console.log( err )); // No existe empleado con el id 5

//****************************************

getEmpleado( 1 ).then( empleado => {

    getSalario( empleado ).then( resp => {

        console.log( resp ); // {nombre: 'fernando', salario: 1000, id: 1}

    });

})
.catch( err => console.log( err ));


getEmpleado( 5 ).then( empleado => {

    getSalario( empleado ).then( resp => {

        console.log( resp );

    });

})
.catch( err => console.log( err )); // No existe empleado con el id 5

//****************************************

getEmpleado( 1 )
    .then( getSalario )
    .then( console.log ) // {nombre: 'fernando', salario: 1000, id: 1}
    .catch( console.log );

getEmpleado( 5 )
.then( getSalario )
.then( console.log )
.catch( console.log ); // No existe empleado con el id 5












