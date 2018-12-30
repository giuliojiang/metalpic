"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom = require("jsdom");
class DomUtils {
    static createNewDocument(equivalentPath) {
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
    static addText(dom, text) {
        let div = dom.window.document.createElement("div");
        div.innerHTML = this.escapeHtml(text);
        dom.window.document.body.appendChild(div);
    }
    static addLink(dom, text, destination) {
        this.addInDiv(dom, () => {
            let div = dom.window.document.createElement("a");
            div.innerHTML = this.escapeHtml(text);
            div.setAttribute("href", destination);
            return div;
        });
    }
    static addInDiv(dom, func) {
        let div = dom.window.document.createElement("div");
        let elem = func();
        div.appendChild(elem);
        dom.window.document.body.appendChild(div);
    }
    static escapeHtml(s) {
        return s
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}
exports.DomUtils = DomUtils;
//# sourceMappingURL=dom-utils.js.map