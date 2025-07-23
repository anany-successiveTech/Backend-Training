import { StatusCodes } from "http-status-codes";
import { successResponse, errorResponse } from "../../utils/responseHandler";
export const creatUser = (req, res) => {
    try {
        const userData = req.body;
        return successResponse(res, "User created successfully", userData, StatusCodes.CREATED);
    }
    catch (error) {
        return errorResponse(res, "Internal server error", error, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};
export const queriedData = (req, res) => {
    const { limit, page } = req.query;
    return successResponse(res, "Query parameters are valid", {
        limit: String(limit),
        page: String(page),
    });
};
export const accessFromLocation = (req, res) => {
    return successResponse(res, "Access granted. You are allowed based on your location.");
};
export const registerUser = (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = { name, email, password };
        return successResponse(res, "User registered successfully", user, StatusCodes.CREATED);
    }
    catch (error) {
        return errorResponse(res, "Failed to register user", error, StatusCodes.BAD_REQUEST);
    }
};
export const loginUser = (req, res) => {
    try {
        const { email, password } = req.body;
        const user = { email, password };
        return successResponse(res, "Login successful", user);
    }
    catch (error) {
        return errorResponse(res, "Login failed", error, StatusCodes.UNAUTHORIZED);
    }
};
//# sourceMappingURL=controller-4.js.map