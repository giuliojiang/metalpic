import {html, render} from 'https://unpkg.com/lit-html?module';

window.customElements.define("metalpic-login", class extends HTMLElement {

    constructor() {

        super();

        this.template = () => html`
<style>
    .metalpic-login-signin {
        padding: 30px;
    }
</style>
<div id="metalpic-login-signin" class="metalpic-login-signin"></div>
        `; 

        jpress.gsignin.callWhenLoginSuccessful(() => {
            var event = new Event("metalpic-routechange");
            event.newRoute = "metalpic-hub";
            this.dispatchEvent(event);
            console.info("Dispatched routechange to hub");
        });
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        render(this.template(), this);
        gapi.signin2.render("metalpic-login-signin", {
            'onsuccess': jpress_on_google_sign_in
        })
    }

})

console.info("metalpic-login loaded");