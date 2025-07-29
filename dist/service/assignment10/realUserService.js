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
const realUser_1 = __importDefault(require("../../models/realUser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET);
class RealUserService {
    constructor() {
        this.signUp = (reqData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, firstName, lastName, password, role } = reqData;
                console.log(reqData, "This is the registeration details");
                const existingUser = yield realUser_1.default.findOne({ email });
                // console.log(existingUser, "checking db return");
                if (existingUser) {
                    throw new Error("User already exist, try login");
                }
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                console.log("Creating user with:", {
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                });
                const createdData = yield realUser_1.default.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    role: role
                });
                return {
                    status: "User Registered successfully",
                    registeredData: {
                        id: createdData._id,
                        firstName: createdData.firstName,
                        lastName: createdData.lastName,
                        email: createdData.email,
                        role: createdData.role
                    },
                };
            }
            catch (err) {
                // console.error("SIGNUP ERROR MESSAGE:", err.message);
                // console.error("SIGNUP ERROR NAME:", err.name);
                // console.error("SIGNUP ERROR DETAILS:", err.errors);
                // console.error("FULL ERROR OBJECT:", err);
                throw new Error(err.message || "Unknown signup error");
            }
        });
        this.signIn = (reqData) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = reqData;
            const user = yield realUser_1.default.findOne({ email });
            if (!user) {
                throw new Error("User not found");
            }
            const isMatch = yield bcrypt_1.default.compare(password, user.password);
            if (!isMatch) {
                throw new Error("Invalid password");
            }
            const token = jsonwebtoken_1.default.sign({ email, id: user._id, role: user.role }, JWT_SECRET, {
                expiresIn: "1h",
            });
            return {
                status: "User login successful",
                data: {
                    token,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
            };
        });
    }
}
const realUserServices = new RealUserService();
exports.default = realUserServices;
//# sourceMappingURL=realUserService.js.map