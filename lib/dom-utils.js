"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom = require("jsdom");
class DomUtils {
    static createNewDocument() {
        let dom = new jsdom.JSDOM(`<!DOCTYPE html><head></head><body></body>`);
        return dom;
    }
    static addText(dom, text) {
        let div = dom.window.document.createElement("div");
        div.innerHTML = this.escapeHtml(text);
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