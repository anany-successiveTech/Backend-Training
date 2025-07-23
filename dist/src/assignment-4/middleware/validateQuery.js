"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateQuery = (req, res, next) => {
    const { limit, page } = req.query;
    if (!limit || !page) {
        return res.status(400).json({
            error: "Please provide 'limit' and 'page' query parameters.",
        });
    }
    if (isNaN(Number(limit))) {
        return res.status(400).json({ error: "'limit' must be a number" });
    }
    if (isNaN(Number(page))) {
        return res.status(400).json({ error: "'page' must be a number" });
    }
    next();
};
exports.default = validateQuery;
//# sourceMappingURL=validateQuery.js.map