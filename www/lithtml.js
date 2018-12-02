import {html, render} from 'https://unpkg.com/lit-html?module';

window.customElements.define("metalpic-lithtml", class extends HTMLElement {

    constructor() {
        super();
        this.template = (title) => html`
            <h2>${title}</h2>
        `; 
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        render(this.template("Helloworld"), this);
    }

})