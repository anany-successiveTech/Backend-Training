// 1. Establish a create API.

// 2. Implement a MongoDB create API.

// 3. Configure validations.

import express from "express"
import { CheckIncomingData } from "./checkData";
import { createSchema } from "./schema";
import carController from "./controller";

const createRouter = express.Router();
const validator = new CheckIncomingData();

createRouter.post("/create-api", validator.validateCreate(createSchema), carController.createCar);

export default createRouter;
