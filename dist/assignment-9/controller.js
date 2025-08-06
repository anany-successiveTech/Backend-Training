"use strict";
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
const car_1 = __importDefault(require("../models/car"));
const responseHandler_1 = require("../utils/responseHandler");
class CarController {
    constructor() {
        this.updateCar = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const existingCar = req.body;
                console.log(existingCar);
                const savedCar = yield car_1.default.findOneAndUpdate({ carModel: existingCar.carModel }, existingCar, {
                    new: true,
                    runValidators: true
                });
                console.log(existingCar);
                if (savedCar) {
                    return (0, responseHandler_1.successResponse)(res, "Car's data updated successfully", savedCar, 201);
                }
                next(new responseHandler_1.HandleApiError(404, "Car not found"));
            }
            catch (error) {
                console.log(error, "getting error");
                next(new responseHandler_1.HandleApiError(500, "Failed to update car details!"));
            }
        });
        this.createCar = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newCar = req.body;
                const createdCar = yield car_1.default.create(newCar);
                return (0, responseHandler_1.successResponse)(res, "Created your car's data", createdCar, 201);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(400, "Bad request"));
            }
        });
    }
}
;
const carController = new CarController();
exports.default = carController;
//# sourceMappingURL=controller.js.map