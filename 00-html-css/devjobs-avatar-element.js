//Web Component DevJobsAvatar.
//Recupera un avatar de diferentes servicios como github, twitter, etc...
class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); // llamar al constructor de HTMLElement

        this.attachShadow({ mode: 'open' })
    }

    createUrl(service, username) {
        return `https://unavatar.io/${service}/${username}`
    }

    render() {
        const service = this.getAttribute('service') ?? 'github'
        const username = this.getAttribute('username') ?? 'midudev'
        const size = this.getAttribute('size') ?? '40'

        const url = this.createUrl(service, username)

        this.shadowRoot.innerHTML = `
        <style>
        img {
            width: ${size}px;
            height: ${size}px;
            border-radius: 9999px;
        }
        </style>

        <img 
            src="${url}" 
            alt="Avatar de ${username}" 
            class="avatar"
        />
        `
    }

    connectedCallback() {
        this.render()
    }
}

//Registrar el componente
customElements.define('devjobs-avatar', DevJobsAvatar)