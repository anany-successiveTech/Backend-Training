"use strict";
// 2. Incorporate the validation middleware with the previously developed API.
// 5.Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided, respond with an appropriate error message.
// 6.Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.
// 7.User Build a validation middleware that dynamically fetches validation rules from a configuration file. The rules should be applied based on the route being accessed.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userSchema_js_1 = require("./userSchema.js");
const validateUser_js_1 = __importDefault(require("./middleware/validateUser.js"));
const controller_4_js_1 = require("./controller-4.js");
const validateQuery_js_1 = __importDefault(require("./middleware/validateQuery.js"));
const validateGeolocation_js_1 = __importDefault(require("./middleware/validateGeolocation.js"));
const dynamicValidator_js_1 = __importDefault(require("./middleware/dynamicValidator.js"));
const validateRouter = express_1.default.Router();
validateRouter.post("/check-user", (0, validateUser_js_1.default)(userSchema_js_1.userSchema), controller_4_js_1.creatUser);
validateRouter.get("/check-location", validateGeolocation_js_1.default, controller_4_js_1.accessFromLocation);
validateRouter.get("/check-query", validateQuery_js_1.default, controller_4_js_1.queriedData);
validateRouter.post("/register", dynamicValidator_js_1.default, controller_4_js_1.registerUser);
validateRouter.post("/check-login", dynamicValidator_js_1.default, controller_4_js_1.loginUser);
exports.default = validateRouter;
//# sourceMappingURL=app.js.map