import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export class CheckIncomingData {
  validateCreate = (createSchema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = createSchema.validate(req.body);
      console.log(error, "Joi's material in return");
      

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
