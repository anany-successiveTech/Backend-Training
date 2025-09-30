import { Request, Response, NextFunction } from "express";
import { successResponse, HandleApiError } from "../utils/responseHandler";
import  UserServices  from "../service/assignment4/userServices";
import { User } from "../interfaces/userInterfaces";

// successResponse = (
//   res: Response,
//   message: string,
//   data: object = {},
//   statusCode: number = 200)

export class UserController {
  checkUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const result = UserServices.checkUser(userData);
      return successResponse(res, "User check successful", result, 200);
    } catch (error) {
      next(new HandleApiError(500, "User check failed"));
    }
  };

  queriedData = (req: Request, res: Response, next: NextFunction) => {
    try {
      const limit = Number(req.query.limit);
      const page = Number(req.query.page);

      const result = UserServices.handleQueryParams(
        limit as number | undefined,
        page as number | undefined
      );

      return successResponse(res, "Query parameters are valid", result);
    } catch (error) {
      next(new HandleApiError(400, "Invalid query parameters"));
    }
  };

  accessFromLocation = (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = UserServices.checkLocationAccess();
      return successResponse(res, result, {
        name: "Anany",
        age: 23,
        currentAddress: "Noida",
      });
    } catch (error) {
      next(new HandleApiError(500, "Failed to check location access"));
    }
  };

  registerUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const result = UserServices.registerUser(name, email, password);
      return successResponse(res, "User registered successfully", result, 201);
    } catch (error) {
      next(new HandleApiError(400, "User registration failed"));
    }
  };

  loginUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const result = UserServices.loginUser(email, password);
      return successResponse(res, "Login successful", result);
    } catch (error) {
      next(new HandleApiError(400, "Login failed"));
    }
  };
}
const UserMethods = new UserController();
export default UserMethods;
