import jsdom = require("jsdom");

export class DomUtils {

    static createNewDocument(): jsdom.JSDOM {
        let dom = new jsdom.JSDOM(`<!DOCTYPE html><head></head><body></body>`);
        return dom;
    }

    static addText(dom: jsdom.JSDOM, text: string): void {
        let div = dom.window.document.createElement("div");
        div.innerHTML = this.escapeHtml(text);
        dom.window.document.body.appendChild(div);
    }



    static escapeHtml(s: string): string {
        return s
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

}