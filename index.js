import { Cliente } from './cliente.js';
import { CuentaCorriente } from './cuentas/cuentaCorriente.js';
import { cuentaAhorros } from './cuentas/cuentaAhorros.js';
import { CuentaNomina } from './cuentas/cuentaNomina.js';
import { Empleado } from './empleados/empleado.js';
import { Gerente } from './empleados/gerente.js';
import { Director } from './empleados/director.js';
import { SistemaAutencaticacion } from './SistemaAutenticacion.js';

const cliente1 = new Cliente("Sergio Castillo", "CC", "1192782850", "3203814542", "sergioicc@hotmail.com");
cliente1.asignarClave('111111');
const cuentaSergio = new cuentaAhorros(cliente1, "123456", "001", 0);

const cliente2 = new Cliente("Sofia Lozano", "CC", "1016111961", "3507003090", "sofloza@hotmail.com");
cliente2.asignarClave('222222');
const cuentaSofia = new cuentaAhorros(cliente2, "654321", "002", 0);

const cliente3 = new Cliente("Leonardo Garrido SAS", "NIT", "890941562", "3215644245", "info@leonardogarrido.com");
cliente3.asignarClave('333333');
const CuentaLeonardo = new CuentaCorriente(cliente3, "654444", "003");

const cliente4 = new Cliente("Daniela Salazar", "CC", "1016158986", "3203548689", "danielas@gmail.com");
cliente4.asignarClave('444444')
const cuentaDaniela = new CuentaNomina(cliente4,"654421", "004", 0); 

const empleado1 = new Empleado("Juan Morales","CC","1192742582",10000);
empleado1.asignarClave('12345')
const empleado2 = new Gerente("David Castro","CC","1056521489",12000);
empleado2.asignarClave('22345')
const empleado3 = new Director("Helena Rivas","CC","1014235698",15000);
empleado3.asignarClave('32345')
console.log(empleado1.verBonificacion(),empleado2.verBonificacion(),empleado3.verBonificacion());

console.log(SistemaAutencaticacion.login(empleado1,'12345'))
console.log(SistemaAutencaticacion.login(empleado2,'22345'))
console.log(SistemaAutencaticacion.login(empleado3,'32345'))
console.log(SistemaAutencaticacion.login(cliente1,'111111'))
console.log(SistemaAutencaticacion.login(cliente2,'123232'))
console.log(SistemaAutencaticacion.login(cliente3,'333333'))
console.log(SistemaAutencaticacion.login(cliente4,'444444'))

