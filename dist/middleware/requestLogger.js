"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestLogger = (req, res, next) => {
    const { url, method } = req;
    console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);
    next();
};
exports.default = requestLogger;
//# sourceMappingURL=requestLogger.js.map