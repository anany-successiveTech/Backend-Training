import { NextFunction, Request, Response } from "express";
import { HandleApiError, successResponse } from "../utils/responseHandler";
import realUserServices from "../service/assignment10/realUserService";

class RealUserController {
  createSignUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const signUpData = req.body;
      console.log(signUpData, "this is the incoming data");

      const result = await realUserServices.signUp(signUpData);

      return successResponse(res, "New user created successfully", result, 201);
    } catch (error : any) { 
      console.log("this is the error", error);

      next(new HandleApiError(403, error.message || "User signup failed"));
    }
  };

  createSignIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const signInData = req.body;
      const result = await realUserServices.signIn(signInData);

      return successResponse(res, "User logged in successfully", result, 200);
    } catch (error) {
      next(new HandleApiError(401, "Invalid email or password"));
    }
  };
}

const handleUser = new RealUserController();
export default handleUser;
