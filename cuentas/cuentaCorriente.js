import { Cuenta } from "./cuenta.js";

export class CuentaCorriente extends Cuenta{
    static cantidadCuentas = 0;
    
    constructor(cliente, numeroCuenta, agencia){
        super(cliente, numeroCuenta, agencia, 0);
        CuentaCorriente.cantidadCuentas++;
    }

    retiroCuenta(valor){
        super._retiroCuenta(valor,5);
    }
}
