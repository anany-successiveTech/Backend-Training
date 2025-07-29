"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const responseHandler_1 = require("../utils/responseHandler");
const userServices_1 = __importDefault(require("../service/assignment4/userServices"));
// successResponse = (
//   res: Response,
//   message: string,
//   data: object = {},
//   statusCode: number = 200)
class UserController {
    constructor() {
        this.checkUser = (req, res, next) => {
            try {
                const userData = req.body;
                const result = userServices_1.default.checkUser(userData);
                return (0, responseHandler_1.successResponse)(res, "User check successful", result, 200);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(500, "User check failed"));
            }
        };
        this.queriedData = (req, res, next) => {
            try {
                const limit = Number(req.query.limit);
                const page = Number(req.query.page);
                const result = userServices_1.default.handleQueryParams(limit, page);
                return (0, responseHandler_1.successResponse)(res, "Query parameters are valid", result);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "Invalid query parameters"));
            }
        };
        this.accessFromLocation = (req, res, next) => {
            try {
                const result = userServices_1.default.checkLocationAccess();
                return (0, responseHandler_1.successResponse)(res, result, {
                    name: "Anany",
                    age: 23,
                    currentAddress: "Noida",
                });
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(500, "Failed to check location access"));
            }
        };
        this.registerUser = (req, res, next) => {
            try {
                const { name, email, password } = req.body;
                const result = userServices_1.default.registerUser(name, email, password);
                return (0, responseHandler_1.successResponse)(res, "User registered successfully", result, 201);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "User registration failed"));
            }
        };
        this.loginUser = (req, res, next) => {
            try {
                const { email, password } = req.body;
                const result = userServices_1.default.loginUser(email, password);
                return (0, responseHandler_1.successResponse)(res, "Login successful", result);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "Login failed"));
            }
        };
    }
}
exports.UserController = UserController;
const UserMethods = new UserController();
exports.default = UserMethods;
//# sourceMappingURL=controller-4.js.map