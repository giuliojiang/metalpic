import {html, render} from 'https://unpkg.com/lit-html?module';

window.customElements.define("metalpic-hub", class extends HTMLElement {

    constructor() {
        super();
        this.template = () => html`
<p>this is the hub</p>
        `; 
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        render(this.template(), this);
    }

})

console.info("metalpic-hub loaded");