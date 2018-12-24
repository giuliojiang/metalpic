console.info("Loading");

window.customElements.define("metalpic-control-panel-content", class extends HTMLElement {

    constructor() {
        super();
        this.albumsData = null; // {albums: [{name, public, created}]}
    }

    connectedCallback() {
        this.renderFirst();
        this.loadAlbums();
    }

    async loadAlbums() {
        let httpResult = await fetch(`/list/${encodeURIComponent(localStorage.token)}`, {
            method: "GET"
        });
        this.albumsData = await httpResult.json();
        this.render();
    }

    renderFirst() {
        this.innerHTML = `
            <style>

            </style>
            <div data-body></div>
        `;
    }

    render() {
        let body = this.querySelector("[data-body]");

        for (let album of this.albumsData.albums) {
            // album: {name, public, created}
            let albumElement = document.createElement("metalpic-control-panel-album");
            body.appendChild(albumElement);
            albumElement.setAttribute("album", JSON.stringify(album));
        }
    }

})