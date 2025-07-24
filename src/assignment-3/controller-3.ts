import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import { successResponse, HandleApiError } from "../utils/responseHandler";
import { AuthService, DataService } from "../service/assignment3/userDataService";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export class AuthController {
  login = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new HandleApiError(400, "Inputs are not valid"));
      }

      const isValid = AuthService.validateUserCredentials(email, password);

      if (!isValid) {
        return next(new HandleApiError(401, "Unauthorized"));
      }

      const token = AuthService.generateToken(JWT_SECRET);

      return successResponse(res, "Login successful", { token }, StatusCodes.OK);
    } catch (error) {
      console.error("Login Error:", error);
      next(new HandleApiError(404, "User Not found"));
    }
  };
}

export class DataController {
  seedData = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { generateLimit } = req.body;

      if (!generateLimit) {
        return next(new HandleApiError(StatusCodes.BAD_REQUEST, "Missing limit"));
      }

      const limit = Number(generateLimit);

      if (isNaN(limit) || limit < 1 || limit > 100) {
        return next(new HandleApiError(400, "Send valid input between 1 to 100"));
      }

      const result = DataService.generateRandomUsers(limit);

      return successResponse(res, result.message, result, StatusCodes.OK);
    } catch (error) {
      console.error("Seeding Error:", error);
      next(new HandleApiError(500, "Internal Server Error"));
    }
  };
}
