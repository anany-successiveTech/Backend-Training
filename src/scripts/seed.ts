import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";

dotenv.config();

const MONGO_CONNECTION = process.env.MONGO_CONNECTION as string;

const userSchema = new mongoose.Schema({
  userId: String,
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const fakeDataSeeder = async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION);
    console.log(" MongoDB connection successful");

    const createRandomUser = () => ({
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    const users = faker.helpers.multiple(createRandomUser, {
      count: 50,
    });

    await User.insertMany(users);
    console.log(" 50 fake users inserted into the database.");
  } catch (error) {
    console.error(" Error during seeding:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB connection closed.");
  }
};

fakeDataSeeder();
