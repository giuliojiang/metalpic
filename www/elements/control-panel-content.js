console.info("Loading");

window.customElements.define("metalpic-control-panel-content", class extends HTMLElement {

    constructor() {
        super();
        this.albumsData = null; // {albums: [{name, public, created}]}
    }

    connectedCallback() {
        this.loadAlbums();
    }

    async loadAlbums() {
        this.renderLoading();
        
        let headers = metalpic.createHeaders();

        let httpResult = await fetch(`/list`, {
            method: "GET",
            headers: headers
        });
        this.albumsData = await httpResult.json();
        this.render();
    }

    renderBase() {
        this.innerHTML = `
            <style>

            </style>
            <div data-body></div>
        `;
    }

    render() {
        this.renderBase();
        let body = this.querySelector("[data-body]");

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
        this.renderBase();
        let body = this.querySelector("[data-body]");

        body.innerHTML = `
            <div>
                Loading
            </div>
        `;
    }

})