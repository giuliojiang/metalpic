
window.customElements.define("metalpic-hub", class extends HTMLElement {

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

    // Events =================================================================

    handleButtonClick() {
        let event = new Event("metalpic-routechange");
        event.newRoute = "metalpic-upload";
        this.dispatchEvent(event);
    }

    // Render =================================================================
    // TODO get list of albums from the server

    renderFirst() {
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.innerHTML = `
        <style>
        .container {
            padding: 10px;
        }
        </style>
        `;
        this.body = document.createElement("div");
        this.shadow.appendChild(this.body);
        this.body.classList.add("container");
    }

    render() {
        let body = this.body;
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        let uploadLink = document.createElement("a");
        body.appendChild(uploadLink);
        uploadLink.addEventListener("click", (e) => {
            e.stopPropagation();
            this.handleButtonClick();
        });
        uploadLink.innerText = "Upload";

        if (this.data != null) {
            let albumsDiv = document.createElement("div");
            body.appendChild(albumsDiv);

            for (let album of this.data.albums) {
                let div = document.createElement("div");
                albumsDiv.appendChild(div);
                let name = document.createElement("p");
                div.appendChild(name);
                name.innerText = album.name;
                let p = document.createElement("p");
                div.appendChild(p);
                p.innerText = album.public ? "public" : "private";
                let created = document.createElement("p");
                div.appendChild(created);
                created.innerText = new Date(album.created).toString();
            }
        }
    }

    // Private ================================================================

    async requestAlbums() {
        let tokenComp = encodeURIComponent(jpress.gsignin.token);
        let response = await fetch(`/list/${tokenComp}`, {
            method: "GET"
        });
        console.info("Received response. Type is " + typeof response);
        let obj = await response.json();
        console.info(JSON.stringify(obj));
        // {"albums":[{"name":"faser234","public":false,"created":1544376564304},{"name":"faser","public":false,"created":1544363853532}]}
        this.data = obj;
        this.render();
    }

})

console.info("metalpic-hub loaded");