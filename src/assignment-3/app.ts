// 7. Integrate the authentication middleware with the previously created APIs.

// 8. Adhere to the specified directory structure.

// 9. Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.

// 11.Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.

import express from "express";
import { AuthController, DataController } from "./controller-3";
import { AuthMiddleware } from "./middleware/authMiddleware";
import { RateLimiter } from "./middleware/rateLimitter";


const seedDataRouter = express.Router();
const authController = new AuthController();
const dataController = new DataController();
const authMiddleware = new AuthMiddleware();
const requestRatelimiter = new RateLimiter();

seedDataRouter.post("/login", authController.login);
seedDataRouter.post(
  "/seedUser",
  requestRatelimiter.applyRateLimiter ,
  authMiddleware.authenticateUser,
  dataController.seedData
); // this will only allow 5 request in 1-min.

export default seedDataRouter;
