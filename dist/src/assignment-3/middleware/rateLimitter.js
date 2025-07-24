"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiter = void 0;
const express_rate_limit_1 = require("express-rate-limit");
class RateLimiter {
    constructor() {
        this.applyRateLimiter = (req, res, next) => {
            console.log("⚡ Rate limiter triggered for:", req.ip);
            return this.rateLimiter(req, res, next);
        };
        this.rateLimiter = (0, express_rate_limit_1.rateLimit)({
            windowMs: 60 * 1000, // we are only allowing 100 request in 1-min.
            limit: 5,
            message: {
                success: false,
                message: "Too many requests, please try again later.",
            },
        });
    }
}
exports.RateLimiter = RateLimiter;
//# sourceMappingURL=rateLimitter.js.map