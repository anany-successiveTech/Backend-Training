import express from "express";
import assignmentTwoRouter from "../assignment-2/app";
import assignmentThreeRouter from "../assignment-3/app";
import assignmentFourRouter from "../assignment-4/app";
import assignmentEightRouter from "../assignment-8/app";
import assignmentNineRouter from "../assignment-9/app";
import assignmentTenRouter from "../assignment-10/app";
import assignmentElevenRouter from "../assignment-11/app";
import assignmentThirteenRouter from "../assignment-13/app"

// There is nothing in assignment-1 which will requires routing.

const assignRouter = express.Router();

assignRouter.use("/assignment-2", assignmentTwoRouter);
assignRouter.use("/assignment-3", assignmentThreeRouter);
assignRouter.use("/assignment-4", assignmentFourRouter);
assignRouter.use("/assignment-8", assignmentEightRouter);
assignRouter.use("/assignment-9", assignmentNineRouter);
assignRouter.use("/assignment-10", assignmentTenRouter);
assignRouter.use("/assignment-11", assignmentElevenRouter);
assignRouter.use("/assignment-13", assignmentThirteenRouter);

export default assignRouter;
