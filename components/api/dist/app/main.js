"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_bootstrap_1 = require("../libs/api-bootstrap");
const shared_1 = require("./shared");
const routes_1 = require("./routes");
const logger = shared_1.rootLogger;
const listen = (app, name, port) => {
    return app.listen(port, () => {
        logger.info(`Express ${name} server running at http://0.0.0.0:${port}/`);
    });
};
Promise.all([
    (0, api_bootstrap_1.setupMainApp)({
        setupRoutes: routes_1.setupRoutes
    }),
])
    .then(([mainApp]) => {
    const mainServer = listen(mainApp.express, 'main', 8080);
    process.on('SIGTERM', () => {
        mainServer.close(() => {
            logger.info('mainApp stopped by sigterm');
        });
    });
})
    .catch((err) => {
    console.log(err); // eslint-disable-line
    process.exit(1);
});
