import { metalpicStyleCollector } from "../lib/style-collector";
import { CheckToken } from "../lib/check-token";

console.info("Loading");

window.customElements.define("metalpic-hub-buttons", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        metalpicStyleCollector.register("hub-buttons.js", `
            <style>
                .metalpic-hub-buttons-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    align-items: center;
                    width: 100%;
                }

                .metalpic-hub-buttons-item {
                    padding: 10px;
                }

                .metalpic-hub-buttons-link {
                    text-decoration: none;
                    color: black;
                    cursor: pointer;
                }
            </style>
        `);
        this.checkToken();
    }

    async checkToken() {
        let tokenValid = await CheckToken.isValid();
        if (tokenValid) {
            this.render();
        } else {
            this.renderEmpty();
        }
    }

    renderFirst() {
        this.innerHTML = ``;

        let body = document.createElement("div");
        this.appendChild(body);
        return body;
    }

    render() {
        let body = this.renderFirst();

        let container = document.createElement("div");
        body.appendChild(container);
        container.classList.add("metalpic-hub-buttons-container");

        let uploadLink = document.createElement("a");
        utils.addRouterLinkToElement(uploadLink, "metalpic-upload", this);
        container.appendChild(uploadLink);
        uploadLink.innerText = "Upload";
        uploadLink.className = "metalpic-hub-buttons-item metalpic-hub-buttons-link";

        let panelLink = document.createElement("a");
        utils.addRouterLinkToElement(panelLink, "metalpic-control-panel", this);
        container.appendChild(panelLink);
        panelLink.innerText = "Control panel";
        panelLink.className = "metalpic-hub-buttons-item metalpic-hub-buttons-link";
    }

    renderEmpty() {
        let body = this.renderFirst();
    }

});