import Propietario from "./propietario.js"

export default class Animal extends Propietario {
  constructor(nombrePropietario = '', direccionPropietario = '', telefonoPropietario = '', tipoAnimal = '') {
    super(nombrePropietario, direccionPropietario, telefonoPropietario)
    this._tipoAnimal = tipoAnimal;
  }

  get tipoAnimal() {
    return `El tipo de animal es un: ${this._tipoAnimal}`
  }
}