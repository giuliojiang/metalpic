console.info("Loading");

window.customElements.define("metalpic-album", class extends HTMLElement {

    // Inputs:
    // -routepath: string route path section, without the route name

    constructor() {
        super();
        this.routepath = null;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ["routepath"];
    }

    attributeChangedCallback(name, old, newValue) {
        if (name == "routepath") {
            this.routepath = newValue;
            this.render();
        }
    }

    render() {
        this.innerHTML = `
            <metalpic-requires-login mustbeadmin="false">
                <metalpic-album-content routepath="${utils.quoteattr(this.routepath)}"></metalpic-album-content>
            </metalpic-requires-login>
        `;
    }

});
