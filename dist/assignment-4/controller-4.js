"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = exports.RegisterUserController = exports.AccessFromLocationController = exports.QueriedDataController = exports.CheckUserController = void 0;
const responseHandler_1 = require("../utils/responseHandler");
const userServices_1 = require("../service/assignment4/userServices");
// successResponse = (
//   res: Response,
//   message: string,
//   data: object = {},
//   statusCode: number = 200)
class CheckUserController {
    constructor() {
        this.checkUser = (req, res, next) => {
            try {
                const userData = req.body;
                const result = userServices_1.UserService.checkUser(userData);
                return (0, responseHandler_1.successResponse)(res, "User check successful", result, 200);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(500, "User check failed"));
            }
        };
    }
}
exports.CheckUserController = CheckUserController;
class QueriedDataController {
    constructor() {
        this.queriedData = (req, res, next) => {
            try {
                const limit = Number(req.query.limit);
                const page = Number(req.query.page);
                const result = userServices_1.UserService.handleQueryParams(limit, page);
                return (0, responseHandler_1.successResponse)(res, "Query parameters are valid", result);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "Invalid query parameters"));
            }
            //  console.log(`ending the respones`);
        };
    }
}
exports.QueriedDataController = QueriedDataController;
class AccessFromLocationController {
    constructor() {
        this.accessFromLocation = (req, res, next) => {
            try {
                const result = userServices_1.UserService.checkLocationAccess();
                return (0, responseHandler_1.successResponse)(res, result, { name: "Anany", age: 23, currentAddress: "noida" });
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(500, "Failed to check location access"));
            }
        };
    }
}
exports.AccessFromLocationController = AccessFromLocationController;
class RegisterUserController {
    constructor() {
        this.registerUser = (req, res, next) => {
            try {
                const { name, email, password } = req.body;
                const result = userServices_1.UserService.registerUser(name, email, password);
                return (0, responseHandler_1.successResponse)(res, "User registered successfully", result, 201);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "User registration failed"));
            }
        };
    }
}
exports.RegisterUserController = RegisterUserController;
class LoginUserController {
    constructor() {
        this.loginUser = (req, res, next) => {
            try {
                const { email, password } = req.body;
                const result = userServices_1.UserService.loginUser(email, password);
                return (0, responseHandler_1.successResponse)(res, "Login successful", result);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "Login failed"));
            }
        };
    }
}
exports.LoginUserController = LoginUserController;
//# sourceMappingURL=controller-4.js.map