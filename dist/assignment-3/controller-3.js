"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = exports.AuthController = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const http_status_codes_1 = require("http-status-codes");
const responseHandler_1 = require("../utils/responseHandler");
const userDataService_1 = require("../service/assignment3/userDataService");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
class AuthController {
    constructor() {
        this.login = (req, res, next) => {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return next(new responseHandler_1.HandleApiError(400, "Inputs are not valid"));
                }
                const isValid = userDataService_1.AuthService.validateUserCredentials(email, password);
                if (!isValid) {
                    return next(new responseHandler_1.HandleApiError(401, "Unauthorized"));
                }
                const token = userDataService_1.AuthService.generateToken(JWT_SECRET);
                return (0, responseHandler_1.successResponse)(res, "Login successful", { token }, http_status_codes_1.StatusCodes.OK);
            }
            catch (error) {
                console.error("Login Error:", error);
                next(new responseHandler_1.HandleApiError(404, "User Not found"));
            }
        };
    }
}
exports.AuthController = AuthController;
class DataController {
    constructor() {
        this.seedData = (req, res, next) => {
            try {
                const { generateLimit } = req.body;
                if (!generateLimit) {
                    return next(new responseHandler_1.HandleApiError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Missing limit"));
                }
                const limit = Number(generateLimit);
                if (isNaN(limit) || limit < 1 || limit > 100) {
                    return next(new responseHandler_1.HandleApiError(400, "Send valid input between 1 to 100"));
                }
                const result = userDataService_1.DataService.generateRandomUsers(limit);
                return (0, responseHandler_1.successResponse)(res, result.message, result, http_status_codes_1.StatusCodes.OK);
            }
            catch (error) {
                console.error("Seeding Error:", error);
                next(new responseHandler_1.HandleApiError(500, "Internal Server Error"));
            }
        };
    }
}
exports.DataController = DataController;
//# sourceMappingURL=controller-3.js.map