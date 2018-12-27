"use strict";

window.utils = {};

utils.isString = function(s) {
    return typeof s === 'string' || s instanceof String
}

utils.stringNullOrEmpty = function(s) {
    if (s == null) {
        return true;
    }
    if (!utils.isString(s)) {
        return true;
    }
    if (s == "") {
        return true;
    }
    return false;
}

utils.isBot = function() {
    return true;
    return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
}

// elem: HTMLElement, the element that should be made clickable
// destination: string, destination router string
// parent: the parent element of the component, which is used to dispatch the event
utils.addRouterLinkToElement = function(elem, destination, parent) {
    if (utils.isBot()) {
        elem.href = "/" + destination;
    } else {
        elem.addEventListener("click", (event) => {
            event.stopPropagation();
            let e = new Event("metalpic-routechange");
            e.newRoute = destination;
            parent.dispatchEvent(e);
        });
    }
}

// Date to string
// in yyyy. MM. dd format
utils.dateToString = function(d) {
    return d.toLocaleDateString('ko-KR');
}

// From https://stackoverflow.com/a/9756789
utils.quoteattr = function(s, preserveCR) {
    preserveCR = preserveCR ? '&#13;' : '\n';
    return ('' + s) /* Forces the conversion to string. */
        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        /*
        You may add other replacements here for HTML only 
        (but it's not necessary).
        Or for XML, only if the named entities are defined in its DTD.
        */ 
        .replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
        .replace(/[\r\n]/g, preserveCR);
        ;
}

utils.sleep = function(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}