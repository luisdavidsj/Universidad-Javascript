/*
Ejemplos de 
tipos de datos 
en JavaScript
*/
//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(objeto);

var numero2 = 2;
console.log(numero2);

var objeto2 = {
    estoEsUnString : "Hola, soy un string",
    estoEsUnNumero : 1,
    estoEsUnObjeto: {soyString:"Hola",soyNumero:1},
    estoEsUnaFuncion: function Saludo(){return 'Hola, soy una funcion dentro de un objeto2'},
    estoEsUnArreglo: [1,2,3],
    estoEsUnNull: null,
    estoEsUndefined: undefined
}

console.log(`Salida: ${objeto2.estoEsUnString} ${objeto2.estoEsUnNumero} ${objeto2.estoEsUnObjeto.soyString} 
${objeto2.estoEsUnArreglo} ${objeto2.estoEsUnNull} ${objeto2.estoEsUndefined} ${objeto2.estoEsUnaFuncion()}`);
//Prueba exitosa