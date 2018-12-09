import * as fs from "fs";
import * as conf from "./conf";
import * as loggerFactory from "./logger";
import * as AWS from "aws-sdk";

const logger = loggerFactory.getLogger("s3");

// Load the SDK for JavaScript
// Set the region 
AWS.config.update({region: 'eu-west-2'});

// Create S3 service object
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
                    
// Call S3 to list current buckets
s3.listBuckets(function(err: any, data: any) {
    if (err) {
       logger.error("Error", err);
    } else {
       logger.info("Bucket List: " + JSON.stringify(data.Buckets));
    }
});

// filepath: string, location of the file on the local disk
// fileid: string, name of the file once uploaded on s3
// Return a Promise<uploadData>
var uploadFile = function(filepath: string, fileid: string): Promise<AWS.S3.ManagedUpload.SendData> {
    var uploadParams = {
        Bucket: conf.get().bucket,
        Key: '',
        Body: ''
    }

    var filestream = fs.createReadStream(filepath);
    filestream.on("error", (err) => {
        console.info("File error", err);
    });
    uploadParams.Body = filestream as any;
    uploadParams.Key = fileid;

    var uploadPromise = new Promise<AWS.S3.ManagedUpload.SendData>((resolve, reject) => {
        s3.upload(uploadParams, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
    
    return uploadPromise;
};

export {
    uploadFile
}
