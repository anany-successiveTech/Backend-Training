import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import assignRouter from "./routes/assignments.js";
import customHeader from "./middleware/customHeader.js";
import handleGlobalError from "./middleware/handleAllError.js";
import errorRouter from "./routes/errorDemo.js";
import requestLogger from "./middleware/requestLogger.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGODB_CONNECTION_STRING as string;

app.set("trust proxy", true); // tells Express to trust the proxy and use the real client IP. (read more about it).

// Middlewares

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customHeader("Assignment-app", "Backend-training"));
app.use(requestLogger);
app.use("/api/v1", assignRouter);
app.use("/error-demo", errorRouter);

app.use(handleGlobalError);

// Middleware ends
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
