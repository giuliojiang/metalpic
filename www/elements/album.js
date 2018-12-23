window.customElements.define("metalpic-album", class extends HTMLElement {

    // Inputs:
    // - routepath: string route path section, without the route name

    constructor() {
        super();
        this.albumName = null;
        this.pictures = null; // {pictures: [{id, name}]}
    }

    connectedCallback() {
        this.renderFirst();
        this.render();
    }

    static get observedAttributes() {
        return ["routepath"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == "routepath") {
            this.routepath = newValue;
        }
    }

    set routepath(routepath) {
        this.albumName = routepath;
        this.requestAlbumData();
    }

    async requestAlbumData() {
        console.info("Requesting album data " + this.albumName);
        let response = await fetch(`/api/album`, {
            method: "POST",
            body: JSON.stringify({
                token: localStorage.token,
                album: this.albumName
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        let responseObj = await response.json();
        this.pictures = responseObj;
        this.render();
    }

    renderFirst() {
        this.innerHTML = `
            <style>

            </style>
            <div data-body>
            </div>
        `;
    }

    render() {
        let body = this.querySelector("[data-body]");
        if (this.pictures == null) {
            body.innerHTML = `
                <p>Loading...</p>
            `;
        } else {
            body.innerHTML = `
                <h2 data-albumname></h2>

            `;

            // Add album name
            this.querySelector("[data-albumname]").innerText = this.albumName;

            // Add pictures

            for (let pic of this.pictures.pictures) {
                let div = document.createElement("metalpic-picture-preview");
                body.appendChild(div);
                div.setAttribute("picid", pic.id);
            }
            
        }
    }

});

console.info("metalpic-album loaded");