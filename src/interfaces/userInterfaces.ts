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
