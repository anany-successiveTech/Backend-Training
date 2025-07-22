import { Request, Response } from "express";
import User from "../../models/users.js";

export const creatUser = (req: Request, res: Response) => {
  try {
    const userData = req.body;
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

// Search user Route in the dataBase.
export const findUser = async (req: Request, res: Response) => {
  const {email} = req.body
  const SearchedUser = await User.findOne({
    email:email
  })
  if(SearchedUser){
    return
  }
};
// User register route.
export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(409).json({
        error: "Email already exists",
      });
    }

    return res.status(500).json({
      error: "Failed to register user",
      detail: error.message,
    });
  }
};

export const loginUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login successful", data: req.body });
};
