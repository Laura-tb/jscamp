/*BOTON APLICAR DE PÁGINA EMPLEOS.HTML */
const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', function (event) {
    const element = event.target

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
})

/*FORMAS DE AÑADIR EVENTOS CLICK A UN ELEMENTO*/
//1º forma: recupera el primer boton que encuentra, si no lo encuentra me da null.
//por lo que no se podria hacer boton.addEventListener si no lo ha encontrado. Para ello se aplicaria un condicional
/*const boton = document.querySelector('.button-apply-job')
console.log(boton)

if (boton != null) {
    boton.addEventListener('click', function () {
        boton.textContent = '¡Aplicado!'
        boton.classList.add('is-applied')
        boton.disabled = true
    })
}*/

/*2º forma: devuelve un NodeList (array like) con todos los botones que encuentre o una lista vacia [] si no encuentra ninguno
const botones = document.querySelectorAll('.button-apply-job')

botones.forEach(boton => {
    boton.addEventListener('click', function () {
        boton.textContent = '¡Aplicado!'
        boton.classList.add('is-applied')
        boton.disabled = true
    })
})*/

// 3º forma: añadir un solo evento al contenedor padre jobs-listings, y si detecta el click en el contenedor padre, el evento recibe el click. ütil para añadir botones dinámicamente más adelante.
//Poner jobsListingSection? significa que se pregunta si ese section es null o undefined, y si es así, no ejecuta nada de lo que tenga a la derecha.