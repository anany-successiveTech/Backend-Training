import { StatusCodes } from "http-status-codes";
export const successResponse = (res, message, data = {}, statusCode = StatusCodes.OK) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
export const errorResponse = (res, message, error = {}, // Here i have to give any, it was creating bugs with some controllers.
statusCode = StatusCodes.INTERNAL_SERVER_ERROR) => {
    const errMsg = (error === null || error === void 0 ? void 0 : error.message) || String(error);
    return res.status(statusCode).json({
        success: false,
        message,
        error: {
            message: errMsg,
        },
    });
};
//# sourceMappingURL=responseHandler.js.map