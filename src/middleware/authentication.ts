// middleware/authenticationChecker.ts
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { HandleApiError } from "../utils/responseHandler";
import { UserRole } from "../interfaces/userInterfaces"; // Adjust the path as needed

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

interface DecodedToken {
  id: number;
  role: UserRole.Admin|UserRole.User;
  email: string;
}
interface ITokenRequest extends Request {
  user?: DecodedToken;
}

export const authenticationChecker = (
  req: ITokenRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(
        new HandleApiError(401, "Authorization failed or token not found!")
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

    if (!decoded || !decoded.id || !decoded.role) {
      return next(new HandleApiError(401, "Invalid token payload"));
    }

    // Here we jabardasti added user object to the req object;
    req.user = {
      id: decoded.id,
      role: decoded.role,
      email: decoded.email,
    };

    next();
  } catch (error) {
    return next(new HandleApiError(401, "Unauthorized access"));
  }
};
