import {CuentaCorriente} from'./cuenta.js';
import { Cliente } from './cliente.js';

const cliente1 = new Cliente();
cliente1.nombreCliente = "Sergio Castillo";
cliente1.tipoDocumentoCliente = "CC";
cliente1.documentoCliente = "1192782850";
cliente1.telefonoCliente = "3203814542";
cliente1.correoCliente = "sergioicc@hotmail.com"

const cuentaSergio = new CuentaCorriente();
cuentaSergio.numeroCuenta = "123456"
cuentaSergio.agencia = "001"
cuentaSergio.cliente = cliente1;
cuentaSergio.depositoCuenta(2000);
cuentaSergio.retiroCuenta(1000);
console.log(cuentaSergio);

const cliente2 = new Cliente();
cliente2.nombreCliente = "Sofia Lozano";
cliente2.tipoDocumentoCliente = "CC";
cliente2.documentoCliente = "1016111961";
cliente2.telefonoCliente = "3507003090";
cliente2.correoCliente = "sofloza@hotmail.com"

const cuentaSofia = new CuentaCorriente();
cuentaSofia.numeroCuenta = "654321"
cuentaSofia.agencia = "002"
cuentaSofia.cliente = cliente2;
cuentaSofia.depositoCuenta(500);
cuentaSofia.retiroCuenta(100);
console.log(cuentaSofia);

cuentaSergio.transferencia(100,cuentaSofia);

