window.customElements.define("metalpic-router", class extends HTMLElement {

    // Input events:
    // - metalpic-routechange

    constructor() {
        super();

        this.currentRoute = "metalpic-login";

        this.addEventListener("metalpic-routechange", (event) => {
            console.info("Received routechange event");
            event.stopPropagation();
            this.currentRoute = event.newRoute;
            this.draw();
        }, true);
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        this.innerHTML = `
        <metalpic-navbar></metalpic-navbar>
        <${this.currentRoute}></${this.currentRoute}>
        `;
    }

});

console.info("metalpic-router loaded");