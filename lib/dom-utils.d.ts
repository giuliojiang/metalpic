import jsdom = require("jsdom");
export declare class DomUtils {
    static createNewDocument(): jsdom.JSDOM;
    static addText(dom: jsdom.JSDOM, text: string): void;
    static escapeHtml(s: string): string;
}
//# sourceMappingURL=dom-utils.d.ts.map