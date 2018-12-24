console.info("Loading");

window.customElements.define("metalpic-control-panel-content", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<p>Hello from control-panel-content</p>`;
    }

})