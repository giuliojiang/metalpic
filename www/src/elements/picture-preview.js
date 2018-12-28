import { metalpicStyleCollector } from "../lib/style-collector";

console.info("Loading");

window.customElements.define("metalpic-picture-preview", class extends HTMLElement {

    constructor() {
        super();
        this._picid = null;
        this._imgblob = null;
    }

    connectedCallback() {
        metalpicStyleCollector.register("picture-preview.js", `
            <style>
                .metalpic-picture-preview-body {
                    max-width: 100%;
                    padding: 10px;
                }

                .metalpic-picture-preview-pic {
                    max-width: 100%;
                    max-height: 90vh;
                }
            </style>
        `);
        this.renderFirst();
    }

    static get observedAttributes() {
        return [
            "picid"
        ]
    }

    attributeChangedCallback(name, old, newValue) {
        if (name == "picid") {
            this.picid = newValue;
        }
    }

    set picid(picid) {
        console.info("Got picid " + picid);
        this._picid = picid;
        this.loadPic();
    }

    async loadPic() {
        this.renderLoading();

        let headers = metalpic.createHeaders();
        let httpResponse = await fetch(`/api/image/${encodeURIComponent(this._picid)}/image.png`, {
            method: "GET",
            headers: headers
        });
        let responseBlob = await httpResponse.blob();
        this._imgblob = responseBlob;
        this.render();
    }

    renderFirst() {
        this.innerHTML = '';
        let body = document.createElement("div");
        body.classList.add("metalpic-picture-preview-body");
        this.appendChild(body);
        return body;
    }

    render() {
        this.renderWithBody(body => {
            let img = document.createElement("img");
            img.src = URL.createObjectURL(this._imgblob);
            body.appendChild(img);
            img.classList.add("metalpic-picture-preview-pic");
        })
    }

    renderLoading() {
        this.renderWithBody(body => {
            body.innerHTML = `
                <div>Loading</div>
            `;
        })
    }

    // func(body)
    renderWithBody(func) {
        let body = this.renderFirst();
        func(body);
    }

})