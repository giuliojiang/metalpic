"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const conf = __importStar(require("./conf"));
const loggerFactory = __importStar(require("./logger"));
const logger = loggerFactory.getLogger("mongoose");
let models = new Map();
var connect = async function () {
    let db = await mongoose.createConnection(conf.get().mongoUrl, {
        useNewUrlParser: true
    });
    let albumSchema = new mongoose.Schema({
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
};
exports.connect = connect;
var getModel = function (modelName) {
    if (!models.has(modelName)) {
        throw new Error(`No model called [${modelName}] was defined`);
    }
    return models.get(modelName);
};
exports.getModel = getModel;
//# sourceMappingURL=mongoose-models.js.map