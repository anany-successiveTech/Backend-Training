import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import { SampleUser, RandomUser, SeedDataResponse } from "../../interfaces/seedUser";
import { StatusCodes } from "http-status-codes";
import { successResponse, HandleApiError } from "../../utils/responseHandler";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

const createRandomUsers = (): RandomUser => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  gender: faker.person.sexType(),
});

export class AuthController {
  login = (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: SampleUser = {
        id: 1,
        email: "ananymore45@gmail.com",
        password: "12345678",
      };

      const { email, password } = req.body;

      if (!email || !password) {
        next(new HandleApiError(400, "Inputs are not valide"));
      }

      if (email !== user.email || password !== user.password) {
        return next(new HandleApiError(401, "Unathorized"));
      }

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "30min",
      });

      return successResponse(res, "Login successful", { token }, 200);
    } catch (error) {
      console.error("Login Error:", error);
      next(new HandleApiError(404, "User Not found"));
    }
  };
}

export class DataController {
  seedData = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { generateLimit } = req.body;

      if (!generateLimit) {
        next(new HandleApiError(StatusCodes.BAD_REQUEST, ""));
      }

      const limit = Number(generateLimit);

      if (isNaN(limit) || limit < 1 || limit > 100) {
        next(new HandleApiError(400, "Send complete data input!"));
      }

      const randomUsers: RandomUser[] = faker.helpers.multiple(
        createRandomUsers,
        {
          count: limit,
        }
      );

      const result: SeedDataResponse = {
        message: "Data generated successfully!",
        data: randomUsers,
      };

      return successResponse(res, result.message, result, StatusCodes.OK);
    } catch (error) {
      console.error("Seeding Error:", error);
      next(new HandleApiError(500, "Internal server error"));
    }
  };
}
