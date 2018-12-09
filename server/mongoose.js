const mongoose = require("mongoose");
const path = require("path");
const conf = require(path.resolve(__dirname, "conf.js"));
const logger = require(path.resolve(__dirname, "logger.js")).getLogger("mongoose");

var priv = {};

module.exports.connect = async function() {
    priv.db = await mongoose.createConnection(conf.get().mongoUrl, {
        useNewUrlParser: true
    });

    let albumSchema = new mongoose.Schema({
        name: String,
        public: Boolean,
        created: Date
    });

    module.exports.Album = priv.db.model("Album", albumSchema);

    let picSchema = new mongoose.Schema({
        name: String,
        albumid: String,
        ready: Boolean
    });

    module.exports.Pic = priv.db.model("Pic", picSchema);

    logger.info("mongoose models initialized");
}