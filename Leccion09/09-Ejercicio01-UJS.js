class Persona{
    
    static contadorPersonas = 0;

    constructor(idPersona, nombre, apellido, edad){
        this._idPersona = idPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
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
    datosCompletos(){
        return `
            ${this._idPersona} 
            ${this._nombre} 
            ${this._apellido} 
            ${this._edad}`;//Concatenando usando la función de Template String
    }
    toString(){
        return this.datosCompletos();
    }
}
/*
class Empleado extends Persona{
    constructor(idEmpleado, sueldo){
        super(idPersona, nombre, apellido, edad, idEmpleado, sueldo);
        this._idEmpleado = idEmpleado;
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
    datosCompletos(){
        return super.datosCompletos() + ', ' + this._idEmpleado + this._sueldo;
    }
}

class Cliente extends Persona{
    constructor(){

    }
}*/