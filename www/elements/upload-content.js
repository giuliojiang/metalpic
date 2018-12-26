console.info("Loading");

window.customElements.define("metalpic-upload-content", class extends HTMLElement {

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
            var fileNameComp = encodeURIComponent(file.name);

            let headers = metalpic.createHeaders();

            var response = await fetch(`/api/upload/${albumNameComp}/${fileNameComp}`, {
                method: 'POST',
                headers: headers,
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
            
            // Create album
            let headers = metalpic.createHeaders();
            var httpResponse = await fetch(`/api/createalbum/${encodeURIComponent(this.getAlbumName())}`, {
                method: "POST",
                headers: headers
            });

            // Upload all files
            for (var i = 0; i < this.files.length; i++) {
                await upload(this.files[i]);
            }

            alert("Upload completed");
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

        this.drawTitle(body);
        this.drawAlbumInput(body);
        this.drawUploader(body);
        this.drawUploadButton(body);
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

});