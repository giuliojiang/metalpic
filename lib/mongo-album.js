"use strict";
// Album collection
// {
//     _id
//     name: string
//     public: bool
//     created: 
// }
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("./util"));
const logger_1 = require("./logger");
const mongoosemodels = __importStar(require("./mongoose-models"));
const logger = logger_1.getLogger("mongo-album");
// Create a new album.
// It's private by default
// albumName: string
// return: Promise<string> the mongodb id of the new album
var createAlbum = async function (albumName) {
    // sanitize
    if (util.stringNullOrEmpty(albumName)) {
        throw new Error("album name is null or empty");
    }
    logger.info("Checking and creating album " + albumName);
    let Album = mongoosemodels.getModel("Album");
    let existingAlbums = await Album.find({
        name: albumName
    }).exec();
    logger.info("existingAlbums length is " + existingAlbums.length);
    var albumId = null;
    if (existingAlbums.length == 0) {
        logger.info("the album doesn't exist, creating a new one");
        // Create new one
        let newAlbum = new Album({
            name: albumName,
            public: false,
            created: new Date()
        });
        let savedAlbum = await newAlbum.save();
        albumId = savedAlbum.id;
    }
    else {
        logger.info("the album already exists, getting its id");
        let theAlbum = existingAlbums[0];
        albumId = theAlbum.id;
    }
    logger.info("the album id is " + albumId);
    return albumId;
};
exports.createAlbum = createAlbum;
// Finds the albums
var listAlbums = async function (showPrivate) {
    let Album = mongoosemodels.getModel("Album");
    let query = {};
    if (!showPrivate) {
        query.public = true;
    }
    let existingAlbums = await Album.find(query).sort({
        created: -1
    }).exec();
    return existingAlbums;
};
exports.listAlbums = listAlbums;
// Get an album by name
var getAlbumByName = async function (albumName) {
    let Album = mongoosemodels.getModel("Album");
    let albums = await Album.find({
        name: albumName
    }).exec();
    if (albums.length == 0) {
        return null;
    }
    else {
        let theAlbum = albums[0];
        return theAlbum;
    }
};
exports.getAlbumByName = getAlbumByName;
var getAlbumById = async function (albumid) {
    let Album = mongoosemodels.getModel("Album");
    let albums = await Album.find({
        _id: albumid
    }).exec();
    if (albums.length == 0) {
        return null;
    }
    else {
        return albums[0];
    }
};
exports.getAlbumById = getAlbumById;
class AlbumNotFoundError extends Error {
}
exports.AlbumNotFoundError = AlbumNotFoundError;
var setVisibility = async function (albumname, newIsPublic) {
    let Album = mongoosemodels.getModel("Album");
    let albums = await Album.find({
        name: albumname
    }).exec();
    if (albums.length == 0) {
        throw new AlbumNotFoundError();
    }
    let theAlbum = albums[0];
    theAlbum.public = newIsPublic;
    await theAlbum.save();
};
exports.setVisibility = setVisibility;
//# sourceMappingURL=mongo-album.js.map