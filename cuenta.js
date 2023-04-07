export class Cuenta {
    #cliente;
    #saldoCuenta;

    constructor(tipo, cliente, numero, agencia, saldoCuenta) {
        this.tipo = tipo;
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldoCuenta = saldoCuenta;
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
        const valorReal = valor;
        if (this.tipo == "Corriente"){
            valor = valor * 1.05;
        } else if (this.tipo == "Ahorros"){
            valor = valor *1.02;
        }

        if (valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
            console.log("retiraste "+valorReal+" en tu cuenta corriente, tu saldo actual es de " + this.#saldoCuenta);
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
