"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = exports.RegisterUserController = exports.AccessFromLocationController = exports.QueriedDataController = exports.CheckUserController = void 0;
const responseHandler_1 = require("../../utils/responseHandler");
class CheckUserController {
    constructor() {
        this.checkUser = (req, res, next) => {
            try {
                const userData = req.body;
                return (0, responseHandler_1.successResponse)(res, "User check successful", userData, 200);
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
                const { limit, page } = req.query;
                return (0, responseHandler_1.successResponse)(res, "Query parameters are valid", {
                    limit: String(limit),
                    page: String(page),
                });
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "Invalid query parameters"));
            }
        };
    }
}
exports.QueriedDataController = QueriedDataController;
class AccessFromLocationController {
    constructor() {
        this.accessFromLocation = (req, res, next) => {
            try {
                return (0, responseHandler_1.successResponse)(res, "Access granted. You are allowed based on your location.");
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
                const user = { name, email, password };
                return (0, responseHandler_1.successResponse)(res, "User registered successfully", user, 201);
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
                const user = { email, password };
                return (0, responseHandler_1.successResponse)(res, "Login successful", user);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "Login failed"));
            }
        };
    }
}
exports.LoginUserController = LoginUserController;
//# sourceMappingURL=controller-4.js.map