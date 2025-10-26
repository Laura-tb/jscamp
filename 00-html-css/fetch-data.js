//FETCH: método de JS para obtener datos, permite hacer una peticion a cualquier ruta interna o externa y obtener datos
const container = document.querySelector('.jobs-listings')

const RESULTS_PER_PAGE = 3

fetch("./data.json")  /*Fetch es asincrono */
    .then((response) => {
        return response.json()
    })
    .then((jobs) => {
        console.log(jobs)
        jobs.forEach(job => {
            const article = document.createElement('article')
            article.className = 'job-listing-card'

            article.dataset.modalidad = job.data.modalidad
            article.dataset.nivel = job.data.nivel
            article.dataset.technology = job.data.technology

            //Se crea plantilla interna del articulo con datos del json
            article.innerHTML = `<div>
                <h3>${job.titulo}</h3>
                <small>${job.empresa} | ${job.ubicacion}</small>
                <p>${job.descripcion}</p>
                </div>
                <button class="button-apply-job">Aplicar</button>`

            container.appendChild(article) //Añade articulo dentro del contenedor jobs-listings
        })
    });