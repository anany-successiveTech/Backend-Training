"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateIncomingQuery = void 0;
class ValidateIncomingQuery {
    constructor() {
        this.validateQuery = (req, res, next) => {
            // console.log(`reached at the middleware!`);
            const { limit, page } = req.query;
            console.log(limit, page);
            if (!limit || !page) {
                return res.status(400).json({
                    error: "Please provide 'limit' and 'page' query in parameters.",
                });
            }
            if (isNaN(Number(limit))) {
                return res.status(400).json({ error: "'limit' must be a number" });
            }
            if (isNaN(Number(page))) {
                return res.status(400).json({ error: "'page' must be a number" });
            }
            next();
            // console.log(`Middleware ended`)
        };
    }
}
exports.ValidateIncomingQuery = ValidateIncomingQuery;
//# sourceMappingURL=validateQuery.js.map