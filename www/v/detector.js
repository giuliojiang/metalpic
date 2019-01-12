var detectorIsBot = function() {
    // return true;
    return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
}

if (!detectorIsBot()) {
    window.location = metalpic_equivalent_path;
}

var detectorDoNavigation = function() {
    window.location = metalpic_equivalent_path;
}