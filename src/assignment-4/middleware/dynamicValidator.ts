import { Request, Response, NextFunction } from "express";
import validationRules from "../validationRules.js";

const dynamicValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    const routePath = req.path;
    const schema = validationRules[routePath];

    if (!schema) {
      return next();
    }

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    next();
  } catch (err) {
    return res.status(500).json({ error: "Validation middleware error" });
  }
};

export default dynamicValidator;
