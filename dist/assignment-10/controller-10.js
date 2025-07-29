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
const responseHandler_1 = require("../utils/responseHandler");
const realUserService_1 = __importDefault(require("../service/assignment10/realUserService"));
class RealUserController {
    constructor() {
        this.createSignUp = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const signUpData = req.body;
                console.log(signUpData, "this is the incoming data");
                const result = yield realUserService_1.default.signUp(signUpData);
                return (0, responseHandler_1.successResponse)(res, "New user created successfully", result, 201);
            }
            catch (error) {
                console.log("this is the error", error);
                next(new responseHandler_1.HandleApiError(403, error.message || "User signup failed"));
            }
        });
        this.createSignIn = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const signInData = req.body;
                const result = yield realUserService_1.default.signIn(signInData);
                return (0, responseHandler_1.successResponse)(res, "User logged in successfully", result, 200);
            }
            catch (error) {
                next(new responseHandler_1.HandleApiError(401, "Invalid email or password"));
            }
        });
    }
}
const handleUser = new RealUserController();
exports.default = handleUser;
//# sourceMappingURL=controller-10.js.map