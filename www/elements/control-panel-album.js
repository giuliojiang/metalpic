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
        this.renderFirst();
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

    renderFirst() {
        this.innerHTML = `
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
                }

                .metalpic-control-panel-album-name {
                    flex-grow: 1;
                    flex-shrink: 0;
                }

                .metalpic-control-panel-album-button {
                    cursor: pointer;
                }
            </style>
            <div data-body></div>
        `;
    }

    render() {
        let body = this.querySelector("[data-body]");

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