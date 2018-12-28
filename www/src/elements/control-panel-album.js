import { metalpicStyleCollector } from "../lib/style-collector";

console.info("Loading");

window.customElements.define("metalpic-control-panel-album", class extends HTMLElement {

    // Inputs:
    // - album: {name, public, created} object
    // Output:
    // - event control-panel-album-updated

    constructor() {
        super();
        this.album = null;
    }

    connectedCallback() {
        metalpicStyleCollector.register("control-panel-album.js", `
            <style>
                .metalpic-control-panel-album-hcontainer {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    align-items: center;
                }

                .metalpic-control-panel-album-item {
                    flex: 0 0 auto;
                    padding: 10px;
                }

                .metalpic-control-panel-album-name {
                    flex-grow: 1;
                    flex-shrink: 0;
                    padding: 10px;
                }

                .metalpic-control-panel-album-button {
                    cursor: pointer;
                }
            </style>
        `);
    }

    static get observedAttributes() {
        return ["album"];
    }

    attributeChangedCallback(name, old, newValue) {
        if (name == "album") {
            this.album = JSON.parse(newValue);
            this.render();
        }
    }

    render() {
        this.innerHTML = '';

        let body = document.createElement("div");
        this.appendChild(body);

        let container = document.createElement("div");
        body.appendChild(container);
        container.classList.add("metalpic-control-panel-album-hcontainer");

        let albumNameElem = document.createElement("div");
        container.appendChild(albumNameElem);
        albumNameElem.innerText = this.album.name;
        albumNameElem.classList.add("metalpic-control-panel-album-name");

        let albumVisibilityElem = document.createElement("div");
        container.appendChild(albumVisibilityElem);
        albumVisibilityElem.innerText = this.album.public
                                        ? "Public"
                                        : "Private";
        albumVisibilityElem.classList.add("metalpic-control-panel-album-item");

        let albumVisibilityButton = document.createElement("div");
        container.appendChild(albumVisibilityButton);
        albumVisibilityButton.innerText = this.album.public
                                        ? "Make private"
                                        : "Make public";
        albumVisibilityButton.addEventListener("click", async (event) => {
            event.stopPropagation();
            
            let albumName = encodeURIComponent(this.album.name);
            let newVisibility;
            if (this.album.public) {
                newVisibility = "private";
            } else {
                newVisibility = "public";
            }
            newVisibility = encodeURIComponent(newVisibility);

            let headers = metalpic.createHeaders();
            
            let httpResponse = await fetch(`/api/editalbum/changevisibility/${albumName}/${newVisibility}`, {
                method: "POST",
                headers: headers
            });

            if (httpResponse.status != 200) {
                alert("Error");
            } else {
                this.dispatchEvent(new CustomEvent("control-panel-album-updated"));
            }
        });
        albumVisibilityButton.classList.add("metalpic-control-panel-album-item");
        albumVisibilityButton.classList.add("metalpic-control-panel-album-button");
    }

});