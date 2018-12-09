// Album collection
// {
//     _id
//     name: string
//     public: bool
//     created: 
// }

const path = require("path");
const util = require(path.resolve(__dirname, "util.js"));
const logger = require(path.resolve(__dirname, "logger.js")).getLogger("mongo-album");
const mongoose = require(path.resolve(__dirname, "mongoose.js"));

// Create a new album.
// It's private by default
// albumName: string
// return: Promise<string> the mongodb id of the new album
module.exports.createAlbum = async function(albumName) {
    
    // sanitize
    if (util.stringNullOrEmpty(albumName)) {
        throw new Error("album name is null or empty");
    }

    logger.info("Checking and creating album " + albumName);

    let existingAlbums = await mongoose.Album.find({
        name: albumName
    }).exec();

    logger.info("existingAlbums length is " + existingAlbums.length);

    var albumId = null;
    if (existingAlbums.length == 0) {
        logger.info("the album doesn't exist, creating a new one");
        // Create new one
        let newAlbum = new mongoose.Album({
            name: albumName,
            public: false,
            created: new Date()
        });
        let savedAlbum = await newAlbum.save();
        albumId = savedAlbum.id;
    } else {
        logger.info("the album already exists, getting its id");
        let theAlbum = existingAlbums[0];
        albumId = theAlbum.id;
    }
    logger.info("the album id is " + albumId);

    return albumId;
}