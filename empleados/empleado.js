export class Empleado {
    #nombre;
    #tipoDocumento;
    #numeroDocumento;
    #salario;
    #clave;

    constructor(nombre, tipoDocumento, numeroDocumento, salario){
        this.#nombre = nombre;
        this.#tipoDocumento = tipoDocumento;
        this.#numeroDocumento = numeroDocumento;
        this.#salario = salario;
        this.#clave = "";
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    get clave(){
        return this.#clave;
    }

    verBonificacion(){
        return this.#salario;
    }
    
    _verBonificacion(bono){
        return this.#salario + this.#salario*bono/100;
    }
}