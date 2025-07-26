import { Request, Response, NextFunction } from "express";
import validationRules from "../validationRules";

export class Dynamically {
  dynamicValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
      const routePath = req.path;
      console.log("Route path ->>>>>>>>>>>>>>",routePath);

      const schema = validationRules[routePath];

      if (!schema) {
        return next();
      }

      const { error } = schema.validate(req.body);
      // console.log(error);

      if (error) {
        // console.log(error.message, "some error");
        return res.status(400).json({ error: error.message });
      }

      next();
    } catch (err) {
      next(err);
      return res.status(500).json({ error: "Validation middleware error" });
    }
  };
}
