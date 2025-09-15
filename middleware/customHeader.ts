import { Request, Response, NextFunction } from "express";

const customHeader = (headerName: string, headerValue: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader(headerName, headerValue);
    next();
  };
};

export default customHeader;
