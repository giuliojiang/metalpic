window.customElements.define("metalpic-album", class extends HTMLElement {

    // Inputs:
    // - routepath: string route path section, without the route name

    constructor() {
        super();
        this.albumName = null;
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
        console.info("<><><> server returned " + JSON.stringify(responseObj));
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
        if (this.albumName == null) {
            let body = this.querySelector("[data-body]");
            body.innerHTML = `
                <p>Loading...</p>
            `;
        } else {
            // TODO
        }
    }

});

console.info("metalpic-album loaded");