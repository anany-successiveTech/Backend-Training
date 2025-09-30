// 2. Incorporate the validation middleware with the previously developed API.
// 5.Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided, respond with an appropriate error message.
// 6.Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.
// 7.User Build a validation middleware that dynamically fetches validation rules from a configuration file. The rules should be applied based on the route being accessed.

import express from "express";
import { userSchema } from "./userSchema";
import { ValidateIncomingUser } from "./middleware/validateUser";
import  UserMethods  from "./controller-4"
import { ValidateLocation } from "./middleware/validateGeolocation";
import { Dynamically } from "./middleware/dynamicValidator";
import { ValidateIncomingQuery } from "./middleware/validateQuery";
import { RateLimiter } from "../assignment-3/middleware/rateLimitter";

const validateRouter = express.Router();

/*
    Structure ->>>
    router.(
    "end-point",
    extra-checks ->> (rate-limitting, requestLogging from index.ts, etc.)
     Middleware,
     Controller
    )
*/

const validateLocation = new ValidateLocation();
const dynamically = new Dynamically();
const validateQuery = new ValidateIncomingQuery();
const validateUser = new ValidateIncomingUser();

const rateLimitting = new RateLimiter();

validateRouter.post(
  "/check-user",
  validateUser.validateRequest(userSchema),
  UserMethods.checkUser
);
validateRouter.get(
  "/check-location",
  validateLocation.validateLocation,
  UserMethods.accessFromLocation
);
validateRouter.get(
  "/check-query",
  validateQuery.validateQuery,
  UserMethods.queriedData
);
validateRouter.post(
  "/register",
  dynamically.dynamicValidator,
  UserMethods.registerUser
);
validateRouter.post(
  "/check-login",
  rateLimitting.applyRateLimiter,
  dynamically.dynamicValidator,
  UserMethods.loginUser
);

export default validateRouter;
