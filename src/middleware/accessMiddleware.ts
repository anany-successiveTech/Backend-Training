// middleware/accessMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { HandleApiError } from "../utils/responseHandler";
import { UserRole } from "../interfaces/userInterfaces";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

interface DecodedToken extends JwtPayload {
  role: UserRole.Admin | UserRole.User;
}

export const roleAccess = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new HandleApiError(401, "Authorization token missing"));
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

      if (!decoded || !allowedRoles.includes(decoded.role)) {
        return next(new HandleApiError(403, "Access denied"));
      }

      next();
    } catch (error) {
      return next(new HandleApiError(401, "Invalid or expired token"));
    }
  };
};
