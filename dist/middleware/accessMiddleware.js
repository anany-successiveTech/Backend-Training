"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleAccess = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const responseHandler_1 = require("../utils/responseHandler");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const roleAccess = (...allowedRoles) => {
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return next(new responseHandler_1.HandleApiError(401, "Authorization token missing"));
            }
            const token = authHeader.split(" ")[1];
            const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            if (!decoded || !allowedRoles.includes(decoded.role)) {
                return next(new responseHandler_1.HandleApiError(403, "Access denied"));
            }
            next();
        }
        catch (error) {
            return next(new responseHandler_1.HandleApiError(401, "Invalid or expired token"));
        }
    };
};
exports.roleAccess = roleAccess;
//# sourceMappingURL=accessMiddleware.js.map