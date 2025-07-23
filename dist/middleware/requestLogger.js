const requestLogger = (req, res, next) => {
    const { url, method } = req;
    console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);
    next();
};
export default requestLogger;
//# sourceMappingURL=requestLogger.js.map