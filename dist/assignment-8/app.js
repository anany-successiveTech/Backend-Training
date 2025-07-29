"use strict";
// 1. Create a comprehensive documentation named "mongoose.md" covering MongoDB introduction, ORM, Mongoose, and distinctions between RDBMS and NoSQL databases.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Install MongoDB Compass on your local machine.
// 3. Implement seed scripts to store a list of playing countries and save records in the database.
const express_1 = __importDefault(require("express"));
const controller8_1 = __importDefault(require("./controller8"));
const authentication_1 = require("../middleware/authentication");
const countryRouter = express_1.default.Router();
// const createCountry = new CountryDataSeeder();
countryRouter.post("/seedCountry", authentication_1.authenticationChecker, controller8_1.default.seedCountry);
exports.default = countryRouter;
//# sourceMappingURL=app.js.map