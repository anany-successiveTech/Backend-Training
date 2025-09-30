import { Request, Response, NextFunction } from "express";
import Car from "../models/car";
import { successResponse, HandleApiError } from "../utils/responseHandler";

class CarController {
  updateCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const existingCar = req.body;
      console.log(existingCar);
      
      const savedCar = await Car.findOneAndUpdate({carModel: existingCar.carModel}, existingCar, {
        new:true,
        runValidators:true
      });
       console.log(existingCar);
      if (savedCar) {
        return successResponse(res, "Car's data updated successfully", savedCar, 201);
      }
      next(new HandleApiError(404, "Car not found"))
    } catch (error) {
      console.log(error, "getting error");
      
      next(new HandleApiError(500, "Failed to update car details!"));
    }
  };
 createCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newCar = req.body;
      const  createdCar = await Car.create(newCar);
      return successResponse(res, "Created your car's data", createdCar, 201);
    } catch (error) {
      next(new HandleApiError(400, "Bad request"))
    }
 };
};

const carController = new CarController();
export default carController