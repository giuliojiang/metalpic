// Album collection
// {
//     _id
//     name: string
//     public: bool
//     created: 
// }

import * as util from "./util";
import { getLogger } from "./logger";
import * as mongoosemodels from "./mongoose-models";
import * as mongoose from "mongoose";

const logger = getLogger("mongo-album");

// Create a new album.
// It's private by default
// albumName: string
// return: Promise<string> the mongodb id of the new album
var createAlbum = async function(albumName: string): Promise<string> {
    
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
    } else {
        logger.info("the album already exists, getting its id");
        let theAlbum = existingAlbums[0];
        albumId = theAlbum.id;
    }
    logger.info("the album id is " + albumId);

    return albumId;
}

// Finds the albums
var listAlbums = async function(showPrivate: boolean): Promise<any[]> {

    let Album = mongoosemodels.getModel("Album");

    let query = {} as any;
    if (!showPrivate) {
        query.public = true;
    }

    let existingAlbums = await Album.find(query).sort({
        created: -1
    }).exec();

    return existingAlbums;
}

// Get an album by name
var getAlbumByName = async function(albumName: string): Promise<any> {
    let Album = mongoosemodels.getModel("Album");

    let albums = await Album.find({
        name: albumName
    }).exec();

    if (albums.length == 0) {
        return null;
    } else {
        let theAlbum = albums[0];
        return theAlbum;
    }
}

export {
    createAlbum,
    listAlbums,
    getAlbumByName
}