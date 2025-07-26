import { NextFunction, Request, Response } from "express";
import errorMessages from "../utils/errorMessage";
import { HandleApiError } from "../utils/responseHandler";

const handleGlobalError = (
  err: HandleApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message =
    err.message || errorMessages[statusCode] || "Unexpected error";
  console.error(err.stack);
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};
export default handleGlobalError;
// Sometime if we don't export the "TypeScript" treated file we'll face ts red squiggly.
// Like here i have already write something : Record<number, string>  to "errorMessage" coming from utils.
// next(err) pass error in just previous middleware
// here we don't need to call "next()" because error checking cycle is ending here.
