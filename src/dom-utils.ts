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
        let div = dom.window.document.createElement("div");
        div.innerHTML = this.escapeHtml(text);
        dom.window.document.body.appendChild(div);
    }

    static addLink(dom: jsdom.JSDOM, text: string, destination: string): void {
        this.addInDiv(dom, () => {
            let div = dom.window.document.createElement("a");
            div.innerHTML = this.escapeHtml(text);
            div.setAttribute("href", destination);
            return div;
        });
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