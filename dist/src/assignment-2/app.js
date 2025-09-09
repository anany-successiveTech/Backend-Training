import express from "express";
import { getUserData } from "./controller/userController.js";
const userRouter = express.Router();
// This is my backend mock data get api
userRouter.get('/data', getUserData);
export default userRouter;
//# sourceMappingURL=app.js.map