console.info("Loading");

window.customElements.define("metalpic-upload", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <metalpic-requires-login mustbeadmin="true">
                <metalpic-upload-content></metalpic-upload-content>
            </metalpic-requires-login>
        `;
    }


})

console.info("metalpic-upload loaded");