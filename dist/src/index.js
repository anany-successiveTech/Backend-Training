import cookieParser from "cookie-parser";
import express from "express";
import assignRouter from "./routes/assignmentRoutes.js";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());
// API structure for assignment routing
// ---> /api/v1/assingmen-No.
app.use("/api/v1", assignRouter);
app.listen(PORT, () => {
    console.log(`Server is running at port http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map