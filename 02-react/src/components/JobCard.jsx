// Crear el componente JobCard e importarlo y usarlo en App.jsx
// componente de React devuelve elementos. Nombre con primera letra en mayuscula

import React from 'react'

function JobCard({ titulo, empresa, ubicacion, descripcion }) {

    const [isApplied, setIsApplied] = React.useState(false)

    function handleClick() {
        setIsApplied(!isApplied)

    }
    const text = isApplied ? 'Aplicado' : 'Aplicar'
    const buttonClass = isApplied ? 'is-applied' : ''


    return (
        <article className="job-listing-card">
            <div>
                <h3>{titulo}</h3>
                <small>{empresa} - {ubicacion} </small>
                <p>{descripcion}</p>
            </div>
            <button
                className={`button-apply-job ${buttonClass}`}
                onClick={handleClick}>
                {text}
            </button>
        </article>
    )
}

export default JobCard
