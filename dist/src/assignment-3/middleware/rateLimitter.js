const rateLimiter = (limit, window) => {
    const requests = {};
    return (req, res, next) => {
        const ip = req.ip;
        console.log(ip, " -->> This is the of request URL.");
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
    };
};
export default rateLimiter;
//# sourceMappingURL=rateLimitter.js.map