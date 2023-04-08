import { Empleado } from "./empleado.js";

export class Gerente extends Empleado {
    constructor(nombre, tipoDocumento, numeroDocumento, salario){
        super(nombre, tipoDocumento, numeroDocumento, salario);
    }

    verBonificacion() {
        const bono = 5;
        return super._verBonificacion(bono);
    }
}