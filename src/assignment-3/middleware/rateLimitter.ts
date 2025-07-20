import { Request, Response, NextFunction } from "express";

const rateLimiter = (limit: number, window: number) => {
  const requests: Record<string, number[]> = {};

  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip;
    // console.log(ip, " -->> This is the of request URL.");

    if (!ip) {
      return res.status(400).json({ message: "Cannot identify IP address" });
    }

    const now = Date.now();

    if (!requests[ip]) {
      requests[ip] = [];
    }

    requests[ip] = requests[ip].filter(
      (timestamp: number) => now - timestamp < window
    );
    // console.log(requests[ip], "w will get something here !");

    if (requests[ip].length >= limit) {
      return res
        .status(429)
        .json({ message: "Too many requests. Please try again later." });
    }

    requests[ip].push(now);
    next();
  };
};

export default rateLimiter;
