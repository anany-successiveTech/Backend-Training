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
const userSchema_1 = require("./userSchema");
const validateUser_1 = require("./middleware/validateUser");
const controller_4_1 = __importDefault(require("./controller-4"));
const validateGeolocation_1 = require("./middleware/validateGeolocation");
const dynamicValidator_1 = require("./middleware/dynamicValidator");
const validateQuery_1 = require("./middleware/validateQuery");
const rateLimitter_1 = require("../assignment-3/middleware/rateLimitter");
const validateRouter = express_1.default.Router();
/*
    Structure ->>>
    router.(
    "end-point",
    extra-checks ->> (rate-limitting, requestLogging from index.ts, etc.)
     Middleware,
     Controller
    )
*/
const validateLocation = new validateGeolocation_1.ValidateLocation();
const dynamically = new dynamicValidator_1.Dynamically();
const validateQuery = new validateQuery_1.ValidateIncomingQuery();
const validateUser = new validateUser_1.ValidateIncomingUser();
const rateLimitting = new rateLimitter_1.RateLimiter();
validateRouter.post("/check-user", validateUser.validateRequest(userSchema_1.userSchema), controller_4_1.default.checkUser);
validateRouter.get("/check-location", validateLocation.validateLocation, controller_4_1.default.accessFromLocation);
validateRouter.get("/check-query", validateQuery.validateQuery, controller_4_1.default.queriedData);
validateRouter.post("/register", dynamically.dynamicValidator, controller_4_1.default.registerUser);
validateRouter.post("/check-login", rateLimitting.applyRateLimiter, dynamically.dynamicValidator, controller_4_1.default.loginUser);
exports.default = validateRouter;
//# sourceMappingURL=app.js.map