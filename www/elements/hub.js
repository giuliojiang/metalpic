import {html, render} from 'https://unpkg.com/lit-html?module';

window.customElements.define("metalpic-hub", class extends HTMLElement {

    constructor() {
        super();
        this.template = () => html`
<a onclick="this.dispatchEvent(new Event('metalpic-hub-uploadclick'))">Upload</a>
        `; 

        this.addEventListener("metalpic-hub-uploadclick", (event) => {
            event.stopPropagation();
            var event = new Event("metalpic-routechange");
            event.newRoute = "metalpic-upload";
            this.dispatchEvent(event);
            console.info("Dispatched routechange to upload");
        }, true);
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        render(this.template(), this);
    }

})

console.info("metalpic-hub loaded");