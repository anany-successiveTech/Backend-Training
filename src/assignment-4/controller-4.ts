import { Request, Response } from "express";

export const creatUser = (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // Here we perform db logics but for now i am returning the userdata in response back to the client {postman}.
    return res.status(201).json({
      message: "User created successfully",
      user: userData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const queriedData = (req: Request, res: Response) => {
  const { limit, page } = req.query;

  res.json({
    message: "Query parameters are valid",
    limit,
    page,
  });
};

export const accessFromLocation = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Access granted. You are allowed based on your location.",
  });
};

export const registerUser = (req: Request, res: Response) => {
  res.status(201).json({
    message: "User registered successfully",
    data: req.body,
  });
};

export const loginUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login successful", data: req.body });
};
