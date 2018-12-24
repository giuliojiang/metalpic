console.info("Loading");

window.customElements.define("metalpic-control-panel", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <metalpic-requires-login mustbeadmin="true">
                <metalpic-control-panel-content></metalpic-control-panel-content>
            </metalpic-requires-login>
        `;
    }

});