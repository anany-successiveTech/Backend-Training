import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export class ValidateIncomingUser {
  validateRequest = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);

      if (error) {
        return res.status(400).json({
          message: "Invalid input. Please re-enter the values.",
          details: error.details[0].message,
        });
      }

      next();
    };
  };
}
