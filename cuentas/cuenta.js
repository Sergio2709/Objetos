import { Cliente } from "../cliente.js";

export class Cuenta {
    #cliente;
    #saldoCuenta;
    
    set cliente(valor) { 
        if (valor instanceof Cliente){
            this.#cliente = valor;
        }
    }

    get cliente() {
        return this.#cliente;
    }
    
    constructor(cliente, numero, agencia, saldoCuenta) {
        if (this.constructor == Cuenta){
            throw new Error ('No se puede instanciar un objeto de la clase cuenta')
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldoCuenta = saldoCuenta;
    }
    
    depositoCuenta(valor) {
        if (valor > 0){
            this.#saldoCuenta += valor;
            console.log("depositaste "+valor+" en tu cuenta, tu saldo actual es de " + this.#saldoCuenta);
        } else {
            console.log("valor invalido")
        }

    }

    retiroCuenta(valor) {
        //clase abstracta
        throw new Error("Debe implementar el metodo retiroCuenta en su clase");
    }

    _retiroCuenta(valor, comision) {
        const valorReal = valor;
        var valor = valor * (1+comision/100);
        if (valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
            console.log("retiraste "+valorReal+" en tu cuenta, tu saldo actual es de " + this.#saldoCuenta);
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
