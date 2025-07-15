import express from "express";
import assignmentTwoRouter from "../assignment-2/app.js";
// import assignmentOneRouter from "../assignment-1/app.js"



const assignRouter = express.Router();

// assignRouter.use("/assignment-1", assignmentOneRouter);
assignRouter.use("/assignment-2", assignmentTwoRouter);

export default assignRouter;
