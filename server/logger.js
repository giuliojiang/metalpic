class Logger {
    constructor(name) {
        this.name = name;
    }

    info(message) {
        console.info(`INFO [${this.name}]: ${message}`);
    }

    error(message, err) {
        console.info(`INFO [${this.name}]: ${message}`);
        if (err != null) {
            console.info(err);
        }
    }
}

module.exports.getLogger = function(name) {
    return new Logger(name);
}