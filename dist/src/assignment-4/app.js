// 2. Incorporate the validation middleware with the previously developed API.
// 5.Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided, respond with an appropriate error message.
// 6.Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.
// 7.User Build a validation middleware that dynamically fetches validation rules from a configuration file. The rules should be applied based on the route being accessed.
import express from "express";
import { userSchema } from "./userSchema.js";
import validateRequest from "./middleware/validateUser.js";
import { accessFromLocation, creatUser, loginUser, queriedData, registerUser, } from "./controller-4.js";
import validateQuery from "./middleware/validateQuery.js";
import validateLocation from "./middleware/validateGeolocation.js";
import dynamicValidator from "./middleware/dynamicValidator.js";
const validateRouter = express.Router();
validateRouter.post("/check-user", validateRequest(userSchema), creatUser);
validateRouter.get("/check-location", validateLocation, accessFromLocation);
validateRouter.get("/check-query", validateQuery, queriedData);
validateRouter.post("/register", dynamicValidator, registerUser);
validateRouter.post("/check-login", dynamicValidator, loginUser);
export default validateRouter;
//# sourceMappingURL=app.js.map