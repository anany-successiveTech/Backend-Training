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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const faker_1 = require("@faker-js/faker");
dotenv_1.default.config();
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const userSchema = new mongoose_1.default.Schema({
    userId: String,
    username: String,
    email: String,
    password: String,
});
const User = mongoose_1.default.model("User", userSchema);
const fakeDataSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(MONGO_CONNECTION);
        console.log("MongoDB connection successful");
        yield User.deleteMany();
        const createRandomUser = () => ({
            userId: faker_1.faker.string.uuid(),
            username: faker_1.faker.internet.username(),
            email: faker_1.faker.internet.email(),
            password: faker_1.faker.internet.password(),
        });
        const users = faker_1.faker.helpers.multiple(createRandomUser, {
            count: 50,
        });
        yield User.insertMany(users);
        console.log(" 50 fake users inserted into the database.");
    }
    catch (error) {
        console.error(" Error during seeding:", error);
    }
    finally {
        yield mongoose_1.default.disconnect();
        console.log("MongoDB connection closed.");
    }
});
fakeDataSeeder();
//# sourceMappingURL=seed.js.map