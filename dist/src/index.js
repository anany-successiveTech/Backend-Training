// 10. Implement an error-handling middleware that captures errors thrown in the route handlers and sends an appropriate error response.
import cookieParser from "cookie-parser";
import express from "express";
// import cors from "cors"
import assignRouter from "./routes/assignmentRoutes.js";
import errorHandler from "../middleware/errorHandling.js";
import customHeader from "../middleware/customHeader.js";
import noCache from "../middleware/clearCach.js";
const app = express();
const PORT = process.env.PORT || 3000;
// app.use(cors());  Although we are not sending the resuests from the browser 
app.use(express.json());
app.use(cookieParser());
app.use(noCache);
// API structure for assignment routing
// ---> /api/v1/assingmen-No.
// This is a customHeader middleware, both req, res have headers.
app.use(customHeader("Assignment-app", "Backend-tarining"));
app.use("/api/v1", assignRouter);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running at port http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map