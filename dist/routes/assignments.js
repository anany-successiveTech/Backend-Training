"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("../assignment-2/app"));
const app_2 = __importDefault(require("../assignment-3/app"));
const app_3 = __importDefault(require("../assignment-4/app"));
const app_4 = __importDefault(require("../assignment-8/app"));
const app_5 = __importDefault(require("../assignment-9/app"));
const app_6 = __importDefault(require("../assignment-10/app"));
const app_7 = __importDefault(require("../assignment-11/app"));
// There is nothing in assignment-1 which will requires routing.
const assignRouter = express_1.default.Router();
assignRouter.use("/assignment-2", app_1.default);
assignRouter.use("/assignment-3", app_2.default);
assignRouter.use("/assignment-4", app_3.default);
assignRouter.use("/assignment-8", app_4.default);
assignRouter.use("/assignment-9", app_5.default);
assignRouter.use("/assignment-10", app_6.default);
assignRouter.use("/assignment-11", app_7.default);
exports.default = assignRouter;
//# sourceMappingURL=assignments.js.map