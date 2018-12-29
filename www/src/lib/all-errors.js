window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    var msg = "UNCAUGHT ERROR OCCURRED AT ["+ url +"], ["+ lineNumber +"], " + errorMsg;
    console.info(msg);
    let div = document.createElement("p");
    div.innerText = msg;
    div.classList.add("metalpic-error-message");
    document.write("ERROR");
    document.body.appendChild(div);
    return false;
}