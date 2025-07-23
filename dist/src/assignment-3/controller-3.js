"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = exports.AuthController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const faker_1 = require("@faker-js/faker");
const dotenv_1 = __importDefault(require("dotenv"));
const http_status_codes_1 = require("http-status-codes");
const responseHandler_1 = require("../../utils/responseHandler");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const createRandomUsers = () => ({
    id: faker_1.faker.string.uuid(),
    firstName: faker_1.faker.person.firstName(),
    lastName: faker_1.faker.person.lastName(),
    email: faker_1.faker.internet.email(),
    password: faker_1.faker.internet.password(),
    gender: faker_1.faker.person.sexType(),
});
class AuthController {
    constructor() {
        this.login = (req, res, next) => {
            try {
                const user = {
                    id: 1,
                    email: "ananymore45@gmail.com",
                    password: "12345678",
                };
                const { email, password } = req.body;
                if (!email || !password) {
                    next(new responseHandler_1.HandleApiError(400, "Inputs are not valide"));
                }
                if (email !== user.email || password !== user.password) {
                    return next(new responseHandler_1.HandleApiError(401, "Unathorized"));
                }
                const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, JWT_SECRET, {
                    expiresIn: "30min",
                });
                return (0, responseHandler_1.successResponse)(res, "Login successful", { token }, 200);
            }
            catch (error) {
                console.error("Login Error:", error);
                next(new responseHandler_1.HandleApiError(404, "User Not found"));
            }
        };
    }
}
exports.AuthController = AuthController;
class DataController {
    constructor() {
        this.seedData = (req, res, next) => {
            try {
                const { generateLimit } = req.body;
                if (!generateLimit) {
                    next(new responseHandler_1.HandleApiError(http_status_codes_1.StatusCodes.BAD_REQUEST, ""));
                }
                const limit = Number(generateLimit);
                if (isNaN(limit) || limit < 1 || limit > 100) {
                    next(new responseHandler_1.HandleApiError(400, "Send complete data input!"));
                }
                const randomUsers = faker_1.faker.helpers.multiple(createRandomUsers, {
                    count: limit,
                });
                const result = {
                    message: "Data generated successfully!",
                    data: randomUsers,
                };
                return (0, responseHandler_1.successResponse)(res, result.message, result, http_status_codes_1.StatusCodes.OK);
            }
            catch (error) {
                console.error("Seeding Error:", error);
                next(new responseHandler_1.HandleApiError(500, "Internal server error"));
            }
        };
    }
}
exports.DataController = DataController;
//# sourceMappingURL=controller-3.js.map