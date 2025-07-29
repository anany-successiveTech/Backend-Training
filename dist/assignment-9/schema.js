"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createSchema = joi_1.default.object({
    carModel: joi_1.default.string().min(4).max(30).required(),
    price: joi_1.default.number().min(5).max(7).required(),
    owner: joi_1.default.string().min(4).max(30).required(),
});
//# sourceMappingURL=schema.js.map