// 7. Integrate the authentication middleware with the previously created APIs.

// 8. Adhere to the specified directory structure.

// 9. Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.

// 11.Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.

import express from "express";
import { login, seedData } from "./controller-3.js";
import requestLogger from "../../middleware/requestLogger.js";
import authMiddleware from "./middleware/authMiddleware.js";
import rateLimiter from "./middleware/rateLimitter.js";

const seedDataRouter = express.Router();

seedDataRouter.post("/login", login);
seedDataRouter.post("/seedUser", rateLimiter(5, 60000), authMiddleware, seedData); // this will only allow 5 request in 1-min.

export default seedDataRouter;
