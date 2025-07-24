import { NextFunction, Request, Response } from "express";


const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const { url, method } = req;
  console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);
  next();
};
export default requestLogger;
 