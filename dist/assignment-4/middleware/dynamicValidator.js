"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dynamically = void 0;
const validationRules_1 = __importDefault(require("../validationRules"));
class Dynamically {
    constructor() {
        this.dynamicValidator = (req, res, next) => {
            try {
                const routePath = req.path;
                // console.log(routePath);
                const schema = validationRules_1.default[routePath];
                if (!schema) {
                    return next();
                }
                const { error } = schema.validate(req.body);
                // console.log(error);
                if (error) {
                    console.log(error.message, "some error");
                    return res.status(400).json({ error: error.message });
                }
                next();
            }
            catch (err) {
                next(err);
                return res.status(500).json({ error: "Validation middleware error" });
            }
        };
    }
}
exports.Dynamically = Dynamically;
//# sourceMappingURL=dynamicValidator.js.map