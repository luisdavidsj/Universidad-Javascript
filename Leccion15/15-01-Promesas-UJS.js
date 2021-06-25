let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));


//Practica de promesas
let miPromesa2 = new Promise((a, b) => {
    let siono = true;
    if(siono)
        a('SI');
    else
        b('NO');    
});
miPromesa2.then(valor => console.log(valor)).catch(error=>console.log(error));
