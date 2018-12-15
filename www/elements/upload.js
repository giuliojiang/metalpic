"use strict";

window.customElements.define("metalpic-upload", class extends HTMLElement {

    // Init ===================================================================

    constructor() {
        super();
        this.files = null;
    }

    // Events =================================================================

    connectedCallback() {
        this.renderFirst();
        this.render();
    }

    registerFileUploadListeners(inputElem) {
        var onSelectFile = async () => {
            this.files = inputElem.files;
        };
        inputElem.addEventListener("change", onSelectFile, false);
    }

    registerButtonEventListeners(button) {
        var upload = async (file) => {
            console.info("Uploading file " + file.name);
            var albumNameComp = encodeURIComponent(this.getAlbumName());
            console.info("<><><> albumname comp is " + albumNameComp);
            var fileNameComp = encodeURIComponent(file.name);
            var gsigninTokenComp = encodeURIComponent(jpress.gsignin.token);
            var response = await fetch(`/api/upload/${albumNameComp}/${fileNameComp}/${gsigninTokenComp}`, {
                method: 'POST',
                headers: {
                },
                body: file // This is your file object
            });
        };

        button.addEventListener("click", async (e) => {
            e.stopPropagation();
            if (this.files == null) {
                window.alert("Please select files first");
            }
            if (utils.stringNullOrEmpty(this.getAlbumName())) {
                window.alert("Album name cannot be empty");
            }
            for (var i = 0; i < this.files.length; i++) {
                await upload(this.files[i]);
            }
        });
    }

    // Draw ===================================================================

    renderFirst() {
        this.innerHTML = `
        <style>
            .container {
                padding-left: 10px;
                padding-top: 10px;
            }
        </style>
        <div data-body></div>
        `;
    }

    render() {
        let body = this.querySelector("[data-body]");

        // Clear the body
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        let bodyInner = document.createElement("metalpic-requires-login");

        this.drawTitle(bodyInner);
        this.drawAlbumInput(bodyInner);
        this.drawUploader(bodyInner);
        this.drawUploadButton(bodyInner);

        body.appendChild(bodyInner);
    }

    drawTitle(body) {
        this.drawInDiv(body, (div) => {
            let pElem = document.createElement("p");
            pElem.innerText = "Metalpic uploader";
            div.appendChild(pElem);
        });
    }

    drawAlbumInput(body) {
        this.drawInDiv(body, (div) => {
            let inputElem = document.createElement("input");
            inputElem.setAttribute("type", "text");
            inputElem.setAttribute("data-albumname", "");
            inputElem.setAttribute("placeholder", "Album name");
            div.appendChild(inputElem);
        })
    }

    drawUploader(body) {
        this.drawInDiv(body, (div) => {
            let inputElem = document.createElement("input");
            inputElem.setAttribute("type", "file");
            inputElem.setAttribute("data-fileupload", "");
            inputElem.setAttribute("multiple", "");
            div.appendChild(inputElem);
            this.registerFileUploadListeners(inputElem);
        });
    }

    drawUploadButton(body) {
        this.drawInDiv(body, (div) => {
            let button = document.createElement("button");
            div.appendChild(button);
            button.innerText = "Upload";
            this.registerButtonEventListeners(button);
        });
    }

    // Private ================================================================

    drawInDiv(body, func) {
        let div = document.createElement("div");
        div.classList.add("container");
        body.appendChild(div);
        func(div);
    }

    getAlbumName() {
        let inputElem = this.querySelector("[data-albumname]");
        return inputElem.value;
    }

})

console.info("metalpic-upload loaded");