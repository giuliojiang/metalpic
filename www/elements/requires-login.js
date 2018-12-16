// Wraps around content that requires login first.
// First verifies if there is a login token.
// If there is login token, displays the inner content.
// If there is no login token, displays the login button.
window.customElements.define("metalpic-requires-login", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        // Save the content of this div
        console.info("requires login connected");
        this.html = this.innerHTML;
        this.innerHTML = "";
        this.checkToken();
    }

    async checkToken() {
        try {
            if (localStorage.token == null) {
                // No token
                this.doLogin();
            } else {
                let token = localStorage.token;
                if (!utils.isString(token)) {
                    localStorage.token = null;
                    this.doLogin();
                    return;
                }

                //  /api/checktoken/:token
                let response = await fetch(`/api/checktoken/${encodeURIComponent(token)}`, {
                    method: "GET"
                });
                console.info("Received response for /api/checktoken");
                let obj = await response.json();
                console.info(JSON.stringify(obj));
                let status = obj.status;
                // TODO when status is guest, show that the user doesn't have permissions
                if (status == "valid") {
                    this.loginSuccess();
                    return;
                } else if (status == "guest") {
                    this.userUnauthorized();
                } else {
                    this.doLogin()
                }
            }
        } catch (err) {
            console.warn(err);
            this.doLogin();
            return;
        }
    }

    loginSuccess() {
        // Display the saved HTML
        console.info("Login is successful, displaying content");
        this.innerHTML = this.html;
    }

    loginSuccessCallback(event) {
        event.stopPropagation();
        console.info("Received event for login success");
        this.loginSuccess();
    }

    userUnauthorized() {
        this.innerHTML = `
            <p>Unauthorized</p>
        `;
    }

    doLogin() {
        // Display login component and listen for the login success event.
        this.removeEventListener("metalpic-login-success", this.loginSuccessCallback, true);
        this.addEventListener("metalpic-login-success", this.loginSuccessCallback, true);
        this.innerHTML = `
            <metalpic-login></metalpic-login>
        `;
    }

    render() {
    }

});

console.info("metalpic-requires-login loaded");