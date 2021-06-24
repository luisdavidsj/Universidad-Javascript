//miFuncionFlecha();//Funcion flecha no acepta hoisting

let miFuncion = function (){
    console.log('saludos desde mi función');
}

const miFuncionFlecha = () => {//Sintaxis de funcion flecha
    console.log('saludos desde mi función flecha');
}

miFuncion();
miFuncionFlecha();