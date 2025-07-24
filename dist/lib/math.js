"use strict";
// 8. Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, and division, respectively in math.js. Utilize the lodash dependency for executing the aforementioned operations. Export all the above methods to make them accessible in any file.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mult = exports.div = exports.sub = exports.add = void 0;
const lodash_1 = __importDefault(require("lodash"));
const add = (num1, num2) => lodash_1.default.add(num1, num2);
exports.add = add;
const sub = (num1, num2) => lodash_1.default.subtract(num1, num2);
exports.sub = sub;
const mult = (num1, num2) => lodash_1.default.multiply(num1, num2);
exports.mult = mult;
const div = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return lodash_1.default.divide(num1, num2);
};
exports.div = div;
//# sourceMappingURL=math.js.map