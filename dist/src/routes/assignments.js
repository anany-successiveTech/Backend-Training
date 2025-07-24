"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_js_1 = __importDefault(require("../assignment-2/app.js"));
const app_js_2 = __importDefault(require("../assignment-3/app.js"));
const app_js_3 = __importDefault(require("../assignment-4/app.js"));
// There is nothing in assignment-1 which will requires routing.
const assignRouter = express_1.default.Router();
assignRouter.use("/assignment-2", app_js_1.default);
assignRouter.use("/assignment-3", app_js_2.default);
assignRouter.use("/assignment-4", app_js_3.default);
exports.default = assignRouter;
//# sourceMappingURL=assignments.js.map