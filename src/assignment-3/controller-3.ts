// 1. Install jsonwebtoken package using npm - npm install jsonwebtoken

// 4. Develop a data seeding module that generates mock API responses.

// 5. Create a sample POST API that returns a seeded data as a response.

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import { SampleUser, RandomUser, SeedDataResponse } from "../../types/seedUser";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

// Sample user generator function.
const createRandomUsers = (): RandomUser => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  gender: faker.person.sexType(),
});

// Login Endpoint Controller.
export const login = (req: Request, res: Response) => {
  try {
    const user: SampleUser = {
      id: 1,
      email: "ananymore45@gmail.com",
      password: "12345678",
    };

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    if (email !== user.email || password !== user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "30min",
    });
    console.log("Bearer ", token);

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Seed Data Endpoint Controller.
export const seedData = (req: Request, res: Response) => {
  try {
    const { generateLimit } = req.body;

    if (!generateLimit) {
      return res.status(400).json({ message: "generateLimit is required" });
    }
    // console.log("Incoming body:", req.body);

    const limit = Number(generateLimit);

    if (isNaN(limit) || limit < 1 || limit > 100) {
      return res.status(400).json({
        message: "generateLimit must be a number between 1 and 100",
      });
    }

    const randomUsers: RandomUser[] = faker.helpers.multiple(
      createRandomUsers,
      {
        count: limit,
      }
    );

    return res.status(200).json(<SeedDataResponse>{
      message: "Data generated successfully!",
      data: randomUsers,
    });
  } catch (error) {
    console.error("Seeding Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
