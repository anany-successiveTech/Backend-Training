import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import assignRouter from "./routes/assignments";
import customHeader from "./middleware/customHeader";
import handleGlobalError from "./middleware/handleAllError";
import errorRouter from "./routes/errorDemo";
import requestLogger from "./middleware/requestLogger";
import helmet from "helmet";
import cors from "cors";
import { connectDb } from "./db.config";
import orderController from "./assignment-13/controller";
dotenv.config();

const app = express();
app.use(helmet());
const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGODB_CONNECTION_STRING as string;

app.set("trust proxy", true); // tells Express to trust the proxy and use the real client IP. (read more about it).

orderController.createOrders();
// Middlewares

app.use(
  cors({
    methods: ["PUT", "POST", "GET", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customHeader("Assignment-app", "Backend-training"));
app.use(requestLogger);
app.use("/api/v1", assignRouter);
app.use("/error-demo", errorRouter);

app.use(handleGlobalError);

// Middleware ends

connectDb(MONGO_CONNECTION).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});

