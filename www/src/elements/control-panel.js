import { metalpicStyleCollector } from "../lib/style-collector";
import { CheckToken } from "../lib/check-token";

console.info("Loading");

window.customElements.define("metalpic-control-panel", class extends HTMLElement {

    constructor() {
        super();
        this.albumsData = null; // {albums: [{name, public, created}]}
    }

    connectedCallback() {
        metalpicStyleCollector.register("control-panel.js", `
            <style>

            </style>
        `);
        this.loadAlbums();
    }

    async loadAlbums() {
        this.renderLoading();
        
        let tokenValid = await CheckToken.isValid();
        if (!tokenValid) {
            this.renderForbidden();
            return;
        }

        let headers = metalpic.createHeaders();

        let httpResult = await fetch(`/list`, {
            method: "GET",
            headers: headers
        });

        if (httpResult.status == 403) {
            this.renderForbidden();
            return;
        }

        this.albumsData = await httpResult.json();
        this.render();
    }

    renderBase() {
        this.innerHTML = '';
        let body = document.createElement("div");
        this.appendChild(body);
        return body;
    }

    render() {
        let body = this.renderBase();

        for (let album of this.albumsData.albums) {
            // album: {name, public, created}
            let albumElement = document.createElement("metalpic-control-panel-album");
            body.appendChild(albumElement);
            albumElement.setAttribute("album", JSON.stringify(album));
        }

        body.addEventListener("control-panel-album-updated", (event) => {
            console.info("Album update received, reloading albums...");
            event.stopPropagation();
            this.loadAlbums();
        }, true);
    }

    renderLoading() {
        let body = this.renderBase();

        body.innerHTML = `
            <div>
                Loading
            </div>
        `;
    }

    renderForbidden() {
        let body = this.renderBase();

        body.innerHTML = `
            <div>
                Forbidden
            </div>
        `;
    }

});