"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultErrorHandler = void 0;
const createDefaultErrorHandler = (logger) => {
    return (err, req, res, next) => {
        console.log(err.stack);
        res.status(500).send('Something Broke!!!');
    };
};
exports.createDefaultErrorHandler = createDefaultErrorHandler;
