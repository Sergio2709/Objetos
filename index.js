class Cliente {
    nombreCliente;
    tipoDocumentoCliente
    documentoCliente;
    telefonoCliente;
    correoCliente;
}
class CuentaCorriente {
    numeroCuenta;
    saldoCuenta;
    agencia;
    depositoCuenta(valor) {
        this.saldoCuenta += valor;
    }
    retiroCuenta(valor) {
        this.saldoCuenta -= valor;
    }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.documentoCliente = "1192785456";
cliente1.tipoDocumentoCliente= "CC";
cliente1.telefonoCliente = "3203547861";
cliente1.correoCliente = "ser@gmail.com";

const cuenta1 = new CuentaCorriente();
cuenta1.numeroCuenta = "123";
cuenta1.saldoCuenta = 100000;
cuenta1.agencia = "banco plant"
console.log(cliente1, cuenta1);

const cliente2 = new Cliente();
cliente2.nombreCliente = "Sofia";
cliente2.documentoCliente = "1016895485";
cliente2.tipoDocumentoCliente= "CC";
cliente2.telefonoCliente = "3506992989";
cliente2.correoCliente = "sofi@gmail.com";

const cuenta2 = new CuentaCorriente();
cuenta2.numeroCuenta = "145";
cuenta2.saldoCuenta = 125000;
cuenta2.agencia = "banco cool"
console.log(cliente2, cuenta2);
cuenta2.depositoCuenta(10000);
console.log(cuenta2);
cuenta2.retiroCuenta(20000);
console.log(cuenta2);


const cliente3 = new Cliente();
cliente3.nombreCliente = "Steven";
cliente3.documentoCliente = "17154869";
cliente3.tipoDocumentoCliente= "CC";
cliente3.telefonoCliente = "3453547861";
cliente3.correoCliente = "stev@gmail.com";

const cuenta3 = new CuentaCorriente();
cuenta3.numeroCuenta = "235";
cuenta3.saldoCuenta = 50000;
cuenta3.agencia = "banco earth"

console.log(cliente3,cuenta3);

