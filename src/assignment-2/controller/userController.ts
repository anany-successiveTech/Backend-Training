import mockDataList from "../mockData.js";
import { Request, Response } from "express";

export const getUserData = (req: Request, res: Response) => {
  res.status(200).json(mockDataList);
  
};
