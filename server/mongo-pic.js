// Pic collection
// {
//     _id
//     name
//     albumid
//     ready     false if still uploading
// }

const path = require("path");
const mongo = require(path.resolve(__dirname, "mongo.js"));
const mongodb = require("mongodb");
const util = require(path.resolve(__dirname, "util.js"));
const logger = require(path.resolve(__dirname, "logger.js")).getLogger("mongo-pic");

const PIC_COLLECTION = "pic";

// Inserts a new picture.
// name: string, name of the image file
// albumid: string, mongodb id of the album
// return: Promise<string> the mongodb id of the inserted pic
module.exports.insertPic = async function(name, albumid) {
    let collection = await mongo.getCollection(PIC_COLLECTION);

    // sanitize
    if (util.stringNullOrEmpty(name)) {
        throw new Error("name is null or empty");
    }
    if (util.stringNullOrEmpty(albumid)) {
        throw new Error("albumid is null or empty");
    }

    let doc = {
        name: name,
        albumid: new mongodb.ObjectId(albumid),
        ready: false
    };

    let result = await collection.insertOne(doc);
    let insertedId = result.insertedId;
    logger.info("inserted id is " + insertedId.toString());
    return insertedId.toString();
}