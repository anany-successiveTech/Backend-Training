import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export const successResponse = (
  res: Response,
  message: string,
  data: object = {},
  statusCode: number = StatusCodes.OK
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  error: any = {}, // Here i have to give any, it was creating bugs with some controllers.
  statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
) => {
  const errMsg = error?.message || String(error);

  return res.status(statusCode).json({
    success: false,
    message,
    error: {
      message: errMsg,
    },
  });
};
