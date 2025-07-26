import { Response } from "express";

export const successResponse = (
  res: Response,
  message: string,
  data: object = {},
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export class HandleApiError extends Error {
  statusCode: number;
  constructor(status: number, message: string) {
    super(message);
    this.statusCode = status;
  }
}

export const errorResponse = (
  res: Response,
  message: string,
  error: HandleApiError,
  statusCode: number = error.statusCode || 500
) => {
  const errorMessage = error?.message || String(error); // If there is an error it will return error, but it there is not error then it will return "undefined".

  return res.status(statusCode).json({
    success: false,
    message,
    error: {
      message: errorMessage,
    },
  });
};
