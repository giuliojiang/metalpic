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

    module.exports.Album = mongoose.model("Album", albumSchema);

    logger.info("mongoose models initialized");
}