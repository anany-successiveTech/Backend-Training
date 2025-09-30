import {
  User,
  LoginResult,
  RegisteredUser,
  CheckUserResult,
} from "../../interfaces/userInterfaces";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

class UserService {
   checkUser(userData: User): CheckUserResult {
    return {
      isValid: true,
      user: {
        name: userData.name,
        email: userData.email,
      },
    };
  }

   handleQueryParams(limit?: number, page?: number) {
    return {
      limit: limit ?? 10,
      page: page ?? 1,
    };
  }

   checkLocationAccess(): string {
    return "Access granted. You are allowed based on your location.";
  }

  registerUser(
    name: string,
    email: string,
    password: string
  ): RegisteredUser {
    return {
      id: 1,
      name,
      email,
      password,
      message: "User registered successfully",
    };
  }

   loginUser(email: string, password: string): LoginResult {
    const token = jwt.sign({ email, password }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return {
      email,
      password,
      token,
      message: "Login successful",
    };
  }
}
const UserServices = new UserService();
export default UserServices;
