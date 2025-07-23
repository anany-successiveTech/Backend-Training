import { NextFunction, Request, Response } from "express";
import { successResponse, HandleApiError } from "../../utils/responseHandler";


export class CheckUserController {
  checkUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      return successResponse(res, "User check successful", userData, 200);
    } catch (error) {
      next(new HandleApiError(500, "User check failed"));
    }
  };
}

export class QueriedDataController {
  queriedData = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { limit, page } = req.query;

      return successResponse(res, "Query parameters are valid", {
        limit: String(limit),
        page: String(page),
      });
    } catch (error) {
      next(new HandleApiError(400, "Invalid query parameters"));
    }
  };
}

export class AccessFromLocationController {
  accessFromLocation = (req: Request, res: Response, next: NextFunction) => {
    try {
      return successResponse(
        res,
        "Access granted. You are allowed based on your location."
      );
    } catch (error) {
      next(new HandleApiError(500, "Failed to check location access"));
    }
  };
}

export class RegisterUserController   {
  registerUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const user = { name, email, password };
      return successResponse(res, "User registered successfully", user, 201);
    } catch (error) {
      next(new HandleApiError(400, "User registration failed"));
    }
  };
}

export class LoginUserController {
  loginUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = { email, password };
      return successResponse(res, "Login successful", user);
    } catch (error) {
      next(new HandleApiError(400, "Login failed"));
    }
  };
}
