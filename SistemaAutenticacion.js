export class SistemaAutencaticacion {
    static login(usuario, clave){
        return usuario.clave == clave;
    }
}