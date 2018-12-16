// Pic collection
// {
//     _id
//     name
//     albumid
//     ready     false if still uploading
// }

import * as  util from "./util";
import * as loggerFactory from "./logger";
import * as mongoose from "./mongoose-models";

const logger = loggerFactory.getLogger("mongo-pic");

// Inserts a new picture.
// name: string, name of the image file
// albumid: string, mongodb id of the album
// return: Promise<string> the mongodb id of the inserted pic
var insertPic = async function(name: string, albumid: string): Promise<string> {
    // sanitize
    if (util.stringNullOrEmpty(name)) {
        throw new Error("name is null or empty");
    }
    if (util.stringNullOrEmpty(albumid)) {
        throw new Error("albumid is null or empty");
    }

    let Pic = mongoose.getModel("Pic");

    let newPic = new Pic({
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
var setAsReady = async function(picid: string): Promise<void> {
    let Pic = mongoose.getModel("Pic");
    await Pic.findByIdAndUpdate(picid, {
        $set: {
            ready: true
        }
    }).exec();
}

// Get all the pictures in an album
var getPicturesInAlbum = async function(albumid: string): Promise<any[]> {
    let Pic = mongoose.getModel("Pic");
    let results = await Pic.find({
        albumid: albumid,
        ready: true
    }).exec();
    return results;
}

export {
    insertPic,
    setAsReady,
    getPicturesInAlbum
}