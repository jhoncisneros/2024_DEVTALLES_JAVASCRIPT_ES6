//***************************
//72. Problemas con los callbacks
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

const getEmpleado = ( id, callback) => {

    const empleadoDB = empleados.find( empleado => empleado.id === id );

    if( !empleadoDB ){
        callback(`No existe empleado con el id ${ id }`);
    }else{
        callback( null, empleadoDB);
    }
};

const getSalario = ( empleado, callback) => {

    const salarioDB = salarios.find( salario => salario.id === empleado.id);

    if( !salarioDB ){
        callback(`No existe un salario para el empleado ${ empleado.nombre }`);
    }else{
        callback( null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

};

getEmpleado(1, (err, empleado) => {

    if( err ){
        return console.log(err);
    }

    getSalario( empleado, (err, resp) => {

        if(err){
            return console.log(err);
        }

        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`); // El salario de fernando es de 1000

    } );
    // console.log('empleado', empleado); // empleado {id: 1, nombre: 'fernando'}

});

getEmpleado(5, (err, empleado) => {

    if( err ){
        return console.log(err); // No existe empleado con el id 5
    }

    console.log('empleado', empleado); //

});









