"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log(authHeader, "authentication data");
    if (!authHeader ||
        typeof authHeader !== "string" ||
        !authHeader.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ message: "Unauthorized: Missing or malformed token" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        // console.log(decoded, "checking the data");
        if (!decoded || !decoded.email) {
            return res
                .status(401)
                .json({ message: "Unauthorized: Invalid token structure" });
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        next(error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map