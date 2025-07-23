"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = require("express-rate-limit");
const rateLimitMiddleware = (0, express_rate_limit_1.rateLimit)({
    windowMs: 60 * 1000, // 1 minute me it will allow 100 requests only.
    limit: 100,
    message: {
        success: false,
        message: "Too many requests, please try again later.",
    },
});
const applyRateLimiter = (req, res, next) => {
    return rateLimitMiddleware(req, res, next);
};
exports.default = applyRateLimiter;
//# sourceMappingURL=rateLimitter.js.map