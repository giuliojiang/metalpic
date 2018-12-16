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
            this.changeRouteTo("metalpic-hub");
        } else {
            this.changeRouteTo(path.substr(1));
        }

        this.addEventListener("metalpic-routechange", (event) => {
            console.info("Received routechange event");
            event.stopPropagation();
            this.changeRouteTo(event.newRoute);
        }, true);

        window.onpopstate = (event) => {
            this.renderNewState(event.state);
        };
    }

    changeRouteTo(newRoute) {
        console.info("changeRouteTo: " + newRoute);
        window.history.pushState(newRoute, newRoute, "/" + newRoute);
        this.renderNewState(newRoute);
    }

    renderNewState(newRoute) {
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
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        this.innerHTML = `
        <metalpic-navbar></metalpic-navbar>
        <${this.currentRoute} routepath="${this.currentPath}"></${this.currentRoute}>
        `;
    }

});

console.info("metalpic-router loaded");