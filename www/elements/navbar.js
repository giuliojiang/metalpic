window.customElements.define("metalpic-navbar", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .metalpic-navbar {
                    width: 100%;
                    height: 90px;
                    background-color: #32324e;
                }

                .metalpic-navbar-text {
                    font-family: "Impact";
                    font-size: 40px;
                    padding: 20px;
                    text-align: center;
                    color: white;
                }
            </style>
            <div class="metalpic-navbar">
                <p class="metalpic-navbar-text">metalpic</p>
            </div>
        `;
    }

});

console.info("metalpic-navbar loaded");