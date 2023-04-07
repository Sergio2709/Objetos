export class CuentaCorriente {
    cliente;
    numeroCuenta;
    #saldoCuenta;
    agencia;

    constructor(){
        this.cliente =null;
        this.numeroCuenta = '';
        this.#saldoCuenta = 0;
        this.agencia = '';
    }
    depositoCuenta(valor) {
        if (valor > 0){
            this.#saldoCuenta += valor;
            console.log(this.cliente + "depositaste "+valor+" en tu cuenta corriente, tu saldo actual es de " + this.#saldoCuenta);
        } else {
            console.log("valor invalido")
        }

    }
    retiroCuenta(valor) {
        if (valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
            console.log(this.cliente + "retiraste "+valor+" en tu cuenta corriente, tu saldo actual es de " + this.#saldoCuenta);
        } else {
            console.log("saldo insuficiente");
        } 
    }

    verSaldo(){
        return this.#saldoCuenta;
    }

    transferencia(valor, cuentaDestino){
        this.retiroCuenta(valor);
        cuentaDestino.depositoCuenta(valor);
        console.log("La transferencia por valor de $"+ valor + " a la cuenta de "+ cuentaDestino + "fue exitosa")
    }

}
