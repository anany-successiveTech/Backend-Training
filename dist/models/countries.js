"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ContriesSchema = new mongoose_1.default.Schema({
    country: {
        type: String,
        required: true,
        unique: true,
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
});
const Country = mongoose_1.default.model("Country", ContriesSchema);
exports.default = Country;
//# sourceMappingURL=countries.js.map