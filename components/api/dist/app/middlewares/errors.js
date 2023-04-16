"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    // custom error handler
    console.log("HELLO?");
    next(err); // fallback to default error handler in api-bootstrap
};
exports.errorHandler = errorHandler;
