// 1. Develop a register API for signup.

// 2. Implement an API for login.

// 3. Substitute the current authentication middleware with a real one.

import express from "express";
import { Dynamically } from "../assignment-4/middleware/dynamicValidator";
import handleUser from "./controller-10";
import { authenticationChecker } from "../middleware/authentication";

const dynamically = new Dynamically();
const userRouter = express.Router();

userRouter.post("/signup", dynamically.dynamicValidator, handleUser.createSignUp);
userRouter.post("/signin", dynamically.dynamicValidator, handleUser.createSignIn);

export default userRouter