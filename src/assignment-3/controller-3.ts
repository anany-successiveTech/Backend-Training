import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import { SampleUser, RandomUser, SeedDataResponse } from "../../types/seedUser";
import { StatusCodes } from "http-status-codes";
import { successResponse, errorResponse } from "../../utils/responseHandeller"

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

export const login = (req: Request, res: Response) => {
  try {
    const user: SampleUser = {
      id: 1,
      email: "ananymore45@gmail.com",
      password: "12345678",
    };

    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, "Missing email or password", {}, StatusCodes.BAD_REQUEST);
    }

    if (email !== user.email || password !== user.password) {
      return errorResponse(res, "Invalid credentials", {}, StatusCodes.UNAUTHORIZED);
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "30min",
    });

    return successResponse(res, "Login successful", { token }, StatusCodes.OK);
  } catch (error) {
    console.error("Login Error:", error);
    return errorResponse(res, "Internal server error", error);
  }
};

export const seedData = (req: Request, res: Response) => {
  try {
    const { generateLimit } = req.body;

    if (!generateLimit) {
      return errorResponse(res, "generateLimit is required", {}, StatusCodes.BAD_REQUEST);
    }

    const limit = Number(generateLimit);

    if (isNaN(limit) || limit < 1 || limit > 100) {
      return errorResponse(res, "generateLimit must be a number between 1 and 100", {}, StatusCodes.BAD_REQUEST);
    }

    const randomUsers: RandomUser[] = faker.helpers.multiple(createRandomUsers, {
      count: limit,
    });

    const result: SeedDataResponse = {
      message: "Data generated successfully!",
      data: randomUsers,
    };

    return successResponse(res, result.message, result, StatusCodes.OK);
  } catch (error) {
    console.error("Seeding Error:", error);
    return errorResponse(res, "Internal server error", error);
  }
};
