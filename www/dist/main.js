/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

if (window.metalpic == null) {
    window.metalpic = {};
}

metalpic.TOKEN_HEADER = "Metalpic-Auth-Token";

metalpic.createHeaders = function() {
    var headers = {};
    headers[metalpic.TOKEN_HEADER] = localStorage.token;
    return headers;
}

metalpic.addApplicationJsonHeaders = function(headers) {
    if (headers == null) {
        headers = {};
    }
    headers["Content-Type"] = "application/json; charset=utf-8";
    return headers;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.utils = {};

utils.isString = function(s) {
    return typeof s === 'string' || s instanceof String
}

utils.stringNullOrEmpty = function(s) {
    if (s == null) {
        return true;
    }
    if (!utils.isString(s)) {
        return true;
    }
    if (s == "") {
        return true;
    }
    return false;
}

utils.isBot = function() {
    return true;
    return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
}

// elem: HTMLElement, the element that should be made clickable
// destination: string, destination router string
// parent: the parent element of the component, which is used to dispatch the event
utils.addRouterLinkToElement = function(elem, destination, parent) {
    if (utils.isBot()) {
        elem.href = "/" + destination;
    } else {
        elem.addEventListener("click", (event) => {
            event.stopPropagation();
            let e = new Event("metalpic-routechange");
            e.newRoute = destination;
            parent.dispatchEvent(e);
        });
    }
}

// Date to string
// in yyyy. MM. dd format
utils.dateToString = function(d) {
    return d.toLocaleDateString('ko-KR');
}

// From https://stackoverflow.com/a/9756789
utils.quoteattr = function(s, preserveCR) {
    preserveCR = preserveCR ? '&#13;' : '\n';
    return ('' + s) /* Forces the conversion to string. */
        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        /*
        You may add other replacements here for HTML only 
        (but it's not necessary).
        Or for XML, only if the named entities are defined in its DTD.
        */ 
        .replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
        .replace(/[\r\n]/g, preserveCR);
        ;
}

utils.sleep = function(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

window.customElements.define("metalpic-router", class extends HTMLElement {

    // Input events:
    // - metalpic-routechange: new route name, without the initial /

    constructor() {
        super();
        this.lastHtml = "";
        this.lastRoute = null;

        this.currentRoute = "";
        this.currentPath = "";
    }

    changeRouteTo(newRoute) {
        if (this.lastRoute == newRoute) {
            console.info("Last route was the same, skipping");
            return;
        }
        this.lastRoute = newRoute;
        console.info("changeRouteTo: " + newRoute);
        this.renderNewState(newRoute);
    }

    renderNewState(newRoute) {
        let splt = newRoute.split("/");
        this.currentRoute = splt[0];
        let remaining = [];
        for (let i = 1; i < splt.length; i++) {
            remaining.push(splt[i]);
        }
        let pathJoined = remaining.join("/");
        this.currentPath = pathJoined;
        console.info("New route is " + this.currentRoute);
        console.info("New path is " + this.currentPath);
        this.draw();
    }

    connectedCallback() {
        // Detect initial route
        let path = location.pathname;
        if (path == "/") {
            this.changeRouteTo("metalpic-hub");
        } else {
            this.changeRouteTo(path.substr(1));
        }

        this.addEventListener("metalpic-routechange", (event) => {
            console.info("Received routechange event");
            event.stopPropagation();
            this.changeRouteTo(event.newRoute);
        }, true);
    }

    draw() {
        let newHtml = `
            <${this.currentRoute} routepath="${this.currentPath}"></${this.currentRoute}>
        `;
        if (newHtml != this.lastHtml) {
            this.innerHTML = newHtml;
            this.lastHtml = newHtml;
        } else {
            console.info("Skipping redraw, content is the same");
        }
    }

});

console.info("metalpic-router loaded");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/lib/metalpic.js
var lib_metalpic = __webpack_require__(0);

// EXTERNAL MODULE: ./src/lib/util.js
var util = __webpack_require__(1);

// CONCATENATED MODULE: ./src/lib/style-collector.js
class StyleCollector {

    constructor() {
        this.alreadyRegistered = new Set(); // Set<string>
        this.styles = document.createElement("div");
        this.addToDom();
    }

    async addToDom() {
        while (document.body == null) {
            await utils.sleep(10);
        }

        let body = document.body;
        if (body.firstChild) {
            // Add before the first child
            body.insertBefore(this.styles, body.firstChild);
        } else {
            // Insert
            body.appendChild(this.styles);
        }
    }

    // name: string, name of the element registering the style
    // value: string, DOM string like <style></style>
    register(name, value) {
        if (this.alreadyRegistered.has(name)) {
            return;
        }
        this.alreadyRegistered.add(name);
        this.styles.innerHTML += value;
    }
        
}

var metalpicStyleCollector = new StyleCollector();


// CONCATENATED MODULE: ./src/elements/album.js


console.info("Loading");

window.customElements.define("metalpic-album", class extends HTMLElement {
    
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
        metalpicStyleCollector.register("album.js", `
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
        `);
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
        
        this.albumName = decodeURIComponent(routepathSplit[0]);

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

    render() {
        this.innerHTML = ``;

        let body = document.createElement("div");
        body.classList.add("metalpic-album-content-container");
        this.appendChild(body);

        if (this.pictures == null) {
            body.innerHTML = `
                <p>Loading...</p>
            `;
        } else {
            let currentSerialized = JSON.stringify(this.pictures);
            if (currentSerialized == this.picturesSerialized) {
                // Skip
                return;
            }
            this.picturesSerialized = currentSerialized;

            body.innerHTML = `
                <div data-albumname class="metalpic-album-content-title"></div>

            `;

            // Add album name
            this.querySelector("[data-albumname]").innerText = this.albumName;
            document.title = "metalpic - " + this.albumName;

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

// CONCATENATED MODULE: ./src/elements/control-panel-album.js


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
// CONCATENATED MODULE: ./src/lib/check-token.js
class CheckToken {

    // return: Promise<boolean>
    static async isValid() {
        let headers = metalpic.createHeaders();
        let response = await fetch(`/api/checktoken`, {
            method: "POST",
            headers: headers
        });
        if (response.status == 200) {
            let obj = await response.json();
            return obj.valid;
        } else {
            return false;
        }
    }
}
// CONCATENATED MODULE: ./src/elements/control-panel.js



console.info("Loading");

window.customElements.define("metalpic-control-panel", class extends HTMLElement {

    constructor() {
        super();
        this.albumsData = null; // {albums: [{name, public, created}]}
    }

    connectedCallback() {
        metalpicStyleCollector.register("control-panel.js", `
            <style>

            </style>
        `);
        this.loadAlbums();
    }

    async loadAlbums() {
        this.renderLoading();
        
        let tokenValid = await CheckToken.isValid();
        if (!tokenValid) {
            this.renderForbidden();
            return;
        }

        let httpResult = await fetch(`/list`, {
            method: "GET",
            headers: headers
        });

        if (httpResult.status == 403) {
            this.renderForbidden();
            return;
        }

        this.albumsData = await httpResult.json();
        this.render();
    }

    renderBase() {
        this.innerHTML = '';
        let body = document.createElement("div");
        this.appendChild(body);
        return body;
    }

    render() {
        let body = this.renderBase();

        for (let album of this.albumsData.albums) {
            // album: {name, public, created}
            let albumElement = document.createElement("metalpic-control-panel-album");
            body.appendChild(albumElement);
            albumElement.setAttribute("album", JSON.stringify(album));
        }

        body.addEventListener("control-panel-album-updated", (event) => {
            console.info("Album update received, reloading albums...");
            event.stopPropagation();
            this.loadAlbums();
        }, true);
    }

    renderLoading() {
        let body = this.renderBase();

        body.innerHTML = `
            <div>
                Loading
            </div>
        `;
    }

    renderForbidden() {
        let body = this.renderBase();

        body.innerHTML = `
            <div>
                Forbidden
            </div>
        `;
    }

});
// CONCATENATED MODULE: ./src/elements/hub-buttons.js



console.info("Loading");

window.customElements.define("metalpic-hub-buttons", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        metalpicStyleCollector.register("hub-buttons.js", `
            <style>
                .metalpic-hub-buttons-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    align-items: center;
                    width: 100%;
                }

                .metalpic-hub-buttons-item {
                    padding: 10px;
                }

                .metalpic-hub-buttons-link {
                    text-decoration: none;
                    color: black;
                    cursor: pointer;
                }
            </style>
        `);
        this.checkToken();
    }

    async checkToken() {
        let tokenValid = await CheckToken.isValid();
        if (tokenValid) {
            this.render();
        } else {
            this.renderEmpty();
        }
    }

    renderFirst() {
        this.innerHTML = ``;

        let body = document.createElement("div");
        this.appendChild(body);
        return body;
    }

    render() {
        let body = this.renderFirst();

        let container = document.createElement("div");
        body.appendChild(container);
        container.classList.add("metalpic-hub-buttons-container");

        let uploadLink = document.createElement("a");
        utils.addRouterLinkToElement(uploadLink, "metalpic-upload", this);
        container.appendChild(uploadLink);
        uploadLink.innerText = "Upload";
        uploadLink.className = "metalpic-hub-buttons-item metalpic-hub-buttons-link";

        let panelLink = document.createElement("a");
        utils.addRouterLinkToElement(panelLink, "metalpic-control-panel", this);
        container.appendChild(panelLink);
        panelLink.innerText = "Control panel";
        panelLink.className = "metalpic-hub-buttons-item metalpic-hub-buttons-link";
    }

    renderEmpty() {
        let body = this.renderFirst();
    }

});
// CONCATENATED MODULE: ./src/elements/hub.js


console.info("Loading");

window.customElements.define("metalpic-hub", class extends HTMLElement {

    constructor() {
        super();
        this.data = null; // {albums: [{name, public, created}]}
    }

    connectedCallback() {
        document.title = "metalpic - Home";
        metalpicStyleCollector.register("hub.js", `
            <style>
                .metalpic-hub-content-body {
                    padding: 10px;
                }

                .metalpic-hub-content-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    align-items: center;
                }

                .metalpic-hub-content-item-fixed {
                    padding-left: 10px;
                    flex-grow: 0;
                    flex-shrink: 0;
                }

                .metalpic-hub-content-link {
                    text-decoration: none;
                    color: black;
                }

                .metalpic-hub-content-item-grow {
                    flex-grow: 1;
                    flex-shrink: 0;
                }
            </style>
        `);
        this.data = null;
        this.render();
        this.requestAlbums();
    }

    // Render =================================================================

    renderFirst() {
        this.innerHTML = ``;
        let body = document.createElement("div");
        this.appendChild(body);
        body.classList.add("metalpic-hub-content-body");
        return body;
    }

    render() {
        let body = this.renderFirst();

        // Add hub-buttons
        let hubButtons = document.createElement("metalpic-hub-buttons");
        body.appendChild(hubButtons);

        if (this.data != null) {
            let albumsDiv = document.createElement("div");
            body.appendChild(albumsDiv);

            for (let album of this.data.albums) {
                let div = document.createElement("div");
                albumsDiv.appendChild(div);
                div.classList.add("metalpic-hub-content-container");

                let name = document.createElement("a");
                div.appendChild(name);
                name.innerText = album.name;
                name.classList.add("metalpic-hub-content-item-grow");
                name.classList.add("metalpic-hub-content-link");
                utils.addRouterLinkToElement(name, `metalpic-album/${encodeURIComponent(album.name)}`, this);

                let p = document.createElement("div");
                div.appendChild(p);
                p.innerText = album.public ? "public" : "private";
                p.classList.add("metalpic-hub-content-item-fixed");

                let created = document.createElement("div");
                div.appendChild(created);
                created.innerText = utils.dateToString(new Date(album.created));
                created.classList.add("metalpic-hub-content-item-fixed");
            }
        }
    }

    renderForbidden() {
        let body = this.renderFirst();

        body.innerHTML = `
            <div>
                Forbidden
            </div>
        `;
    }

    // Private ================================================================

    async requestAlbums() {
        try {
            let headers = metalpic.createHeaders();

            let response = await fetch(`/list`, {
                method: "GET",
                headers: headers
            });

            if (response.status == 403) {
                this.renderForbidden();
                return;
            }

            let obj = await response.json();
            // {"albums":[{"name":"faser234","public":false,"created":1544376564304},{"name":"faser","public":false,"created":1544363853532}]}
            this.data = obj;
            this.render();
        } catch (err) {
            console.warn("Error", err);
        }
    }

})
// CONCATENATED MODULE: ./src/elements/login.js



console.info("Loading");

window.customElements.define("metalpic-login", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        metalpicStyleCollector.register("login.js", `
            <style>
                .metalpic-login-input {
                    padding: 10px;
                    width: 200px;
                    border: 0;
                }

                .metalpic-login-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;
                }

                .metalpic-login-logout {
                    padding: 10px;
                    cursor: pointer;
                }
            </style>
        `);
        this.checkToken();
    }

    async checkToken() {
        let tokenValid = await CheckToken.isValid();
        if (tokenValid) {
            this.renderLogout();
        } else {
            this.renderLogin();
        }
    }

    // Events =================================================================

    addPasswordEvents(passwordInputElement) {
        passwordInputElement.addEventListener("keyup", async (event) => {
            event.stopPropagation();
            if (event.keyCode === 13) {
                // ENTER
                let username = this.usernameInput.value;
                let password = this.passwordInput.value;

                let headers = metalpic.addApplicationJsonHeaders();

                let httpResponse = await fetch(`/api/login`, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({
                        user: username,
                        pass: password
                    })
                });

                if (httpResponse.status != 200) {
                    alert("Login failed");
                    return;
                }

                let responseObj = await httpResponse.json();
                let token = responseObj.token;
                localStorage.token = token;
                location.reload();
            }
        });
    }

    // Render =================================================================

    renderBase() {
        this.innerHTML = ``;

        let body = document.createElement("div");
        body.classList.add("metalpic-login-container");
        this.appendChild(body);
        return body;
    }

    renderLogin() {
        let body = this.renderBase();

        this.usernameInput = document.createElement("input");
        this.usernameInput.setAttribute("type", "text");
        this.usernameInput.setAttribute("placeholder", "Username");
        this.usernameInput.classList.add("metalpic-login-input");
        body.appendChild(this.usernameInput);

        this.passwordInput = document.createElement("input");
        this.passwordInput.setAttribute("type", "password");
        this.passwordInput.setAttribute("placeholder", "Password");
        this.passwordInput.classList.add("metalpic-login-input");
        this.addPasswordEvents(this.passwordInput);
        body.appendChild(this.passwordInput);

    }

    renderLogout() {
        let body = this.renderBase();

        let logoutButton = document.createElement("div");
        logoutButton.innerText = "Logout";
        logoutButton.classList.add("metalpic-login-logout");
        logoutButton.addEventListener("click", (event) => {
            event.stopPropagation();
            localStorage.token = null;
            location.reload();
        })
        body.appendChild(logoutButton);
    }
});
// CONCATENATED MODULE: ./src/elements/navbar.js


window.customElements.define("metalpic-navbar", class extends HTMLElement {

    // Output events:
    // - metalpic-routechange

    constructor() {
        super();
    }

    connectedCallback() {
        metalpicStyleCollector.register("navbar.js", `
        <style>
        .metalpic-navbar {
            width: 100%;
            height: 90px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            align-items: center;
        }

        .metalpic-navbar-text {
            font-size: 40px;
            padding: 20px;
            cursor: pointer;
            text-decoration: none;
            color: black;
        }
        </style>
        `);
        this.render();
    }

    // Render =================================================================

    renderFirst() {
        this.innerHTML = '';
        let body = document.createElement("div");
        this.appendChild(body);
        return body;
    }

    render() {
        let body = this.renderFirst();
        let container = document.createElement("div");
        body.appendChild(container);
        container.classList.add("metalpic-navbar");

        let p = document.createElement("a");
        container.appendChild(p);
        p.classList.add("metalpic-navbar-text");
        p.innerText = "metalpic";
        utils.addRouterLinkToElement(p, "metalpic-hub", this);
    }

});
// CONCATENATED MODULE: ./src/elements/picture-preview.js


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
// CONCATENATED MODULE: ./src/elements/root.js


window.customElements.define("metalpic-root", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        metalpicStyleCollector.register("root.js", `
            <style>
                @import url('https://fonts.googleapis.com/css?family=Khula');

                * {
                    font-family: 'Khula', sans-serif;
                }

                a {
                    text-decoration: none;
                    color: black;
                }
            </style>
        `);
        this.draw();
    }

    draw() {
        this.innerHTML = `
            <metalpic-navbar></metalpic-navbar>
            <metalpic-login></metalpic-login>
            <metalpic-router></metalpic-router>
        `;
    }

})

console.info("metalpic-root loaded");
// EXTERNAL MODULE: ./src/elements/router.js
var router = __webpack_require__(2);

// CONCATENATED MODULE: ./src/elements/upload.js


console.info("Loading");

window.customElements.define("metalpic-upload", class extends HTMLElement {

    constructor() {
        super();
        this.files = null;
    }


    // Events =================================================================

    connectedCallback() {
        metalpicStyleCollector.register("upload.js", `
            <style>
                .container {
                    padding-left: 10px;
                    padding-top: 10px;
                }
            </style>
        `);
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
        this.innerHTML = '';
        let body = document.createElement("div");
        this.appendChild(body);
        return body;
    }

    render() {
        let body = this.renderFirst();

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
})
// CONCATENATED MODULE: ./src/index.js

















/***/ })
/******/ ]);