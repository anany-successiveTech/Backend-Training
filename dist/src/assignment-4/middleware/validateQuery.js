"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateIncomingQuery = void 0;
class ValidateIncomingQuery {
    constructor() {
        this.validateQuery = (req, res, next) => {
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
    }
}
exports.ValidateIncomingQuery = ValidateIncomingQuery;
//# sourceMappingURL=validateQuery.js.map