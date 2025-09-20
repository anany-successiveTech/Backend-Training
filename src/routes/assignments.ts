import express from "express";
import assignmentTwoRouter from "../assignment-2/app";
import assignmentThreeRouter from "../assignment-3/app";
import assignmentFourRouter from "../assignment-4/app";
import assignmentEightRouter from "../assignment-8/app";
<<<<<<< HEAD
import assignmentNineRouter from "../assignment-9/app"
=======
>>>>>>> 46f72a4cf0f0e5d0774b53ab3775cbc347afbbb7

// There is nothing in assignment-1 which will requires routing.

const assignRouter = express.Router();

assignRouter.use("/assignment-2", assignmentTwoRouter);
assignRouter.use("/assignment-3", assignmentThreeRouter);
assignRouter.use("/assignment-4", assignmentFourRouter);
assignRouter.use("/assignment-8", assignmentEightRouter);
<<<<<<< HEAD
assignRouter.use("/assignment-9", assignmentNineRouter);
=======
>>>>>>> 46f72a4cf0f0e5d0774b53ab3775cbc347afbbb7

export default assignRouter;
