import jsdom = require("jsdom");
export declare class DomUtils {
    static createNewDocument(): jsdom.JSDOM;
    static addText(dom: jsdom.JSDOM, text: string): void;
    static addLink(dom: jsdom.JSDOM, text: string, destination: string): void;
    private static addInDiv;
    private static escapeHtml;
}
//# sourceMappingURL=dom-utils.d.ts.map