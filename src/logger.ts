class Logger {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(message: string) {
        console.info(`INFO [${this.name}]: ${message}`);
    }

    error(message: string, err: Error) {
        console.info(`INFO [${this.name}]: ${message}`);
        if (err != null) {
            console.info(err);
        }
    }
}

var getLogger = function(name: string): Logger {
    return new Logger(name);
}

export {
    getLogger
}