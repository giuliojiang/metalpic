window.customElements.define("metalpic-navbar", class extends HTMLElement {

    // Output events:
    // - metalpic-routechange

    constructor() {
        super();
        this.renderFirst();
    }

    connectedCallback() {
        this.render();
    }

    // Events =================================================================

    handleClick() {
        let event = new CustomEvent("metalpic-routechange");
        event.newRoute = "metalpic-hub"
        this.dispatchEvent(event);
        console.info("Dispatching event to navigate to hub");
    }

    // Render =================================================================

    renderFirst() {
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
        <style>
        .metalpic-navbar {
            width: 100%;
            height: 90px;
            background-color: #32324e;
        }

        .metalpic-navbar-text {
            font-family: "Impact";
            font-size: 40px;
            padding: 20px;
            text-align: center;
            color: white;
            cursor: pointer;
        }
        </style>
        `;
        this.body = document.createElement("div");
        this.shadow.appendChild(this.body);
    }

    render() {
        while (this.body.firstChild) {
            this.body.removeChild(this.body.firstChild);
        }
        let container = document.createElement("div");
        this.body.appendChild(container);
        container.classList.add("metalpic-navbar");

        let p = document.createElement("p");
        container.appendChild(p);
        p.classList.add("metalpic-navbar-text");
        p.innerText = "metalpic";
        p.addEventListener("click", (e) => {
            e.stopPropagation();
            this.handleClick();
        });
    }

});

console.info("metalpic-navbar loaded");