// Pic collection
// {
//     _id
//     name
//     albumid
//     ready     false if still uploading
// }

const path = require("path");
const util = require(path.resolve(__dirname, "util.js"));
const logger = require(path.resolve(__dirname, "logger.js")).getLogger("mongo-pic");
const mongoose = require(path.resolve(__dirname, "mongoose.js"));

// Inserts a new picture.
// name: string, name of the image file
// albumid: string, mongodb id of the album
// return: Promise<string> the mongodb id of the inserted pic
module.exports.insertPic = async function(name, albumid) {
    // sanitize
    if (util.stringNullOrEmpty(name)) {
        throw new Error("name is null or empty");
    }
    if (util.stringNullOrEmpty(albumid)) {
        throw new Error("albumid is null or empty");
    }

    let newPic = new mongoose.Pic({
        name: name,
        albumid: albumid,
        ready: false
    });

    let savedPic = await newPic.save();
    let insertedId = savedPic.id;

    logger.info("inserted id is " + insertedId);
    return insertedId;
}

// Sets a picture's 'ready' to true
// picid: string, _id field of the picture to be updated
// return: Promise<void>
module.exports.setAsReady = async function(picid) {
    await mongoose.Pic.findByIdAndUpdate(picid, {
        $set: {
            ready: true
        }
    }).exec();
}