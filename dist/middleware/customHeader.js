"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customHeader = (headerName, headerValue) => {
    return (req, res, next) => {
        res.setHeader(headerName, headerValue);
        next();
    };
};
exports.default = customHeader;
//# sourceMappingURL=customHeader.js.map