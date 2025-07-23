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
const validateUser_js_1 = require("./middleware/validateUser.js");
const controller_4_js_1 = require("./controller-4.js");
const validateGeolocation_js_1 = require("./middleware/validateGeolocation.js");
const dynamicValidator_js_1 = require("./middleware/dynamicValidator.js");
const validateQuery_js_1 = require("./middleware/validateQuery.js");
const validateRouter = express_1.default.Router();
const loginUserController = new controller_4_js_1.LoginUserController();
const checkUserController = new controller_4_js_1.CheckUserController();
const accessFromLocationController = new controller_4_js_1.AccessFromLocationController();
const registerUserController = new controller_4_js_1.RegisterUserController();
const queriedDataController = new controller_4_js_1.QueriedDataController();
const validateLocation = new validateGeolocation_js_1.ValidateLocation();
const dynamically = new dynamicValidator_js_1.Dynamically();
const validateQuery = new validateQuery_js_1.ValidateIncomingQuery();
const validateUser = new validateUser_js_1.ValidateIncomingUser();
validateRouter.post("/check-user", validateUser.validateRequest(userSchema_js_1.userSchema), checkUserController.checkUser);
validateRouter.get("/check-location", validateLocation.validateLocation, accessFromLocationController.accessFromLocation);
validateRouter.get("/check-query", validateQuery.validateQuery, queriedDataController.queriedData);
validateRouter.post("/register", dynamically.dynamicValidator, registerUserController.registerUser);
validateRouter.post("/check-login", dynamically.dynamicValidator, loginUserController.loginUser);
exports.default = validateRouter;
//# sourceMappingURL=app.js.map