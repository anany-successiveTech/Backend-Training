import { NextFunction, Request, Response } from "express";
import errorMessages from "../utils/errorMessage.js"

const handleGlobalError = (
  err: Error & { status?: number },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try{
    const statusCode = err.status || 500
    const message = err.message || errorMessages[statusCode] || 'Unexpected error' 
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
  }catch(error){
    return 
  }
    
};
export default handleGlobalError;
// Sometime if we don't export the "TypeScript" treated file we'll face ts red squiggly.
// Like here i have already write something : Record<number, string>  to "errorMessage" coming from utils.
// next(err) pass error in just previous middleware