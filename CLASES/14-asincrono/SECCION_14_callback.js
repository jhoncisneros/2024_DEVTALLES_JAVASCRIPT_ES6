//***************************
//71. Callbacks
//***************************

const getUsuarioById = ( id, callback ) => {

    const usuario = {
        nombre: 'fernando',
        id
    };

    if( id === 20){
        callback(`El usuario con el id ${ id }, no existe`);
    }else{
        callback( null, usuario );
    }

};

getUsuarioById( 1, ( err, user) =>{

    if( err ){
        return console.log( err);
    }

    console.log('Usuario de base de datos', user); // Usuario de base de datos {nombre: 'fernando', id: 1}

} );

getUsuarioById( 20, ( err, user) =>{

    if( err ){
        return console.log( err); // El usuario con el id 20, no existe
    }

    console.log('Usuario de base de datos', user); //

} );










