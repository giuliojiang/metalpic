window.customElements.define("metalpic-router", class extends HTMLElement {

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
        this.innerHTML = `<${this.currentRoute}></${this.currentRoute}>`;
    }

});

console.info("metalpic-router loaded");