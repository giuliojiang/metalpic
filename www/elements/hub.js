
window.customElements.define("metalpic-hub", class extends HTMLElement {

    constructor() {
        super();
        this.renderFirst();
    }

    connectedCallback() {
        this.render();
    }

    // Events =================================================================


    handleButtonClick() {
        let event = new Event("metalpic-routechange");
        event.newRoute = "metalpic-upload";
        this.dispatchEvent(event);
    }

    // Render =================================================================
    // TODO get list of albums from the server

    renderFirst() {
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.innerHTML = `
        <style>

        </style>
        `;
        this.body = document.createElement("div");
        this.shadow.appendChild(this.body);
    }

    render() {
        let body = this.body;
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        let uploadLink = document.createElement("a");
        body.appendChild(uploadLink);
        uploadLink.addEventListener("click", (e) => {
            e.stopPropagation();
            this.handleButtonClick();
        });
        uploadLink.innerText = "Upload";
    }

})

console.info("metalpic-hub loaded");