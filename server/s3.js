const path = require("path");
const fs = require("fs");
const conf = require(path.resolve(__dirname, "conf.js"));
const logger = require(path.resolve(__dirname, "logger.js")).getLogger("s3");

// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-2'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});
                    
// Call S3 to list current buckets
s3.listBuckets(function(err, data) {
    if (err) {
       logger.error("Error", err);
    } else {
       logger.info("Bucket List: " + JSON.stringify(data.Buckets));
    }
});

// filepath: string, location of the file on the local disk
// fileid: string, name of the file once uploaded on s3
// Return a Promise<uploadData>
module.exports.uploadFile = function(filepath, fileid) {
    var uploadParams = {
        Bucket: conf.get().bucket,
        Key: '',
        Body: ''
    }

    var filestream = fs.createReadStream(filepath);
    filestream.on("error", (err) => {
        console.info("File error", err);
    });
    uploadParams.Body = filestream;
    uploadParams.Key = fileid;

    var uploadPromise = new Promise((resolve, reject) => {
        s3.upload(uploadParams, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
    
    return uploadPromise;
};
