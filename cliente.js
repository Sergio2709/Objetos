export class Cliente {
    nombreCliente;
    tipoDocumentoCliente
    documentoCliente;
    telefonoCliente;
    correoCliente;
    #clave;

    constructor(nombreCliente, tipoDocumentoCliente, documentoCliente, telefonoCliente, correoCliente){
        this.nombreCliente = nombreCliente;
        this.tipoDocumentoCliente = tipoDocumentoCliente;
        this.documentoCliente = documentoCliente;
        this.telefonoCliente = telefonoCliente;
        this.correoCliente = correoCliente;
        this.#clave;
    }
    asignarClave(clave){
        this.#clave = clave;
    }

    get clave(){
        return this.#clave;
    }
}
