const path = require("path");
const mongodb = require("mongodb");
const conf = require(path.resolve(__dirname, "conf.js"));

// collectionName: string
// return: Promise<Collection>
module.exports.getCollection = async function(collectionName) {
    let MongoClient = mongodb.MongoClient;
    let url = conf.get().mongoUrl;

    let client = await MongoClient.connect(url);
    var db = client.db(conf.get().mongoDb);
    let collection = db.collection(collectionName);
    return collection;
}