"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const assignments_js_1 = __importDefault(require("./routes/assignments.js"));
const customHeader_js_1 = __importDefault(require("./middleware/customHeader.js"));
const handleAllError_js_1 = __importDefault(require("./middleware/handleAllError.js"));
const errorDemo_js_1 = __importDefault(require("./routes/errorDemo.js"));
const requestLogger_js_1 = __importDefault(require("./middleware/requestLogger.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGODB_CONNECTION_STRING;
app.set("trust proxy", true); // tells Express to trust the proxy and use the real client IP. (read more about it).
// Middlewares
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, customHeader_js_1.default)("Assignment-app", "Backend-training"));
app.use(requestLogger_js_1.default);
app.use("/api/v1", assignments_js_1.default);
app.use("/error-demo", errorDemo_js_1.default);
app.use(handleAllError_js_1.default);
// Middleware ends
mongoose_1.default
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