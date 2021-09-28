import Animal from './animal.js'

export default class Mascota extends Animal {
  constructor(nombrePropietario = '', direccionPropietario = '', telefonoPropietario = '', tipoAnimal = '', nombreMascota = '', enfermedad = '') {
    super(nombrePropietario, direccionPropietario, telefonoPropietario, tipoAnimal)
    this._nombreMascota = nombreMascota
    this._enfermedadMascota = enfermedad
  }

  get nombreMascota() {
    return this._nombreMascota
  }
  get enfermedadMascota() {
    return this._enfermedadMascota
  }

  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota
  }
  set enfermedadMascota(nuevaEnfermedadMascota) {
    this._enfermedadMascota = nuevaEnfermedadMascota
  }
}