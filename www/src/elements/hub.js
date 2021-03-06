import { metalpicStyleCollector } from "../lib/style-collector";

console.info("Loading");

window.customElements.define("metalpic-hub", class extends HTMLElement {

    constructor() {
        super();
        this.data = null; // {albums: [{name, public, created}]}
    }

    connectedCallback() {
        document.title = "metalpic - Home";
        metalpicStyleCollector.register("hub.js", `
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
        `);
        this.data = null;
        this.render();
        this.requestAlbums();
    }

    // Render =================================================================

    renderFirst() {
        this.innerHTML = ``;
        let body = document.createElement("div");
        this.appendChild(body);
        body.classList.add("metalpic-hub-content-body");
        return body;
    }

    render() {
        let body = this.renderFirst();

        // Add hub-buttons
        let hubButtons = document.createElement("metalpic-hub-buttons");
        body.appendChild(hubButtons);

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

    renderForbidden() {
        let body = this.renderFirst();

        body.innerHTML = `
            <div>
                Forbidden
            </div>
        `;
    }

    // Private ================================================================

    async requestAlbums() {
        try {
            let headers = metalpic.createHeaders();

            let response = await fetch(`/list`, {
                method: "GET",
                headers: headers
            });

            if (response.status == 403) {
                this.renderForbidden();
                return;
            }

            let obj = await response.json();
            // {"albums":[{"name":"faser234","public":false,"created":1544376564304},{"name":"faser","public":false,"created":1544363853532}]}
            this.data = obj;
            this.render();
        } catch (err) {
            console.warn("Error", err);
        }
    }

})