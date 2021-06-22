class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor(){
        this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamano}]`;
    }
}
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,raton,teclado){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this.idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}]`;
    }
}
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

//Prueba de clase raton
let raton1 = new Raton('Usb','HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth','Dell');
raton2.marca = 'HP';
console.log(raton2.toString());
//Prueba clase teclado
let teclado1 = new Teclado('Bluetooth','MSI');
let teclado2 = new Teclado('USB','Acer');
console.log(teclado1.toString());
console.log(teclado2.toString());
//Prueba de clase monitor
let monitor1 = new Monitor('HP',15);
let monitor2 = new Monitor('Dell',27);
console.log(monitor1.toString());
console.log(monitor2.toString());
//Prueba de clase computadora
let computadora1 = new Computadora('HP',monitor1,raton1,teclado1);
/*console.log(computadora1.toString());*/
console.log(`${computadora1}`);//Usando la sintaxis de template string que directamente manda a llamar el metodo toString()
let computadora2 = new Computadora('Armada',monitor2,raton2,teclado2);
console.log(`${computadora2}`);
//Prueba de clase orden
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();