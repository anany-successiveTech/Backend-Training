"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addedMiddleware = void 0;
const addedMiddleware = (req, res, next) => {
    const data = req.body;
    console.log(data, "data of the countries");
    next();
};
exports.addedMiddleware = addedMiddleware;
//# sourceMappingURL=addedMiddleware.js.map