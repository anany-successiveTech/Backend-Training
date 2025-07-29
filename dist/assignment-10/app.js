"use strict";
// 1. Develop a register API for signup.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Implement an API for login.
// 3. Substitute the current authentication middleware with a real one.
const express_1 = __importDefault(require("express"));
const dynamicValidator_1 = require("../assignment-4/middleware/dynamicValidator");
const controller_10_1 = __importDefault(require("./controller-10"));
const dynamically = new dynamicValidator_1.Dynamically();
const userRouter = express_1.default.Router();
userRouter.post("/signup", dynamically.dynamicValidator, controller_10_1.default.createSignUp);
userRouter.post("/signin", dynamically.dynamicValidator, controller_10_1.default.createSignIn);
exports.default = userRouter;
//# sourceMappingURL=app.js.map