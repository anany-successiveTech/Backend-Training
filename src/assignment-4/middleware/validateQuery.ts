import { log } from "console";
import { Request, Response, NextFunction } from "express";

export class ValidateIncomingQuery {
  validateQuery = (req: Request, res: Response, next: NextFunction) => {
    // console.log(`reached at the middleware!`);

    const { limit, page } = req.query;
    // console.log(limit, page);

    if (!limit || !page) {
      return res.status(400).json({
        error: "Please provide 'limit' and 'page' query in parameters.",
      });
    }

    if (isNaN(Number(limit))) {
      return res.status(400).json({ error: "'limit' must be a number" });
    }

    if (isNaN(Number(page))) {
      return res.status(400).json({ error: "'page' must be a number" });
    }
    next();
    // console.log(`Middleware ended`)
  };
}
