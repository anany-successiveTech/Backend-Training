"use strict";
// 1. Establish a create API.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Implement a MongoDB create API.
// 3. Configure validations.
// controllers/CreateCarController.ts
const express_1 = __importDefault(require("express"));
const car_1 = __importDefault(require("../models/car"));
const responseHandler_1 = require("../utils/responseHandler");
const checkData_1 = require("./checkData");
const schema_1 = require("./schema");
const createRouter = express_1.default.Router();
const validator = new checkData_1.CheckIncomingData();
createRouter.post("/create-api", validator.validateCreate(schema_1.createSchema), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCar = req.body;
        const savedCar = yield car_1.default.create(newCar);
        return (0, responseHandler_1.successResponse)(res, "Car created successfully", savedCar, 201);
    }
    catch (error) {
        next(new responseHandler_1.HandleApiError(500, "Failed to create car"));
    }
}));
exports.default = createRouter;
//# sourceMappingURL=app.js.map