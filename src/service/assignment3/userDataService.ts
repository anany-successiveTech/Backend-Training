import { faker } from "@faker-js/faker";
import jwt from "jsonwebtoken";
import {
  SampleUser,
  RandomUser,
  SeedDataResponse,
} from "../../interfaces/seedUser";

// I took Random user for authentication
const dummyUser: SampleUser = {
  id: 1,
  email: "ananymore45@gmail.com",
  password: "12345678",
};

export class AuthService {
  static validateUserCredentials(email: string, password: string): boolean {
    return email === dummyUser.email && password === dummyUser.password;
  }

  static generateToken(secret: string): string {
    return jwt.sign({ id: dummyUser.id, email: dummyUser.email }, secret, {
      expiresIn: "30min",
    });
  }
}

export class DataService {
  static createRandomUser(): RandomUser {
    return {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      gender: faker.person.sexType(),
    };
  }

  static generateRandomUsers(limit: number): SeedDataResponse {
    const randomUsers: RandomUser[] = faker.helpers.multiple(
      this.createRandomUser,
      {
        count: limit,
      }
    );

    return {
      message: "Data generated successfully!",
      data: randomUsers,
    };
  }
}
