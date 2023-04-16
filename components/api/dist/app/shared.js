"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootLogger = void 0;
const logging_1 = require("../libs/logging");
exports.rootLogger = (0, logging_1.createLogger)({ name: 'avdc' });
