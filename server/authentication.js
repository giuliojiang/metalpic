"use strict";

const path = require("path");
const {OAuth2Client} = require('google-auth-library');
const metalpic = require(path.resolve(__dirname, "index.js"));

var priv = {};

var conf = metalpic.getConf();
priv.client = new OAuth2Client(conf.googleClientId);

// ============================================================================
module.exports.authenticate = async function(googleToken) {
    var ticket;
    try {
        ticket = await priv.client.verifyIdToken({
            idToken: googleToken,
            audience: mod.context.getContext().googleClientId
        });
    } catch (err) {
        console.error("Authentication error: ", err);
        return null;
    }

    const payload = ticket.getPayload();
    const userId = payload["sub"];
    var username = payload["name"];

    return {
        id: userId,
        name: username
    };

};