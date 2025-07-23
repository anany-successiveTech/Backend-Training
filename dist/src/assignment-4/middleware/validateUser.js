"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateIncomingUser = void 0;
class ValidateIncomingUser {
    constructor() {
        this.validateRequest = (schema) => {
            return (req, res, next) => {
                const { error } = schema.validate(req.body);
                if (error) {
                    return res.status(400).json({
                        message: "Invalid input. Please re-enter the values.",
                        details: error.details[0].message,
                    });
                }
                next();
            };
        };
    }
}
exports.ValidateIncomingUser = ValidateIncomingUser;
//# sourceMappingURL=validateUser.js.map