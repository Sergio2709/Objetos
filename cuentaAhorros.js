import { Cuenta } from "./cuenta.js";

export class cuentaAhorros extends Cuenta{
    constructor(cliente, numeroCuenta, agencia, saldo){
        super(cliente, numeroCuenta, agencia, saldo);
    }
    
    retiroCuenta(valor){
        super._retiroCuenta(valor,2);
    }
}