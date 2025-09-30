import { Request, Response, NextFunction } from "express";
import { rateLimit } from "express-rate-limit";

export class RateLimiter {
  private rateLimiter;

  constructor() {
    this.rateLimiter = rateLimit({
      windowMs: 60 * 1000, // we are only allowing 100 request in 1-min.
      limit: 5, 
      message: {
        success: false,
        message: "Too many requests, please try again later.",
      },
    });
  }

  applyRateLimiter = (req: Request, res: Response, next: NextFunction) => {
    console.log("⚡ Rate limiter triggered for:", req.ip);
    return this.rateLimiter(req, res, next);
  };
}