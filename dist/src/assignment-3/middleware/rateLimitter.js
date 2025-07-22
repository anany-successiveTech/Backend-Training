const rateLimiter = (limit, window) => {
    const requests = {};
    return (req, res, next) => {
        try {
            const ip = req.ip;
            if (!ip) {
                return res.status(400).json({ message: "Cannot identify IP address" });
            }
            const now = Date.now();
            if (!requests[ip]) {
                requests[ip] = [];
            }
            requests[ip] = requests[ip].filter((timestamp) => now - timestamp < window);
            if (requests[ip].length >= limit) {
                return res
                    .status(429)
                    .json({ message: "Too many requests. Please try again later." });
            }
            requests[ip].push(now);
            next();
        }
        catch (error) {
            console.error("Rate Limiter Error:", error.message);
            next(error);
            return res.status(500).json({
                message: "Internal server error in rate limiter",
            });
        }
    };
};
export default rateLimiter;
//# sourceMappingURL=rateLimitter.js.map