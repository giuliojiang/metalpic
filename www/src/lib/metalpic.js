if (window.metalpic == null) {
    window.metalpic = {};
}

metalpic.TOKEN_HEADER = "Metalpic-Auth-Token";

metalpic.createHeaders = function() {
    var headers = {};
    headers[metalpic.TOKEN_HEADER] = localStorage.token;
    return headers;
}

metalpic.addApplicationJsonHeaders = function(headers) {
    if (headers == null) {
        headers = {};
    }
    headers["Content-Type"] = "application/json; charset=utf-8";
    return headers;
}