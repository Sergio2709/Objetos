import {CuentaCorriente} from'./cuenta.js';
import { Cliente } from './cliente.js';

const cliente1 = new Cliente("Sergio Castillo", "CC", "1192782850", "3203814542", "sergioicc@hotmail.com");
const cuentaSergio = new CuentaCorriente(cliente1, "123456", "001");

cuentaSergio.depositoCuenta(2000);
console.log(cuentaSergio.cliente)

const cliente2 = new Cliente("Sofia Lozano", "CC", "1016111961", "3507003090", "sofloza@hotmail.com");
const cuentaSofia = new CuentaCorriente(cliente2, "654321", "002");

cuentaSofia.depositoCuenta(500);
console.log(cuentaSofia.cliente);

cuentaSergio.transferencia(100,cuentaSofia);

console.log(CuentaCorriente.cantidadCuentas);