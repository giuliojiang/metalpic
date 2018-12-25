console.info("Loading");

window.customElements.define("metalpic-login", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        console.info("login connected");
        this.render();
    }

    // Render =================================================================

    renderFirst() {
        this.innerHTML = `
        <style>
            .metalpic-login-signin {
                padding: 10px;
            }
        </style>
        `;
        this.body = document.createElement("div");
        this.appendChild(this.body);
        this.body.classList.add("metalpic-login-container");
    }

    render() {
        this.renderFirst();

        this.body.innerHTML = `
            <div id="metalpic-login-signin" class="metalpic-login-signin"></div>
        `;

        setTimeout(() => {
            gapi.signin2.render("metalpic-login-signin", {
                'onsuccess': (googleUser) => {
                    var id_token = googleUser.getAuthResponse().id_token;
                    console.info("Login success");
                    localStorage.token = id_token;
                    location.reload();
                }
            })
            console.info("Rendered gsignin button");
        });


    }
});