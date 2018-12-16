
window.customElements.define("metalpic-hub", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <metalpic-requires-login mustbeadmin="false">
                <metalpic-hub-content>
                </metalpic-hub-content>
            </metalpic-requires-login>
        `;
    }

})

console.info("metalpic-hub loaded");