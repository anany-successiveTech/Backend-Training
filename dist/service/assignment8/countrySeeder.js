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
const countries_1 = __importDefault(require("../../models/countries"));
class CountrySeeder {
    constructor() {
        this.seedCountry = (reqdata) => __awaiter(this, void 0, void 0, function* () {
            const contryData = yield countries_1.default.create(reqdata);
            return {
                status: "country data created",
                countries: "randomly added",
                data: contryData,
            };
        });
    }
}
const seedCountries = new CountrySeeder();
exports.default = seedCountries;
//# sourceMappingURL=countrySeeder.js.map