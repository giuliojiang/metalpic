// Album collection
// {
//     _id
//     name
//     public
// }

const path = require("path");
const mongo = require(path.resolve(__dirname, "mongo.js"));
const util = require(path.resolve(__dirname, "util.js"));
const logger = require(path.resolve(__dirname, "logger.js")).getLogger("mongo-album");

const ALBUM_COLLECTION = "album";

// Create a new album.
// It's private by default
// albumName: string
// return: Promise<string> the mongodb id of the new album
module.exports.createAlbum = async function(albumName) {
    
    // sanitize
    if (util.stringNullOrEmpty(albumName)) {
        throw new Error("album name is null or empty");
    }

    let session = await mongo.startSession();
    let collection = await mongo.getCollection(ALBUM_COLLECTION);
    session.startTransaction({
        readConcern: {
            level: "snapshot"
        },
        writeConcern: {
            w: "majority"
        }
    });

    let closeAndReturn = async (data) => {
        await session.commitTransaction();
        session.endSession();
        return data;
    }

    // Find if there are existing

    let docs = await collection.find({
        name: albumName
    }, {
        session: session
    }).toArray();

    if (docs.length > 0) {
        // A document already exists
        let doc = docs[0];
        let existingId = doc._id.toString();
        logger.info("An album already exists, id is " + existingId);
        return await closeAndReturn(existingId);
    } else {
        // A document should be created
        let res = await collection.insertOne({
            name: albumName,
            public: false
        }, {
            session: session
        });
        let insertedId = res.insertedId.toString();
        logger.info("Created new album with id " + insertedId);
        return await closeAndReturn(insertedId);
    }
}