window.customElements.define("metalpic-root", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        this.innerHTML = `
            <metalpic-router></metalpic-router>
        `;
    }

})

console.info("metalpic-root loaded");