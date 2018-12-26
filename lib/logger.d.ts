declare class Logger {
    name: string;
    constructor(name: string);
    info(message: string): void;
    error(message: string, err: Error): void;
}
declare var getLogger: (name: string) => Logger;
export { getLogger };
//# sourceMappingURL=logger.d.ts.map