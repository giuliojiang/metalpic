/// <reference types="node" />
import * as AWS from "aws-sdk";
import { Readable } from "stream";
declare var initBucket: () => Promise<void>;
declare var uploadFile: (filepath: string, fileid: string) => Promise<AWS.S3.ManagedUpload.SendData>;
declare var openFileAsStream: (fileid: string) => Readable;
export { uploadFile, openFileAsStream, initBucket };
//# sourceMappingURL=s3.d.ts.map