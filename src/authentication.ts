import { OAuth2Client } from "google-auth-library";
import * as conf from "./conf";

// ============================================================================

var authenticate = async function(googleToken: string): Promise<{id: string, name: string}> {
    var client = new OAuth2Client(conf.get().googleClientId);

    var ticket;
    try {
        ticket = await client.verifyIdToken({
            idToken: googleToken,
            audience: conf.get().googleClientId
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

export { authenticate }