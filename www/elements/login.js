window.customElements.define("metalpic-login", class extends HTMLElement {

    constructor() {

        super();

        jpress.gsignin.callWhenLoginSuccessful(() => {
            console.warn("gsign in successful, but not doing anything for now");
            return;
            var event = new Event("metalpic-routechange");
            event.newRoute = "metalpic-hub";
            this.dispatchEvent(event);
            console.info("Dispatched routechange to hub");
        });
    }

    connectedCallback() {
        this.renderFirst();
        this.render();
    }

    // Render =================================================================

    renderFirst() {
        this.innerHTML = `
        <style>
            .metalpic-login-signin {
                padding: 30px;
            }

            .popup {
                position: fixed;
                z-index: 1;
                left: 25vw;
                right: 25vw;
                top: 25vh;
                bottom: 25vh;
            }

            .hidden {
                visibility: hidden;
            }
        </style>
        `;
        this.body = document.createElement("div");
        this.appendChild(this.body);
    }

    render() {
        this.body.innerHTML = `
            <div id="metalpic-login-signin" class="metalpic-login-signin"></div>
        `;
        this.body.className = "popup";
        setTimeout(() => {
            gapi.signin2.render("metalpic-login-signin", {
                'onsuccess': jpress_on_google_sign_in
            })
            console.info("Rendered gsignin button");
    
        });
    }
})

console.info("metalpic-login loaded");