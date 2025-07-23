import { Request, Response, NextFunction } from "express";
import validationRules from "../validationRules.js";

export class Dynamically {
  dynamicValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
      const routePath = req.path;
      // console.log(routePath);

      const schema = validationRules[routePath];

      if (!schema) {
        return next();
      }

      const { error } = schema.validate(req.body);
      // console.log(error);

      if (error) {
        console.log(error.details[0].message, "some error");

        return res.status(400).json({ error: error.details[0].message });
      }

      next();
    } catch (err) {
      next(err);
      return res.status(500).json({ error: "Validation middleware error" });
    }
  };
}
