declare var createAlbum: (albumName: string) => Promise<string>;
declare var listAlbums: (showPrivate: boolean) => Promise<any[]>;
declare var getAlbumByName: (albumName: string) => Promise<any>;
declare var getAlbumById: (albumid: string) => Promise<any>;
declare class AlbumNotFoundError extends Error {
}
declare var setVisibility: (albumname: string, newIsPublic: boolean) => Promise<void>;
export { createAlbum, listAlbums, getAlbumByName, getAlbumById, setVisibility, AlbumNotFoundError };
//# sourceMappingURL=mongo-album.d.ts.map