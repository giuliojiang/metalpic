console.info("Loading");

window.customElements.define("metalpic-hub-buttons", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.checkToken();
    }

    async checkToken() {
        let headers = metalpic.createHeaders();
        let httpResponse = await fetch(`/api/checktoken`, {
            method: "GET",
            headers: headers
        });

        if (httpResponse.status == 200) {
            this.render();
        } else {
            this.renderEmpty();
        }
    }

    renderFirst() {
        this.innerHTML = `
            <style>
                .metalpic-hub-buttons-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    align-items: center;
                    width: 100%;
                }

                .metalpic-hub-buttons-item {
                    padding: 10px;
                }

                .metalpic-hub-buttons-link {
                    text-decoration: none;
                    color: black;
                    cursor: pointer;
                }
            </style>
        `;

        let body = document.createElement("div");
        this.appendChild(body);
        return body;
    }

    render() {
        let body = this.renderFirst();

        let container = document.createElement("div");
        body.appendChild(container);
        container.classList.add("metalpic-hub-buttons-container");

        let uploadLink = document.createElement("a");
        utils.addRouterLinkToElement(uploadLink, "metalpic-upload", this);
        container.appendChild(uploadLink);
        uploadLink.innerText = "Upload";
        uploadLink.className = "metalpic-hub-buttons-item metalpic-hub-buttons-link";

        let panelLink = document.createElement("a");
        utils.addRouterLinkToElement(panelLink, "metalpic-control-panel", this);
        container.appendChild(panelLink);
        panelLink.innerText = "Control panel";
        panelLink.className = "metalpic-hub-buttons-item metalpic-hub-buttons-link";
    }

    renderEmpty() {
        let body = this.renderFirst();
    }

});