"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const conf = __importStar(require("./conf"));
const loggerFactory = __importStar(require("./logger"));
const AWS = __importStar(require("aws-sdk"));
const util = __importStar(require("./util"));
const logger = loggerFactory.getLogger("s3");
// Load the SDK for JavaScript
// Set the region 
AWS.config.update({ region: 'eu-west-2' });
// Create S3 service object
var s3 = new AWS.S3({ apiVersion: '2006-03-01' });
// Call S3 to list current buckets
s3.listBuckets(function (err, data) {
    if (err) {
        logger.error("Error", err);
    }
    else {
        logger.info("Bucket List: " + JSON.stringify(data.Buckets));
    }
});
// filepath: string, location of the file on the local disk
// fileid: string, name of the file once uploaded on s3
// Return a Promise<uploadData>
var uploadFile = function (filepath, fileid) {
    var uploadParams = {
        Bucket: conf.get().bucket,
        Key: '',
        Body: ''
    };
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
            }
            else {
                resolve(data);
            }
        });
    });
    return uploadPromise;
};
exports.uploadFile = uploadFile;
var openFileAsStream = function (fileid) {
    if (!util.isString(fileid)) {
        throw new Error("Not a string");
    }
    var params = {
        Bucket: conf.get().bucket,
        Key: fileid
    };
    let result = s3.getObject(params).createReadStream();
    return result;
};
exports.openFileAsStream = openFileAsStream;
//# sourceMappingURL=s3.js.map