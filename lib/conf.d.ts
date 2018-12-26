interface Conf {
    bucket: string;
    uploadDir: string;
    mongoUrl: string;
    username: string;
    password: string;
}
declare var set: (conf: Conf) => void;
declare var get: () => Conf;
export { set, get, Conf };
//# sourceMappingURL=conf.d.ts.map