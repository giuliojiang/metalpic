import jsdom = require("jsdom");

export class DomUtils {

    static createNewDocument(equivalentPath: string): jsdom.JSDOM {
        let dom = new jsdom.JSDOM(`
        <!DOCTYPE html>
        <head>
            <script>
                var metalpic_equivalent_path = "${equivalentPath}";
            </script>
            <script src="/v/detector.js"></script>
        </head>
        <body></body>
        `);
        return dom;
    }

    static addText(dom: jsdom.JSDOM, text: string): void {
        this.addInDiv(dom, () => {
            let div = dom.window.document.createElement("div");
            div.innerHTML = this.escapeHtml(text);
            return div;
        });
    }

    static addH1(dom: jsdom.JSDOM, text: string): void {
        this.addInDiv(dom, () => {
            let h1 = dom.window.document.createElement("h1");
            h1.innerHTML = this.escapeHtml(text);
            return h1;
        });
    }

    static addLink(dom: jsdom.JSDOM, text: string, destination: string): void {
        this.addInDiv(dom, () => {
            let div = dom.window.document.createElement("a");
            div.innerHTML = this.escapeHtml(text);
            div.setAttribute("href", destination);
            return div;
        });
    }

    static addPicture(dom: jsdom.JSDOM, alttext: string, imgsrc: string): void {
        this.addInDiv(dom, () => {
            let img = dom.window.document.createElement("img");
            img.setAttribute("alt", alttext);
            img.setAttribute("src", imgsrc);
            return img;
        });
    }

    static setTitle(dom: jsdom.JSDOM, title: string): void {
        dom.window.document.title = title;
    }

    private static addInDiv(dom: jsdom.JSDOM, func: () => HTMLElement): void {
        let div = dom.window.document.createElement("div");
        let elem = func();
        div.appendChild(elem);
        dom.window.document.body.appendChild(div);
    }

    private static escapeHtml(s: string): string {
        return s
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

}