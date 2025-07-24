// 1. Create a comprehensive documentation named "mongoose.md" covering MongoDB introduction, ORM, Mongoose, and distinctions between RDBMS and NoSQL databases.

// 2. Install MongoDB Compass on your local machine.

// 3. Implement seed scripts to store a list of playing countries and save records in the database.

import express from "express";
import { CountryDataSeeder } from "./controller8";
const countryRouter = express.Router();

const createCountry = new CountryDataSeeder();

countryRouter.post("/seedCountry", createCountry.seedCountry);
export default countryRouter;
