import jsdom = require("jsdom");
export declare class DomUtils {
    static createNewDocument(equivalentPath: string): jsdom.JSDOM;
    static addText(dom: jsdom.JSDOM, text: string): void;
    static addH1(dom: jsdom.JSDOM, text: string): void;
    static addLink(dom: jsdom.JSDOM, text: string, destination: string): void;
    static addPicture(dom: jsdom.JSDOM, alttext: string, imgsrc: string): void;
    static setTitle(dom: jsdom.JSDOM, title: string): void;
    private static addInDiv;
    private static escapeHtml;
}
//# sourceMappingURL=dom-utils.d.ts.map