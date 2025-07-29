"use strict";
// 1. Integrate roles into user profiles.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Implement role-based checks on the existing API.
const express_1 = __importDefault(require("express"));
const accessMiddleware_1 = require("../middleware/accessMiddleware");
const controller8_1 = __importDefault(require("../assignment-8/controller8"));
// import { Dynamically } from "../assignment-4/middleware/dynamicValidator";
// const dynamically = new Dynamically();
const roleRouter = express_1.default.Router();
roleRouter.get("/giveData", (0, accessMiddleware_1.roleAccess)('user'), controller8_1.default.seedCountry);
exports.default = roleRouter;
//# sourceMappingURL=app.js.map