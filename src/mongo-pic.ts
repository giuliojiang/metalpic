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
var getPicturesInAlbum = async function(albumid: string, skip: number, limit: number): Promise<any[]> {
    if (limit == null) {
        throw new Error("limit is null");
    }
    if (skip == null) {
        throw new Error("skip is null");
    }

    let Pic = mongoose.getModel("Pic");

    let results: any[] = await Pic.find({
        albumid: albumid,
        ready: true
    }).sort("_id")
    .skip(skip)
    .limit(limit)
    .exec();

    return results;
}

// Returns null if the picture does not exist
var getPicture = async function(pictureId: string): Promise<any> {
    let Pic = mongoose.getModel("Pic");
    let results = await Pic.find({
        _id: pictureId
    }).exec();
    if (results.length == 0) {
        return null;
    } else {
        return results[0];
    }
}

export {
    insertPic,
    setAsReady,
    getPicturesInAlbum,
    getPicture
}