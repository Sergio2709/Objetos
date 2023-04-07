import { Cuenta } from'./cuenta.js';
import { Cliente } from './cliente.js';
import { CuentaCorriente } from './cuentaCorriente.js';
import { cuentaAhorros } from './cuentaAhorros.js';

const cliente1 = new Cliente("Sergio Castillo", "CC", "1192782850", "3203814542", "sergioicc@hotmail.com");
const cuentaSergio = new cuentaAhorros(cliente1, "123456", "001", 0);

const cliente2 = new Cliente("Sofia Lozano", "CC", "1016111961", "3507003090", "sofloza@hotmail.com");
const cuentaSofia = new cuentaAhorros(cliente2, "654321", "002", 0);

const cliente3 = new Cliente("Leonardo Garrido SAS", "NIT", "890941562", "3215644245", "info@leonardogarrido.com");
const CuentaLeonardo = new CuentaCorriente(cliente3, "654444", "003")

console.log(cuentaSergio);
console.log(cuentaSofia);
console.log(CuentaLeonardo);

cuentaSergio.depositoCuenta(1000);
cuentaSergio.retiroCuenta(100);
cuentaSergio.depositoCuenta(100);

CuentaLeonardo.depositoCuenta(1000);
CuentaLeonardo.retiroCuenta(100);
CuentaLeonardo.depositoCuenta(100);
