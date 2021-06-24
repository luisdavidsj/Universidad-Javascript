let miFuncion = function (){
    console.log('saludos desde mi función');
}

// const miFuncionFlecha = () => {
//     console.log('saludos desde mi función flecha');
// }

//const miFuncionFlecha = () => console.log('saludos desde mi función flecha');

//miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde función flecha';
// }

const saludar = () => 'Saludos desde función flecha';

console.log( saludar() );

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});//Se tiene que poner entre PARENTESIS para que no lo tome como cuerpo de la funcion
console.log( regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

//const funcionConParametros = (mensaje) => console.log( mensaje );
const funcionConParametros = mensaje => console.log( mensaje );//Si solo recibe un parametro podemos omitir los parentesis
funcionConParametros('saludos con parametros');


//const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};
console.log( funcionConVariosParametros(3,5));


