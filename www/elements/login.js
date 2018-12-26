console.info("Loading");

window.customElements.define("metalpic-login", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        console.info("login connected");
        this.render();
    }

    // Events =================================================================

    addPasswordEvents(passwordInputElement) {
        passwordInputElement.addEventListener("keyup", async (event) => {
            event.stopPropagation();
            if (event.keyCode === 13) {
                // ENTER
                let username = this.usernameInput.value;
                let password = this.passwordInput.value;

                let headers = metalpic.addApplicationJsonHeaders();

                let httpResponse = await fetch(`/api/login`, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({
                        user: username,
                        pass: password
                    })
                });

                if (httpResponse.status != 200) {
                    alert("Login failed");
                    return;
                }

                let responseObj = await httpResponse.json();
                let token = responseObj.token;
                localStorage.token = token;
                location.reload();
            }
        });
    }

    // Render =================================================================

    render() {
        this.innerHTML = `
            <style>
                .metalpic-login-input {
                    padding: 10px;
                    width: 200px;
                    border: 0;
                }

                .metalpic-login-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;
                }
            </style>
        `;

        let body = document.createElement("div");
        body.classList.add("metalpic-login-container");
        this.appendChild(body);

        this.usernameInput = document.createElement("input");
        this.usernameInput.setAttribute("type", "text");
        this.usernameInput.setAttribute("placeholder", "Username");
        this.usernameInput.classList.add("metalpic-login-input");
        body.appendChild(this.usernameInput);

        this.passwordInput = document.createElement("input");
        this.passwordInput.setAttribute("type", "password");
        this.passwordInput.setAttribute("placeholder", "Password");
        this.passwordInput.classList.add("metalpic-login-input");
        this.addPasswordEvents(this.passwordInput);
        body.appendChild(this.passwordInput);

    }
});