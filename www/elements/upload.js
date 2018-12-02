import {html, render} from 'https://unpkg.com/lit-html?module';

window.customElements.define("metalpic-upload", class extends HTMLElement {

    constructor() {

        super();

        this.template = () => html`
<style>

</style>
<p>Metalpic uploader</p>
<input type="file" data-fileupload multiple>
        `;

        this.draw();

        var inputElem = this.querySelector("[data-fileupload]");

        var upload = async (file) => {
            console.info("Uploading file " + file.name);
            var response = await fetch(`/api/upload/${file.name}/${jpress.gsignin.token}`, {
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

    connectedCallback() {
        this.draw();
    }

    draw() {
        render(this.template(), this);
    }

})

console.info("metalpic-upload loaded");