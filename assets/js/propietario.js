export default class Propietario {
  constructor(nombrePropietario = '', direccionPropietario = '', telefonoPropietario = '') {
    this.nombrePropietario = nombrePropietario;
    this.direccionPropietario = direccionPropietario;
    this.telefonoPropietario = telefonoPropietario;
  }

  datosPropietario() {
    return `El Nombre del dueño es: ${this.nombrePropietario}. El Domicilio es: ${this.direccionPropietario}, y el numero telefonico de contacto: ${this.telefonoPropietario}
    `
  }
}