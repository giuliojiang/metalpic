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
<div class="g-signin2 metalpic-login-signin" data-onsuccess="jpress_on_google_sign_in"></div>
        `; 

        jpress.gsignin.callWhenLoginSuccessful(() => {
            var event = new Event("metalpic-routechange");
            event.newRoute = "metalpic-hub";
            this.dispatchEvent(event);
            console.info("Dispatched routechange event");
        });
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        render(this.template(), this);
    }

})

console.info("metalpic-login loaded");