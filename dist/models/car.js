"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CarSchema = new mongoose_1.default.Schema({
    carModel: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 30,
    },
    price: {
        type: Number,
        required: true,
        min: 5,
        max: 10,
    },
    owner: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 30,
    },
});
const Car = mongoose_1.default.model("Car", CarSchema);
exports.default = Car;
//# sourceMappingURL=car.js.map