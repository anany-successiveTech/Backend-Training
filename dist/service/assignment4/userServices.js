"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
class UserService {
    static checkUser(userData) {
        return {
            isValid: true,
            user: {
                name: userData.name,
                email: userData.email,
            },
        };
    }
    static handleQueryParams(limit, page) {
        return {
            limit: limit,
            page: page,
        };
    }
    static checkLocationAccess() {
        return "Access granted. You are allowed based on your location.";
    }
    static registerUser(name, email, password) {
        // db interaction is to be entered here (create).
        return {
            id: 1,
            name,
            email,
            password,
            message: "User registered successfully",
        };
    }
    static loginUser(email, password) {
        const token = jsonwebtoken_1.default.sign({ email, password }, JWT_SECRET, { expiresIn: '1hr' });
        return {
            email,
            password,
            token: token,
            message: "Login successful",
        };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userServices.js.map