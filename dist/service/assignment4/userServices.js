"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
class UserService {
    checkUser(userData) {
        return {
            isValid: true,
            user: {
                name: userData.name,
                email: userData.email,
            },
        };
    }
    handleQueryParams(limit, page) {
        return {
            limit: limit !== null && limit !== void 0 ? limit : 10,
            page: page !== null && page !== void 0 ? page : 1,
        };
    }
    checkLocationAccess() {
        return "Access granted. You are allowed based on your location.";
    }
    registerUser(name, email, password) {
        return {
            id: 1,
            name,
            email,
            password,
            message: "User registered successfully",
        };
    }
    loginUser(email, password) {
        const token = jsonwebtoken_1.default.sign({ email, password }, JWT_SECRET, {
            expiresIn: "1h",
        });
        return {
            email,
            password,
            token,
            message: "Login successful",
        };
    }
}
const UserServices = new UserService();
exports.default = UserServices;
//# sourceMappingURL=userServices.js.map