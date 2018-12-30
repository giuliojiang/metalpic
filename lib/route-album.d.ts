import express = require("express");
declare var albumHandler: () => express.Express;
declare class AlbumNotFoundError extends Error {
}
declare class AlbumUnauthorizedError extends Error {
}
declare var getAlbumAndPictures: (albumname: string, page: number, authenticated: boolean) => Promise<{
    album: any;
    pictures: any[];
}>;
export { albumHandler, getAlbumAndPictures, AlbumNotFoundError, AlbumUnauthorizedError };
//# sourceMappingURL=route-album.d.ts.map