import { Cuenta } from'./cuenta.js';
import { Cliente } from './cliente.js';

const cliente1 = new Cliente("Sergio Castillo", "CC", "1192782850", "3203814542", "sergioicc@hotmail.com");
const cuentaSergio = new Cuenta("Ahorros",cliente1, "123456", "001", 0);

const cliente2 = new Cliente("Sofia Lozano", "CC", "1016111961", "3507003090", "sofloza@hotmail.com");
const cuentaSofia = new Cuenta("Ahorros",cliente2, "654321", "002", 0);

const cliente3 = new Cliente("Leonardo Garrido SAS", "NIT", "890941562", "3215644245", "info@leonardogarrido.com");
const CuentaLeonardo = new Cuenta("Corriente",cliente3, "654444", "003", 0)

CuentaLeonardo.depositoCuenta(1000);
console.log(CuentaLeonardo.verSaldo());
CuentaLeonardo.retiroCuenta(100);
console.log(CuentaLeonardo.verSaldo());
CuentaLeonardo.depositoCuenta(100);
console.log(CuentaLeonardo.verSaldo());

cuentaSergio.depositoCuenta(1000);
console.log(cuentaSergio.verSaldo());
cuentaSergio.retiroCuenta(100);
console.log(cuentaSergio.verSaldo());
cuentaSergio.depositoCuenta(100);
console.log(cuentaSergio.verSaldo());
