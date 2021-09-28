import Mascota from "./mascota.js";

let formulario = document.querySelector('form')

let lista = (mascota) => {
  return `<li>${mascota.datosPropietario()}</li><li>${mascota.tipoAnimal}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedadMascota}</li>`
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  let propietario = document.querySelector('#propietario').value
  let telefono = document.querySelector('#telefono').value
  let direccion = document.querySelector('#direccion').value
  let nombreMascota = document.querySelector('#nombreMascota').value
  let tipo = document.querySelector('#tipo').value
  let enfermedad = document.querySelector('#enfermedad').value
  let resultado = document.querySelector('ul')

  let mascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad)
  resultado.innerHTML = lista(mascota)

  window.scroll({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
})