console.info("Loaidng");

window.customElements.define("metalpic-hub", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <metalpic-requires-login mustbeadmin="anon">
                <metalpic-hub-content>
                </metalpic-hub-content>
            </metalpic-requires-login>
        `;
    }

})