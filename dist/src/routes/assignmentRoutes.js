import express from "express";
import assignmentTwoRouter from "../assignment-2/app.js";
import assignmentThreeRouter from "../assignment-3/app.js";
import assignmentFourRouter from "../assignment-4/app.js";
// import assignmentOneRouter from "../assignment-1/app.js"
// There is nothing in assignment-1 which will requires routing.
const assignRouter = express.Router();
// assignRouter.use("/assignment-1", assignmentOneRouter);
assignRouter.use("/assignment-2", assignmentTwoRouter);
assignRouter.use("/assignment-3", assignmentThreeRouter);
assignRouter.use("/assignment-4", assignmentFourRouter);
export default assignRouter;
//# sourceMappingURL=assignmentRoutes.js.map