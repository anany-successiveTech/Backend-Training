"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validationRules = {
    "/signup": joi_1.default.object({
        firstName: joi_1.default.string()
            .trim()
            .min(2)
            .max(50)
            .required()
            .messages({
            "string.empty": "First name is required",
            "string.min": "First name must be at least 2 characters",
        }),
        lastName: joi_1.default.string()
            .trim()
            .min(2)
            .max(50)
            .required()
            .messages({
            "string.empty": "Last name is required",
            "string.min": "Last name must be at least 2 characters",
        }),
        email: joi_1.default.string()
            .email()
            .required()
            .messages({
            "string.email": "Please enter a valid email address",
            "any.required": "Email is required",
        }),
        password: joi_1.default.string()
            .min(6)
            .max(12)
            .required()
            .messages({
            "string.min": "Password must be at least 6 characters",
            "string.max": "Password cannot exceed 12 characters",
        }),
        role: joi_1.default.string()
            .valid("admin", "user", "support")
            .required()
            .messages({
            "any.only": "Role must be (admin, user, support)."
        })
    }),
    "/signin": joi_1.default.object({
        email: joi_1.default.string()
            .email()
            .required()
            .messages({
            "string.email": "Please enter a valid email address",
            "any.required": "Email is required",
        }),
        password: joi_1.default.string()
            .required()
            .messages({
            "string.empty": "Password is required",
        }),
    }),
};
exports.default = validationRules;
//# sourceMappingURL=validationRules.js.map