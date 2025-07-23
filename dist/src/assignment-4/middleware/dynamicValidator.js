"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validationRules_js_1 = __importDefault(require("../validationRules.js"));
const dynamicValidator = (req, res, next) => {
    try {
        const routePath = req.path;
        // console.log(routePath);
        const schema = validationRules_js_1.default[routePath];
        if (!schema) {
            return next();
        }
        const { error } = schema.validate(req.body);
        // console.log(error);
        if (error) {
            console.log(error.details[0].message, "some error");
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    }
    catch (err) {
        next(err);
        return res.status(500).json({ error: "Validation middleware error" });
    }
};
exports.default = dynamicValidator;
//# sourceMappingURL=dynamicValidator.js.map