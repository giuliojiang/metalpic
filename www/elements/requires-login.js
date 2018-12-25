// Wraps around content that requires login first.
// First verifies if there is a login token.
// If there is login token, displays the inner content.
// If there is no login token, displays the login button.
window.customElements.define("metalpic-requires-login", class extends HTMLElement {

    // Inputs:
    // - mustbeadmin: "true" or "false" or "anon"
    //                "true" content displayed if user logged in and is admin
    //                "false" content displayed if user logged in
    //                "anon" content always displayed, but refreshed after login
    // Inner content: content to be displayed if login succeeds
    //
    // NOTICE
    // The google authentication button does not work with
    // shadow root

    constructor() {
        super();
        this.html = null; // string, contains HTML of inner elements set by parent
        this.mustBeAdmin = "true";
        this.loginStatus = "anon"; // "anon", "logged", "admin"
        this.intervalHandle = null;
    }

    connectedCallback() {
        // Save the content of this div
        this.html = this.innerHTML;
        this.innerHTML = "";
        this.renderFirst();
        this.render();

        // Start checktoken loop
        this.intervalHandle = setInterval(() => {
            this.checkToken();
        }, 2 * 60 * 1000); // 2 minutes
    }

    disconnectedCallback() {
        console.info("Disconnecting");
        clearInterval(this.intervalHandle);
    }

    static get observedAttributes() {
        return ["mustbeadmin"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == "mustbeadmin") {
            this.mustBeAdmin = newValue;
        }
    }

    async checkToken() {
        try {
            //  /api/checktoken/:token
            let response = await fetch(`/api/checktoken/${encodeURIComponent(localStorage.token)}`, {
                method: "GET"
            });
            let obj = await response.json();
            console.info(JSON.stringify(obj));
            let status = obj.status;
            if (status == "valid") {
                this.loginStatus = "admin";
            } else if (status == "guest") {
                this.loginStatus = "logged";
            } else {
                this.loginStatus = "anon";
            }

            this.render();

        } catch (err) {
            this.loginStatus = "anon";
            this.render();
            console.warn(err);
            return;
        }
    }

    renderFirst() {
        this.innerHTML = `
            <style>
                .metalpic-requires-login-div {
                    padding: 10px;
                }
            </style>
            <div data-requires-login-header></div>
            <div data-requires-login-body></div>
        `;
        let body = this.querySelector("[data-requires-login-header]");

        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }
        
        body.innerHTML += `
            <metalpic-login></metalpic-login>
        `;

        body.addEventListener("metalpic-login-success", (event) => {
            event.stopPropagation();
            this.checkToken();
        }, true);

        body.addEventListener("metalpic-login-logout", (event) => {
            event.stopPropagation();
            this.loginStatus = "anon";
            this.render();
            this.checkToken();
        }, true);
    }

    render() {
        let body = this.querySelector("[data-requires-login-body]");
        if (body == null) {
            return;
        }
        body.innerHTML = '';

        let displayContent = () => {
            let div = document.createElement("div");
            body.appendChild(div);
            div.innerHTML = this.html;
        }

        let displayForbidden = () => {
            let div = document.createElement("div");
            body.appendChild(div);
            div.innerText = "Forbidden";
            div.classList.add("metalpic-requires-login-div");
        }

        let displayPleaseLogIn = () => {
            let div = document.createElement("div");
            body.appendChild(div);
            div.innerText = "Please log in";
            div.classList.add("metalpic-requires-login-div");
        }

        if (this.mustBeAdmin == "true") {
            if (this.loginStatus == "admin") {
                displayContent();
            } else if (this.loginStatus == "logged") {
                displayForbidden();
            } else {
                displayPleaseLogIn();
            }
        } else if (this.mustBeAdmin == "false") {
            if (this.loginStatus == "anon") {
                displayPleaseLogIn();
            } else {
                displayContent();
            }
        } else if (this.mustBeAdmin == "anon") {
            displayContent();
        }

    }

});

console.info("metalpic-requires-login loaded");