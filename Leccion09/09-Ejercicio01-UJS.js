//Se crea la clase Padre 'Persona'
class Persona{
    //Se inicia el contador de personas en 0 en una variable estática
    static contadorPersonas = 0;
    //Se inicializa el constructor, el cual recibe 3 parámetros, además de sumar en 1 la variable _idPersona cada vez que se cree un objeto de esta clase
    constructor(nombre, apellido, edad){
        //Se inicializan las variables necesarias para este constructor
        this._idPersona = ++Persona.contadorPersonas;//Pre-Incremento de la clase persona de la variable estática contadorPersonas
        //Las siguientes 3 variables se crean en funcion de los parametros recibidos en el constructor
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    //gets y sets de la clase Persona
    get idPersona(){
        //Con un get solo se obtiene el valor establecido, en este caso, estamos retornando solamente la variable _idPersona
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        //Con un set podemos cambiar el valor de una variable, en este caso, esta funcion set, cambia el valor de la variable _nombre, en funcion del parametro recibido en nombre
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    /*Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
    el metodo que se ejecuta depende si es una referencia de tipo padre 
    o de tipo hijo*/
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
        //Concatenando usando la función de Template String
    }
}
//Se crea la clase Empleado que a su vez es hija de la clase padre 'Persona'
class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}
//Se crea la classe Cliente, que tambien es hija de la classe padre 'Persona'
class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}

//Prueba de Clase Persona
let persona1 = new Persona('Juanito','Perez', 28);
console.log(persona1.toString());

let persona2 = new Persona('Lupita','Jimenez',20);
console.log(persona2.toString());

let empleado1 = new Empleado('Jose','Rodriguez',30,5000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Laura','Quintero',50,7000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Miguel','Tellez',29,new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Pigmaleon','Dominguez',27,new Date());
console.log(cliente2.toString());