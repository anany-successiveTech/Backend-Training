export interface User {
  name: string;
  email: string;
  password: string;
}

export interface LoginResult {
  email: string;
  password: string;
  token: string;
  message: string;
}

export interface RegisteredUser {
  id: number;
  name: string;
  email: string;
  password: string;
  message: string;
}

export interface CheckUserResult {
  isValid: boolean;
  user: {
    name: string;
    email: string;
  };
}
export interface AuthUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
}

export enum UserRole {
  Admin = "admin",
  User = "user",
}

export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}