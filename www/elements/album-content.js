console.info("Loading");

window.customElements.define("metalpic-album-content", class extends HTMLElement {


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
        if (response.status == 403) {
            this.renderForbidden();
            return;
        }
        let responseObj = await response.json();
        this.pictures = responseObj;
        this.render();
    }

    renderFirst() {
        this.innerHTML = `
            <style>
                .metalpic-album-content-title {
                    font-size: 22px;
                }

                .metalpic-album-content-container {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                    align-items: center;
                }

                .metalpic-album-content-picture {
                    max-width: 100%;
                }
            </style>
            <div data-body class="metalpic-album-content-container">
            </div>
        `;
    }

    render() {
        let body = this.querySelector("[data-body]");
        if (body == null) {
            return;
        }
        if (this.pictures == null) {
            body.innerHTML = `
                <p>Loading...</p>
            `;
        } else {
            body.innerHTML = `
                <div data-albumname class="metalpic-album-content-title"></div>

            `;

            // Add album name
            this.querySelector("[data-albumname]").innerText = this.albumName;

            // Add pictures

            for (let pic of this.pictures.pictures) {
                let div = document.createElement("metalpic-picture-preview");
                body.appendChild(div);
                div.setAttribute("picid", pic.id);
                div.classList.add("metalpic-album-content-picture");
            }
            
        }
    }

    renderForbidden() {
        let body = this.querySelector("[data-body]");
        body.innerHTML = `
            <p>Forbidden</p>
        `;
    }

});