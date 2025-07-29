"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIncomingData = void 0;
class CheckIncomingData {
    constructor() {
        this.validateCreate = (createSchema) => {
            return (req, res, next) => {
                const { error } = createSchema.validate(req.body);
                console.log(error, "Joi's material in return");
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
exports.CheckIncomingData = CheckIncomingData;
//# sourceMappingURL=checkData.js.map