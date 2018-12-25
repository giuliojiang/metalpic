console.info("Loading");

// Wraps around content that requires login first.
window.customElements.define("metalpic-requires-login", class extends HTMLElement {

    // Inputs:
    // - mustbeadmin: "true" or "false" or "anon"
    //                "true" content displayed if user logged in and is admin
    //                "false" content displayed if user logged in
    //                "anon" content always displayed, but refreshed after login
    // - donotdisplay: "false" or "true" controls visibility of login and logout
    //           buttons
    // Inner content: content to be displayed if login succeeds
    //
    // NOTICE
    // The google authentication button does not work with
    // shadow root

    constructor() {
        super();
        this.html = null; // string, contains HTML of inner elements set by parent
        this.mustBeAdmin = "true";
        this.donotdisplay = "false";
        this.loginStatus = "anon"; // "anon", "logged", "admin", "checking"
        this.intervalHandle = null;
    }

    connectedCallback() {
        // Save the content of this div
        this.html = this.innerHTML;
        this.innerHTML = "";
        this.checkToken();

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
        return ["mustbeadmin", "donotdisplay"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == "mustbeadmin") {
            this.mustBeAdmin = newValue;
        } else if (name == "donotdisplay") {
            this.donotdisplay = newValue;
        }
    }

    async checkToken() {
        try {
            //  /api/checktoken/:token
            this.loginStatus = "checking";
            this.render();
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

    render() {
        this.innerHTML = `
            <style>
                .metalpic-requires-login-div {
                    padding: 10px;
                }

                .metalpic-requires-login-invisible {
                    visibility: hidden;
                    height: 0px;
                    overflow: hidden;
                }

                .metalpic-requires-login-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: flex-end;
                    align-items: center;
                    width: 100%;
                }

                .metalpic-requires-login-logout {
                    padding: 10px;
                    cursor: pointer;
                }
            </style>
            <div data-requires-login-header></div>
            <div data-requires-login-body></div>
        `;
        let header = this.querySelector("[data-requires-login-header]");
        if (this.donotdisplay == "true") {
            console.info("donotdisplay");
            header.classList.add("metalpic-requires-login-invisible");
        }

        while (header.firstChild) {
            header.removeChild(header.firstChild);
        }

        let container = document.createElement("div");
        container.classList.add("metalpic-requires-login-container");

        // metalpic-login displayed if current user is anonymous
        if (this.loginStatus == "anon") {
            let metalpicLogin = document.createElement("metalpic-login");
            container.appendChild(metalpicLogin);
        }

        // logout button
        if (this.loginStatus == "logged" || this.loginStatus == "admin") {
            let signOut = document.createElement("div");
            signOut.addEventListener("click", (event) => {
                event.stopPropagation();
                localStorage.token = null;
                this.loginStatus = "anon";
                this.render();
                this.checkToken();
            })
            signOut.innerText = "Log Out";
            signOut.classList.add("metalpic-requires-login-logout");
            container.appendChild(signOut);
        }

        header.appendChild(container);

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
            if (this.donotdisplay == "false") {
                let div = document.createElement("div");
                body.appendChild(div);
                div.innerText = "Forbidden";
                div.classList.add("metalpic-requires-login-div");
            }
        }

        let displayPleaseLogIn = () => {
            if (this.donotdisplay == "false") {
                let div = document.createElement("div");
                body.appendChild(div);
                div.innerText = "Please log in";
                div.classList.add("metalpic-requires-login-div");
            }
        }

        let displayChecking = () => {
            if (this.donotdisplay == "false") {
                let div = document.createElement("div");
                body.appendChild(div);
                div.innerText = "Checking login information";
                div.classList.add("metalpic-requires-login-div");
            }
        }

        if (this.mustBeAdmin == "true") {
            if (this.loginStatus == "admin") {
                displayContent();
            } else if (this.loginStatus == "logged") {
                displayForbidden();
            } else if (this.loginStatus == "checking") {
                displayChecking();
            } else {
                displayPleaseLogIn();
            }
        } else if (this.mustBeAdmin == "false") {
            if (this.loginStatus == "checking") {
                displayChecking();
            } if (this.loginStatus == "anon") {
                displayPleaseLogIn();
            } else {
                displayContent();
            }
        } else if (this.mustBeAdmin == "anon") {
            displayContent();
        }

    }

});