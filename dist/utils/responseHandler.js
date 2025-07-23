"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.HandleApiError = exports.successResponse = exports.HandleApiResponse = void 0;
class HandleApiResponse extends Response {
    constructor(status, message) {
        super(message);
        this.statusCode = status;
    }
}
exports.HandleApiResponse = HandleApiResponse;
const successResponse = (res, message, data = {}, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
exports.successResponse = successResponse;
class HandleApiError extends Error {
    constructor(status, message) {
        super(message);
        this.statusCode = status;
    }
}
exports.HandleApiError = HandleApiError;
const errorResponse = (res, message, error, statusCode = error.statusCode || 500) => {
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) || String(error);
    return res.status(statusCode).json({
        success: false,
        message,
        error: {
            message: errorMessage,
        },
    });
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=responseHandler.js.map