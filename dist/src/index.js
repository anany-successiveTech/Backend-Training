import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import assignRouter from "./routes/assignments.js";
import customHeader from "../middleware/customHeader.js";
import noCache from "../middleware/clearCach.js";
import handleGlobalError from "../middleware/handleAllError.js";
import errorRouter from "./routes/errorDemo.js";
import requestLogger from "../middleware/requestLogger.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGODB_CONNECTION_STRING;
// Middlewares
app.use(express.json());
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(noCache);
app.use(customHeader("Assignment-app", "Backend-training"));
app.use(requestLogger);
app.use("/api/v1", assignRouter);
app.use("/error-demo", errorRouter);
app.use(handleGlobalError);
// MongoDB Connection Logic
mongoose
    .connect(MONGO_CONNECTION)
    .then(() => {
    console.log(" MongoDB connection successfull");
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error("MongoDB connection error:", err);
});
//# sourceMappingURL=index.js.map