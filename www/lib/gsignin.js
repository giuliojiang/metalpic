"use strict";

// based on https://developers.google.com/identity/sign-in/web/backend-auth

jpress.gsignin = {};
jpress.gsignin.token = null; // Will hold the token when user is signed in
jpress.gsignin.signOut = null; // Function to sign out

// ============================================================================
var jpress_on_google_sign_in = function(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.info("Login success");
    jpress.gsignin.token = id_token;
};

// ============================================================================
jpress.gsignin.signOut = function() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        jpress.gsignin.token = null;
        console.log('Signed out');
    });
};

// ============================================================================
jpress.gsignin.callWhenLoginSuccessful = function(func) {
    var handle = setInterval(function() {
        if (jpress.gsignin.token) {
            clearInterval(handle);
            func();
        }
    }, 250);
};
