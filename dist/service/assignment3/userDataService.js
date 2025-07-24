"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = exports.AuthService = void 0;
const faker_1 = require("@faker-js/faker");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// I took Random user for authentication
const dummyUser = {
    id: 1,
    email: "ananymore45@gmail.com",
    password: "12345678",
};
class AuthService {
    static validateUserCredentials(email, password) {
        return email === dummyUser.email && password === dummyUser.password;
    }
    static generateToken(secret) {
        return jsonwebtoken_1.default.sign({ id: dummyUser.id, email: dummyUser.email }, secret, {
            expiresIn: "30min",
        });
    }
}
exports.AuthService = AuthService;
class DataService {
    static createRandomUser() {
        return {
            id: faker_1.faker.string.uuid(),
            firstName: faker_1.faker.person.firstName(),
            lastName: faker_1.faker.person.lastName(),
            email: faker_1.faker.internet.email(),
            password: faker_1.faker.internet.password(),
            gender: faker_1.faker.person.sexType(),
        };
    }
    static generateRandomUsers(limit) {
        const randomUsers = faker_1.faker.helpers.multiple(this.createRandomUser, {
            count: limit,
        });
        return {
            message: "Data generated successfully!",
            data: randomUsers,
        };
    }
}
exports.DataService = DataService;
//# sourceMappingURL=userDataService.js.map