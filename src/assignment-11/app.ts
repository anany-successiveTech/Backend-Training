// 1. Integrate roles into user profiles.

// 2. Implement role-based checks on the existing API.

import express from "express";
import { roleAccess } from "../middleware/accessMiddleware";
import carController from "../assignment-9/controller";
import { CheckIncomingData } from "../assignment-9/checkData";
import { createSchema } from "../assignment-9/schema";

const validator = new CheckIncomingData();

const roleRouter = express.Router();

roleRouter.post("/create-car", validator.validateCreate(createSchema), carController.createCar);
roleRouter.put("/edit-car", roleAccess("admin"), carController.updateCar);

export default roleRouter;




