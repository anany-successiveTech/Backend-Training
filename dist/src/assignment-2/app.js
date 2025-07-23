"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_2_js_1 = require("./controller-2.js");
const userRouter = express_1.default.Router();
// This is my backend mock data get api it's a predefined data of some mock users.
userRouter.get("/data", controller_2_js_1.getUserData);
exports.default = userRouter;
//# sourceMappingURL=app.js.map