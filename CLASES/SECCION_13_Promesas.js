
//***************************
//68. Problematica
//***************************

function tareAsincrona(){

    setTimeout(function (){
        console.log("Proceso asincrono terminado");
        // resolve();
        // reject();
    }, 1300);

}

// tareAsincrona(); //Proceso asincrono terminado

// console.log("Codigo secuencial"); // Codigo secuencial

// function resolve(){
//     console.log("Todo OK!");
// }
//
// function reject(){
//     console.log("Todo MALO!");
// }

//***************************
//69. Promesas ES6
//***************************

function tareAsincrona2(){

    let promesa = new Promise( (resolve, reject)=>{

        setTimeout(function (){
            console.log("Proceso asincrono2 terminado");
            // reject(); // TODO MAL
            resolve(); // TODO OK
        }, 1300);

    });

    return promesa;
}

tareAsincrona2().then(
    function(){
        console.log("TODO OK");
    },
    function(){
        console.error("TODO MAL");
    }
);

console.log("Codigo secuencial 2");

