import errorMessages from "../utils/errorMessage";
const handleGlobalError = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || errorMessages[statusCode] || 'Unexpected error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
};
export default handleGlobalError;
// Sometime if we don't export the "TypeScript" treated file we'll face ts red squiggly.
// Like here i have already write something : Record<number, string>  to "errorMessage" coming from utils.
//# sourceMappingURL=errorHandling.js.map