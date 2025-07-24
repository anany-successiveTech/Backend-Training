"use strict";
// 7. Integrate the authentication middleware with the previously created APIs.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 8. Adhere to the specified directory structure.
// 9. Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.
// 11.Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.
const express_1 = __importDefault(require("express"));
const controller_3_1 = require("./controller-3");
const authMiddleware_1 = require("./middleware/authMiddleware");
const rateLimitter_1 = require("./middleware/rateLimitter");
const seedDataRouter = express_1.default.Router();
const authController = new controller_3_1.AuthController();
const dataController = new controller_3_1.DataController();
const authMiddleware = new authMiddleware_1.AuthMiddleware();
const requestRatelimiter = new rateLimitter_1.RateLimiter();
seedDataRouter.post("/login", authController.login);
seedDataRouter.post("/seedUser", requestRatelimiter.applyRateLimiter, authMiddleware.authenticateUser, dataController.seedData); // this will only allow 5 request in 1-min.
exports.default = seedDataRouter;
//# sourceMappingURL=app.js.map