/*EVENTOS DE TECLADO Y FORMULARIOS
//Evento input del buscador de empleos de la página empleos.html
//Cuando se introduce un cambio sobre le input de busqueda, quiero que lo saque por consola
const searchInput = document.querySelector('#empleos-seach-input')

searchInput.addEventListener('input', function(){
    console.log(searchInput.value)
})

//Evento blur se dispara cuando el campo pierde el foco
searchInput.addEventListener('blur', function(){
    console.log('Se dispara cuando pierde el foco')
})

//En formulario obtenemos informacion de usuario y hay un boton para enviar el formulario. El evento submit se dispara cuando se envia el formulario y la informacion se envia a la url

const searchForm = document.querySelector('#empleos-search-form')

searchForm.addEventListener('submit', function(event){
    event.preventDefault() //Con esto evitamos que se recargue la página al enviar el formulario, que es el comportamiento por defecto, y no aparezcan los datos en la url

    console.log('submit')
})

//Evento para saber cuales son las teclas que se han presionado
document.addEventListener('keydown', function(event){
    console.log("Tecla presionada: ", event.key)
    console.log("¿Esta pulsada la tecla shift?", event.shiftKey)
    console.log("¿Esta pulsada la tecla alt?", event.altKey)
    console.log("¿Esta pulsada la tecla ctrl?", event.ctrlKey)
})*/

/*FILTROS search-filters DE PÁGINA EMPLEOS.HTML*/
/*Cuando selecciono una opcion del select, me devuelve el valor seleccionado y lo muestra en el span de id filter-selected-value.
Seleccionamos todos los elementos de lso empleos, escuchamos el evento de cambio de filtro, recuperamos el valor y aparecerá el valor en la web, una vez eso, iteramos todos los elementos con la clase job-listing-card y recuperamos informacion del dataset o del gettAttribute haciendo referencia a data-modalidad. Si los valores coinciden con dataset se muestran, si no se ocultan.*/

import { state } from './config.js'

state.count++

console.log(state)

const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')


filter.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')
    const selectedValue = filter.value

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    } else {
        mensaje.textContent = ''
    }

    //Iterar cada uno de los empleos y mostrar por consola el valor del atributo data-modalidad
    jobs.forEach(job => {
        //const modalidad = job.dataset.modalidad //1º opcion
        const modalidad = job.getAttribute('data-modalidad') //2º opcion        
        const isShown = selectedValue === modalidad || selectedValue === '' //Se muestra cuando cumpla alguna de las dos condiciones
        job.classList.toggle('is-hidden', isShown === false) //Aplica la clase is-hidden cuando no se tenga que mostrar (isShown === false).

        /*Otra forma de hacerlo sin toggle  
        if (selectedValue === modalidad || selectedValue === '') {
            job.classList.remove('is-hidden')
        } else {
            job.classList.add('is-hidden')
        }*/

    })
})