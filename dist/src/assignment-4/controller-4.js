"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = exports.accessFromLocation = exports.queriedData = exports.creatUser = void 0;
// import { StatusCodes } from "http-status-codes";
const responseHandler_1 = require("../../utils/responseHandler");
const creatUser = (req, res, next) => {
    try {
        const userData = req.body;
        return (0, responseHandler_1.successResponse)(res, "User created successfully", userData, 201);
    }
    catch (error) {
        next(new responseHandler_1.HandleApiError(500, "User failed"));
    }
};
exports.creatUser = creatUser;
const queriedData = (req, res) => {
    const { limit, page } = req.query;
    return (0, responseHandler_1.successResponse)(res, "Query parameters are valid", {
        limit: String(limit),
        page: String(page),
    });
};
exports.queriedData = queriedData;
const accessFromLocation = (req, res) => {
    return (0, responseHandler_1.successResponse)(res, "Access granted. You are allowed based on your location.");
};
exports.accessFromLocation = accessFromLocation;
const registerUser = (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = { name, email, password };
        return (0, responseHandler_1.successResponse)(res, "User registered successfully", user, 201);
    }
    catch (error) {
        next(new responseHandler_1.HandleApiError(400, "Bad request"));
    }
};
exports.registerUser = registerUser;
const loginUser = (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = { email, password };
        return (0, responseHandler_1.successResponse)(res, "Login successful", user);
    }
    catch (error) {
        next(new responseHandler_1.HandleApiError(400, "Bad request"));
    }
};
exports.loginUser = loginUser;
//# sourceMappingURL=controller-4.js.map