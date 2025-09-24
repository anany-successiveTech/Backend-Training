import { Request, Response, NextFunction } from "express";
import { successResponse, HandleApiError } from "../utils/responseHandler";
import { UserService } from "../service/assignment4/userServices";
import { User } from "../interfaces/userInterfaces";

// successResponse = (
//   res: Response,
//   message: string,
//   data: object = {},
//   statusCode: number = 200)


export class CheckUserController {
  checkUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const result = UserService.checkUser(userData);
      return successResponse(res, "User check successful", result, 200);
    } catch (error) {
      next(new HandleApiError(500, "User check failed"));
    }
  };
}

export class QueriedDataController {
  queriedData = (req: Request, res: Response, next: NextFunction) => {
    try {
      const limit = Number(req.query.limit);
      const page = Number(req.query.page);

      const result = UserService.handleQueryParams(
        limit as number | undefined,
        page as number | undefined
      );

      return successResponse(res, "Query parameters are valid", result);
    } catch (error) {
      next(new HandleApiError(400, "Invalid query parameters"));
    }
    //  console.log(`ending the respones`);
  };
}

export class AccessFromLocationController {
  accessFromLocation = (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = UserService.checkLocationAccess();
      return successResponse(res, result, {name:"Anany", age:23, currentAddress:"noida"});
    } catch (error) {
      next(new HandleApiError(500, "Failed to check location access"));
    }
  };
}

export class RegisterUserController {
  registerUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const result = UserService.registerUser(name, email, password);
      return successResponse(res, "User registered successfully", result, 201);
    } catch (error) {
      next(new HandleApiError(400, "User registration failed"));
    }
  };
}

export class LoginUserController {
  loginUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const result = UserService.loginUser(email, password);
      return successResponse(res, "Login successful", result);
    } catch (error) {
      next(new HandleApiError(400, "Login failed"));
    }
  };
}
