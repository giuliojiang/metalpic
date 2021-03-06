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
var priv = {
    s3: null
};
var initBucket = async function () {
    try {
        // Load the SDK for JavaScript
        // Set the region 
        AWS.config.update({ region: 'eu-west-2' });
        // Create S3 service object
        priv.s3 = new AWS.S3({ apiVersion: '2006-03-01' });
        // Call S3 to list current buckets
        let buckets = await new Promise((resolve, reject) => {
            priv.s3.listBuckets(function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    logger.info("Bucket List: " + JSON.stringify(data.Buckets));
                    resolve(data.Buckets);
                }
            });
        });
        let bucketAlreadyExists = () => {
            let targetBucket = conf.get().bucket;
            for (let i = 0; i < buckets.length; i++) {
                let b = buckets[i];
                if (b.Name == targetBucket) {
                    return true;
                }
            }
            return false;
        };
        if (!bucketAlreadyExists()) {
            // Create bucket
            await new Promise((resolve, reject) => {
                priv.s3.createBucket({
                    Bucket: conf.get().bucket
                }, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            });
        }
    }
    catch (err) {
        logger.error("Error when initializing S3. Did you correctly set ~/.aws/credentials ?", err);
        process.exit(1);
    }
};
exports.initBucket = initBucket;
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
        priv.s3.upload(uploadParams, (err, data) => {
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
    let result = priv.s3.getObject(params).createReadStream();
    return result;
};
exports.openFileAsStream = openFileAsStream;
//# sourceMappingURL=s3.js.map