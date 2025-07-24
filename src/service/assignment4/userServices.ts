import { User, LoginResult, RegisteredUser, CheckUserResult } from "../../interfaces/userInterfaces";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string

export class UserService {
  static checkUser(userData: User): CheckUserResult {
    return {
      isValid: true,
      user: {
        name: userData.name,
        email: userData.email,
      },
    };
  }

  static handleQueryParams(limit: number | undefined, page: number | undefined) {
    return {
      limit: limit,
      page: page,
    };
  }

  static checkLocationAccess(): string {
    return "Access granted. You are allowed based on your location.";
  }

  static registerUser(name: string, email: string, password: string): RegisteredUser {
    // db interaction is to be entered here (create).
    return {
      id: 1, 
      name,
      email,
      password,
      message: "User registered successfully",
    };
  }

  static loginUser(email: string, password: string): LoginResult {
       const token = jwt.sign({email, password}, JWT_SECRET, {expiresIn: '1hr'})
    return {
      email,
      password,
      token: token,
      message: "Login successful",
    };
  }
}
