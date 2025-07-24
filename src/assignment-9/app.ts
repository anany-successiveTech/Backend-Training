// 1. Establish a create API.

// 2. Implement a MongoDB create API.

// 3. Configure validations.

// controllers/CreateCarController.ts
import express, { Request, Response, NextFunction } from "express";
import Car from "../models/car";
import { successResponse, HandleApiError } from "../utils/responseHandler";
import { CheckIncomingData } from "./checkData"
import { createSchema } from "./schema"

const createRouter = express.Router();
const validator = new CheckIncomingData();

createRouter.post(
  "/create-api",
  validator.validateCreate(createSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newCar = req.body;
      const savedCar = await Car.create(newCar);

      return successResponse(res, "Car created successfully", savedCar, 201);
    } catch (error) {
      next(new HandleApiError(500, "Failed to create car"));
    }
  }
);

export default createRouter;

