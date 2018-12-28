import { metalpicStyleCollector } from "../lib/style-collector";

window.customElements.define("metalpic-navbar", class extends HTMLElement {

    // Output events:
    // - metalpic-routechange

    constructor() {
        super();
        this.renderFirst();
    }

    connectedCallback() {
        metalpicStyleCollector.register("navbar.js", `
        <style>
        .metalpic-navbar {
            width: 100%;
            height: 90px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            align-items: center;
        }

        .metalpic-navbar-text {
            font-size: 40px;
            padding: 20px;
            cursor: pointer;
            text-decoration: none;
            color: black;
        }
        </style>
        `);
        this.render();
    }

    // Render =================================================================

    renderFirst() {
        this.innerHTML = '';
        let body = document.createElement("div");
        this.appendChild(body);
        return body;
    }

    render() {
        let body = this.renderFirst();
        let container = document.createElement("div");
        body.appendChild(container);
        container.classList.add("metalpic-navbar");

        let p = document.createElement("a");
        container.appendChild(p);
        p.classList.add("metalpic-navbar-text");
        p.innerText = "metalpic";
        utils.addRouterLinkToElement(p, "metalpic-hub", this);
    }

});