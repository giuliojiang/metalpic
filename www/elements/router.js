window.customElements.define("metalpic-router", class extends HTMLElement {

    // Input events:
    // - metalpic-routechange

    constructor() {
        super();

        this.currentRoute = "";
        this.currentPath = "";

        // Detect initial route
        let path = location.pathname;
        if (path == "/") {
            this.changeRouteTo("metalpic-login");
        } else {
            this.changeRouteTo(path.substr(1));
        }

        this.addEventListener("metalpic-routechange", (event) => {
            console.info("Received routechange event");
            event.stopPropagation();
            this.changeRouteTo(event.newRoute);
        }, true);
    }

    changeRouteTo(newRoute) {
        let splt = newRoute.split("/");
        this.currentRoute = splt[0];
        let remaining = [];
        for (let i = 1; i < splt.length; i++) {
            remaining.push(splt[i]);
        }
        let pathJoined = remaining.join("/");
        this.currentPath = pathJoined;
        console.info("New route is " + this.currentRoute);
        console.info("New path is " + this.currentPath);
        this.draw();
        // TODO change browser address
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        this.innerHTML = `
        <metalpic-navbar routePath="${this.currentPath}"></metalpic-navbar>
        <${this.currentRoute}></${this.currentRoute}>
        `;
    }

});

console.info("metalpic-router loaded");