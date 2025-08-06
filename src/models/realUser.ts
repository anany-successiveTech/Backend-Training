import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/userInterfaces";

enum UserRole {
  Admin = "admin",
  Support = "support",
  User = "user",
}

// export interface IUser {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   role: string;
// }

const userSchema: Schema<IUser> = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "support"], // Found this syntax on artical(devCommunity);
    lowercase: true,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
