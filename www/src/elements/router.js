window.customElements.define("metalpic-router", class extends HTMLElement {

    // Input events:
    // - metalpic-routechange: new route name, without the initial /

    constructor() {
        super();
        this.lastHtml = "";
        this.lastRoute = null;

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

    }

    changeRouteTo(newRoute) {
        if (this.lastRoute == newRoute) {
            console.info("Last route was the same, skipping");
            return;
        }
        this.lastRoute = newRoute;
        console.info("changeRouteTo: " + newRoute);
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
        let newHtml = `
            <${this.currentRoute} routepath="${this.currentPath}"></${this.currentRoute}>
        `;
        if (newHtml != this.lastHtml) {
            this.innerHTML = newHtml;
            this.lastHtml = newHtml;
        } else {
            console.info("Skipping redraw, content is the same");
        }
    }

});

console.info("metalpic-router loaded");