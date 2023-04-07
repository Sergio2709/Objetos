export class Cliente {
    nombreCliente;
    tipoDocumentoCliente
    documentoCliente;
    telefonoCliente;
    correoCliente;

    constructor(nombreCliente, tipoDocumentoCliente, documentoCliente, telefonoCliente, correoCliente){
        this.nombreCliente = nombreCliente;
        this.tipoDocumentoCliente = tipoDocumentoCliente;
        this.documentoCliente = documentoCliente;
        this.telefonoCliente = telefonoCliente;
        this.correoCliente = correoCliente;
    }
}
