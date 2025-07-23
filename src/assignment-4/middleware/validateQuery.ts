import { Request, Response, NextFunction } from "express";

export class ValidateIncomingQuery {
  validateQuery = (req: Request, res: Response, next: NextFunction) => {
    const { limit, page } = req.query;

    if (!limit || !page) {
      return res.status(400).json({
        error: "Please provide 'limit' and 'page' query parameters.",
      });
    }

    if (isNaN(Number(limit))) {
      return res.status(400).json({ error: "'limit' must be a number" });
    }

    if (isNaN(Number(page))) {
      return res.status(400).json({ error: "'page' must be a number" });
    }

    next();
  };
}
