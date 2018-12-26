window.customElements.define("metalpic-root", class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.draw();
    }

    draw() {
        this.innerHTML = `
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
            <metalpic-router></metalpic-router>
        `;
    }

})

console.info("metalpic-root loaded");