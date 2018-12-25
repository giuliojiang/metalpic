window.customElements.define("metalpic-login", class extends HTMLElement {

    // Output events:
    // metalpic-login-success
    // metalpic-login-logout

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
                padding: 30px;
            }

            .metalpic-login-container {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }

            .metalpic-login-logout {
                padding: 10px;
                cursor: pointer;
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
                    this.dispatchEvent(new CustomEvent("metalpic-login-success"));
                    console.info("Firing metalpic-login-success")
                }
            })
            console.info("Rendered gsignin button");
        });

        let signOut = document.createElement("div");
        this.body.appendChild(signOut);
        signOut.addEventListener("click", (event) => {
            event.stopPropagation();
            localStorage.token = null;
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.info("Google signed out");
            });
            this.dispatchEvent(new CustomEvent("metalpic-login-logout"));
        })
        signOut.innerText = "Log Out";
        signOut.classList.add("metalpic-login-logout");

    }
})

console.info("metalpic-login loaded");