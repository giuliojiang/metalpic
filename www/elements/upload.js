window.customElements.define("metalpic-upload", class extends HTMLElement {

    // Init ===================================================================

    constructor() {
        super();
    }

    // Events =================================================================

    connectedCallback() {
        this.renderFirst();
        this.render();
    }

    registerEventListeners() {
        var inputElem = this.shadow.querySelector("[data-fileupload]");

        var upload = async (file) => {
            console.info("Uploading file " + file.name);
            var albumNameComp = encodeURIComponent(this.getAlbumName());
            var fileNameComp = encodeURIComponent(file.name);
            var gsigninTokenComp = encodeURIComponent(jpress.gsignin.token);
            var response = await fetch(`/api/upload/${albumNameComp}/${fileNameComp}/${gsigninTokenComp}`, {
                method: 'POST',
                headers: {
                },
                body: file // This is your file object
            });
        };

        var onSelectFile = async () => {
            for (var i = 0; i < inputElem.files.length; i++) {
                await upload(inputElem.files[i]);
            }
        };

        inputElem.addEventListener("change", onSelectFile, false);

    }

    // Draw ===================================================================

    renderFirst() {
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
        <style>

        </style>
        <div data-body></div>
        `;
    }

    render() {
        let body = this.shadow.querySelector("[data-body]");

        // Clear the body
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        this.drawTitle(body);
        this.drawAlbumInput(body);
        this.drawUploader(body);

        this.registerEventListeners();
    }

    drawTitle(body) {
        let pElem = document.createElement("p");
        pElem.innerText = "Metalpic uploader";
        body.appendChild(pElem);
    }

    drawAlbumInput(body) {
        let inputElem = document.createElement("input");
        inputElem.setAttribute("type", "text");
        inputElem.setAttribute("data-albumname", "");
        inputElem.setAttribute("placeholder", "Album name");
        body.appendChild(inputElem);
    }

    drawUploader(body) {
        let inputElem = document.createElement("input");
        inputElem.setAttribute("type", "file");
        inputElem.setAttribute("data-fileupload", "");
        inputElem.setAttribute("multiple", "");
        body.appendChild(inputElem);
    }

    // Private ================================================================

    getAlbumName() {
        let inputElem = this.shadow.querySelector("[data-albumname]");
        return inputElem.text;
    }

})

console.info("metalpic-upload loaded");