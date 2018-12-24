console.info("Loading");

window.customElements.define("metalpic-control-panel-album", class extends HTMLElement {

    // Inputs:
    // - album: {name, public, created} object

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

    visibilityButtonClick(event) {
        event.stopPropagation();
        // <><><> TODO
        console.info("Visibility button clicked");
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
        albumVisibilityButton.addEventListener("click", this.visibilityButtonClick);
        albumVisibilityButton.classList.add("metalpic-control-panel-album-item");
    }

});