window.customElements.define("metalpic-login", class extends HTMLElement {

    // Output events:
    // metalpic-login-success
    // metalpic-login-logout

    constructor() {
        super();
    }

    connectedCallback() {
        console.info("login connected");
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
        </style>
        `;
        this.body = document.createElement("div");
        this.appendChild(this.body);
    }

    render() {
        this.body.innerHTML = `
            <div id="metalpic-login-signin" class="metalpic-login-signin"></div>
        `;
        setTimeout(() => {
            gapi.signin2.render("metalpic-login-signin", {
                'onsuccess': (googleUser) => {
                    var id_token = googleUser.getAuthResponse().id_token;
                    console.info("Login success");
                    localStorage.token = id_token;
                    this.dispatchEvent(new CustomEvent("metalpic-login-success"));
                    console.info("Firing metalpic-login-success")
                }
            })
            console.info("Rendered gsignin button");
        });
    }
})

console.info("metalpic-login loaded");