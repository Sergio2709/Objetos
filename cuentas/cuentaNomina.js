import { Cuenta } from "./cuenta.js";

export class CuentaNomina extends Cuenta{
    constructor(cliente, numeroCuenta, agencia, saldo){
        super(cliente, numeroCuenta, agencia, saldo);
    }
    
    retiroCuenta(valor){
        super._retiroCuenta(valor,1);
    }
}