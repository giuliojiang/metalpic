const path = require("path");
const metalpic = require(__dirname, "index.js");
const fs = require("fs");

const conf = metalpic.getConf();

// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-2'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});
                    
// Call S3 to list current buckets
s3.listBuckets(function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Bucket List", data.Buckets);
   }
});

// Return a Promise<uploadData>
module.exports.uploadFile = function(filepath, fileid) {
    var uploadParams = {
        Bucket: conf.bucket,
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
