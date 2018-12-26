declare var insertPic: (name: string, albumid: string) => Promise<string>;
declare var setAsReady: (picid: string) => Promise<void>;
declare var getPicturesInAlbum: (albumid: string, skip: number, limit: number) => Promise<any[]>;
declare var getPicture: (pictureId: string) => Promise<any>;
export { insertPic, setAsReady, getPicturesInAlbum, getPicture };
//# sourceMappingURL=mongo-pic.d.ts.map