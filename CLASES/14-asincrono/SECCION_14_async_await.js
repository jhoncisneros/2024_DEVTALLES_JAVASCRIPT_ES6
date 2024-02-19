//***************************
//74. Async
//***************************

const getNombre = () => {

    return 'fernando';

}

// console.log( getNombre() ); // fernando

//***************************

const getNombre2 = async () => {

    return 'fernando';

}

// console.log( getNombre2() ); // Promise {'fernando'}

// getNombre2().then( nombre => {
//     console.log( nombre ); // fernando
// });

//***************************

const getNombre3 = async () => {

    return new Promise( (resolve, reject) => {

        setTimeout(()=>{
            resolve('Fernando');
        }, 3000);

    });

}

// getNombre3().then( nombre => {
//     console.log( nombre ); // Fernando
// });

//***************************

const saludo = async () => {

    const nombre = await getNombre3();

    return `Hola ${ nombre}`;

}

// console.log( saludo() ); // Hola [object Promise]

saludo().then( mensaje => {

    // console.log( mensaje ); // Hola [object Promise]
    console.log( mensaje ); // Hola Fernando

});








