import {html, render} from 'https://unpkg.com/lit-html?module';

window.customElements.define("metalpic-root", class extends HTMLElement {

    constructor() {
        super();
        this.template = () => html`
<metalpic-navbar></metalpic-navbar>
<metalpic-router></metalpic-router>
        `; 
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        render(this.template(), this);
    }

})

console.info("metalpic-root loaded");