"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationChecker = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const responseHandler_1 = require("../utils/responseHandler");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const authenticationChecker = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return next(new responseHandler_1.HandleApiError(401, "Authorization failed or token not found!"));
        }
        const token = authHeader.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        if (!decoded || !decoded.id || !decoded.role) {
            return next(new responseHandler_1.HandleApiError(401, "Invalid token payload"));
        }
        // Here we jabardasti added user object to the req object;
        req.user = {
            id: decoded.id,
            role: decoded.role,
            email: decoded.email,
        };
        next();
    }
    catch (error) {
        return next(new responseHandler_1.HandleApiError(401, "Unauthorized access"));
    }
};
exports.authenticationChecker = authenticationChecker;
//# sourceMappingURL=authentication.js.map