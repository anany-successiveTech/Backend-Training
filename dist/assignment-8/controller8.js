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
const countrySeeder_1 = __importDefault(require("../service/assignment8/countrySeeder"));
const responseHandler_1 = require("../utils/responseHandler");
class CountryDataSeeder {
    constructor() {
        this.seedCountry = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const countryList = req.body;
                console.log(countryList, "this is countries");
                const result = countrySeeder_1.default.seedCountry;
                return (0, responseHandler_1.successResponse)(res, "Countries data created successfully !", result, 200);
            }
            catch (error) {
                console.log(error);
                next(new responseHandler_1.HandleApiError(400, "Bad Request"));
            }
        });
    }
}
const CountryData = new CountryDataSeeder();
exports.default = CountryData;
//# sourceMappingURL=controller8.js.map