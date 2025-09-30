import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { HandleApiError } from "../utils/responseHandler";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authenticationChecker = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(`Authorization header: ${authHeader}`);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new HandleApiError(401, "Authorization failed or token not found!"));
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded || typeof decoded !== "object") {
      return next(new HandleApiError(401, "Invalid token"));
    }
    if(decoded){
    console.log(`yes its found!`);

    }
    

    console.log("Token verified:", decoded);
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    return next(new HandleApiError(401, "Unauthorized access"));
  }
};
