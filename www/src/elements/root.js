import { metalpicStyleCollector } from "../lib/style-collector";

window.customElements.define("metalpic-root", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        metalpicStyleCollector.register("root.js", `
            <style>
                @import url('https://fonts.googleapis.com/css?family=Khula');

                * {
                    font-family: 'Khula', sans-serif;
                }

                a {
                    text-decoration: none;
                    color: black;
                }
            </style>
        `);
        this.draw();
    }

    draw() {
        this.innerHTML = `
            <metalpic-navbar></metalpic-navbar>
            <metalpic-login></metalpic-login>
            <metalpic-router></metalpic-router>
        `;
    }

})

console.info("metalpic-root loaded");