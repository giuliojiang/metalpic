import mongoose = require("mongoose");
import * as conf from "./conf";
import * as loggerFactory from "./logger";

const logger = loggerFactory.getLogger("mongoose");

let models = new Map<string, mongoose.Model<any, any>>();

var connect = async function(): Promise<void> {
    let db: mongoose.Connection = await mongoose.createConnection(conf.get().mongoUrl, {
        useNewUrlParser: true
    });

    let albumSchema: mongoose.Schema = new mongoose.Schema({
        name: String,
        public: Boolean,
        created: Date
    });

    let Album = db.model("Album", albumSchema);
    models.set("Album", Album);

    let picSchema = new mongoose.Schema({
        name: String,
        albumid: String,
        ready: Boolean
    });

    let Pic = db.model("Pic", picSchema);
    models.set("Pic", Pic);

    logger.info("mongoose models initialized");
}

var getModel = function(modelName: string): mongoose.Model<any, any> {
    if (!models.has(modelName)) {
        throw new Error(`No model called [${modelName}] was defined`);
    }
    return models.get(modelName);
}

export {
    connect,
    getModel
}