import { Cliente } from "./cliente.js";

export class CuentaCorriente {
    #cliente;
    numeroCuenta;
    #saldoCuenta;
    agencia;
    static cantidadCuentas = 0;

    set cliente(valor) { 
        if (valor instanceof Cliente){
            this.#cliente = valor;
        }
    }

    get cliente() {
        return this.#cliente;
    }
    
    constructor(cliente, numeroCuenta, agencia){
        this.cliente = cliente;
        this.numeroCuenta = numeroCuenta;
        this.#saldoCuenta = 0;
        this.agencia = agencia;
        CuentaCorriente.cantidadCuentas++;
    }
    depositoCuenta(valor) {
        if (valor > 0){
            this.#saldoCuenta += valor;
            console.log("depositaste "+valor+" en tu cuenta corriente, tu saldo actual es de " + this.#saldoCuenta);
        } else {
            console.log("valor invalido")
        }

    }
    retiroCuenta(valor) {
        if (valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
            console.log("retiraste "+valor+" en tu cuenta corriente, tu saldo actual es de " + this.#saldoCuenta);
        } else {
            console.log("saldo insuficiente");
        } 
    }

    verSaldo(){
        return this.#saldoCuenta;
    }

    transferencia(valor, cuentaDestino){
        cuentaDestino.depositoCuenta(valor);
        console.log("La transferencia por valor de $"+ valor + " a la cuenta fue exitosa")
    }

}
