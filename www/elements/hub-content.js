console.info("Loading");

window.customElements.define("metalpic-hub-content", class extends HTMLElement {

    constructor() {
        super();
        this.renderFirst();
        this.data = null; // {albums: [{name, public, created}]}
    }

    connectedCallback() {
        this.data = null;
        this.render();
        this.requestAlbums();
    }

    // Render =================================================================

    renderFirst() {
        this.innerHTML = `
        <style>
            .metalpic-hub-content-body {
                padding: 10px;
            }

            .metalpic-hub-content-container {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
            }

            .metalpic-hub-content-item-fixed {
                padding-left: 10px;
                flex-grow: 0;
                flex-shrink: 0;
            }

            .metalpic-hub-content-link {
                text-decoration: none;
                color: black;
            }

            .metalpic-hub-content-item-grow {
                flex-grow: 1;
                flex-shrink: 0;
            }
        </style>
        `;
        this.body = document.createElement("div");
        this.appendChild(this.body);
        this.body.classList.add("metalpic-hub-content-body");
    }

    render() {
        let body = this.body;
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        // Add hub-buttons
        let hubButtonsContainer = document.createElement("metalpic-requires-login");
        hubButtonsContainer.setAttribute("mustbeadmin", "true");
        let hubButtons = document.createElement("metalpic-hub-buttons");
        hubButtonsContainer.appendChild(hubButtons);
        hubButtonsContainer.setAttribute("donotdisplay", "true");
        body.appendChild(hubButtonsContainer);

        if (this.data != null) {
            let albumsDiv = document.createElement("div");
            body.appendChild(albumsDiv);

            for (let album of this.data.albums) {
                let div = document.createElement("div");
                albumsDiv.appendChild(div);
                div.classList.add("metalpic-hub-content-container");

                let name = document.createElement("a");
                div.appendChild(name);
                name.innerText = album.name;
                name.classList.add("metalpic-hub-content-item-grow");
                name.classList.add("metalpic-hub-content-link");
                utils.addRouterLinkToElement(name, `metalpic-album/${encodeURIComponent(album.name)}`, this);

                let p = document.createElement("div");
                div.appendChild(p);
                p.innerText = album.public ? "public" : "private";
                p.classList.add("metalpic-hub-content-item-fixed");

                let created = document.createElement("div");
                div.appendChild(created);
                created.innerText = utils.dateToString(new Date(album.created));
                created.classList.add("metalpic-hub-content-item-fixed");
            }
        }
    }

    // Private ================================================================

    async requestAlbums() {
        try {
            let tokenComp = encodeURIComponent(localStorage.token);
            let response = await fetch(`/list/${tokenComp}`, {
                method: "GET"
            });
            let obj = await response.json();
            // {"albums":[{"name":"faser234","public":false,"created":1544376564304},{"name":"faser","public":false,"created":1544363853532}]}
            this.data = obj;
            this.render();
        } catch (err) {
            console.warn("Error", err);
        }
    }

});