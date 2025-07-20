import express from "express";
import { getUserData } from "./controller-2.js";

const userRouter = express.Router();

// This is my backend mock data get api it's a predefined data of some mock users.

userRouter.get("/data", getUserData);
export default userRouter;
