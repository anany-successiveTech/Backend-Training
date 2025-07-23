"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = void 0;
const mockData_js_1 = __importDefault(require("./mockData.js"));
const getUserData = (req, res) => {
    return res.status(200).json(mockData_js_1.default);
};
exports.getUserData = getUserData;
//# sourceMappingURL=controller-2.js.map