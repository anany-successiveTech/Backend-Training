"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorMessage_1 = __importDefault(require("../utils/errorMessage"));
const handleGlobalError = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || errorMessage_1.default[statusCode] || "Unexpected error";
    console.error(err.stack);
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
};
exports.default = handleGlobalError;
// Sometime if we don't export the "TypeScript" treated file we'll face ts red squiggly.
// Like here i have already write something : Record<number, string>  to "errorMessage" coming from utils.
// next(err) pass error in just previous middleware
// here we don't need to call "next()" because error checking cycle is ending here.
//# sourceMappingURL=handleAllError.js.map