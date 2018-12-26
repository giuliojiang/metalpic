console.info("Loading");

window.customElements.define("metalpic-album-content", class extends HTMLElement {


    // Inputs:
    // - routepath: string route path section, without the route name

    constructor() {
        super();
        this.albumName = null;
        this.page = 0;
        this.pictures = null; // {pictures: [{id, name}]}
        this.picturesSerialized = null;
        this.loaded = true; // set to false when component is unloaded
    }

    connectedCallback() {
        this.renderFirst();
        // this.render();
    }

    disconnectedCallback() {
        this.loaded = false;
        console.info("Disconnect");
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
        let routepathSplit = routepath.split("/");
        
        this.albumName = routepathSplit[0];

        if (routepathSplit[1] != null) {
            this.page = parseInt(routepathSplit[1]);
        } else {
            this.page = 0;
        }

        this.requestAlbumData();
    }

    async requestAlbumData() {
        console.info("Requesting album data " + this.albumName);
        let headers = metalpic.createHeaders();
        headers["Content-Type"] = "application/json; charset=utf-8";
        let response = await fetch(`/api/album`, {
            method: "POST",
            body: JSON.stringify({
                album: this.albumName,
                page: this.page
            }),
            headers: headers
        });
        if (response.status == 403) {
            this.renderForbidden();
            return;
        }
        let responseObj = await response.json();
        this.pictures = responseObj;
        this.render();
    }

    downloadPictures(picturesDiv) {

        let jobsQueue = [];
        for (let pic of this.pictures.pictures) {
            jobsQueue.push(pic);
        }

        let downloader = async () => {
            while (jobsQueue.length > 0) {
                if (!this.loaded) {
                    console.info("Unloaded, stopping download");
                    return;
                }

                let pic = jobsQueue.shift();
                let div = document.createElement("metalpic-picture-preview");
                div.setAttribute("picid", pic.id);
                div.classList.add("metalpic-album-content-picture");
                picturesDiv.appendChild(div);
            }
        }

        let DOWNLOAD_CONCURRENCY = 2;

        for (let i = 0; i < DOWNLOAD_CONCURRENCY; i++) {
            downloader();
        }
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
            let currentSerialized = JSON.stringify(this.pictures);
            if (currentSerialized == this.picturesSerialized) {
                // Skip
                console.info("<><><> skip rendering");
                return;
            }
            this.picturesSerialized = currentSerialized;
            console.info("<><><> rendering with " + this.picturesSerialized);

            body.innerHTML = `
                <div data-albumname class="metalpic-album-content-title"></div>

            `;

            // Add album name
            this.querySelector("[data-albumname]").innerText = this.albumName;

            // Add pictures

            let picturesDiv = document.createElement("div");
            picturesDiv.classList.add("metalpic-album-content-container");
            body.appendChild(picturesDiv);

            this.downloadPictures(picturesDiv);

            // No more pictures button
            if (this.pictures == null || this.pictures.pictures.length == 0) {
                let div = document.createElement("div");
                div.innerText = "No pictures";
                body.appendChild(div);
            }

            // Previous button
            if (this.page > 0) {
                let prevButton = document.createElement("a");
                prevButton.innerText = "Previous page";
                utils.addRouterLinkToElement(prevButton, `metalpic-album/${encodeURIComponent(this.albumName)}/${encodeURIComponent("" + (this.page - 1))}`, this);
                body.appendChild(prevButton);
            }

            // Next button
            if (!(this.pictures == null || this.pictures.pictures.length == 0)) {
                let nextButton = document.createElement("a");
                nextButton.innerText = "Next page";
                utils.addRouterLinkToElement(nextButton, `metalpic-album/${encodeURIComponent(this.albumName)}/${encodeURIComponent("" + (this.page + 1))}`, this);
                body.appendChild(nextButton);
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