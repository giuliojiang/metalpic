const path = require("path");
const mongodb = require("mongodb");
const conf = require(path.resolve(__dirname, "conf.js"));
const util = require(path.resolve(__dirname, "util.js"));
const logger = require(path.resolve(__dirname, "logger.js")).getLogger("mongo.js");

var priv = {};

// collectionName: string
// return: Promise<Collection>
module.exports.getCollection = async function(collectionName) {
    let client = await priv.getClient();
    var db = client.db(conf.get().mongoDb);
    let collection = db.collection(collectionName);
    return collection;
}

// Private ====================================================================

priv.getClient = async function() {
    if (priv.client != null) {
        return priv.client;
    }
    let MongoClient = mongodb.MongoClient;
    let url = conf.get().mongoUrl;

    let client = await MongoClient.connect(url);
    priv.client = client;
    return client;
}