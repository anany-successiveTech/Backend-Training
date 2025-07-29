import realUser from "../../models/realUser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AuthUser } from "../../interfaces/userInterfaces";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
console.log(JWT_SECRET);

class RealUserService {
  signUp = async (reqData: AuthUser) => {
    try {
      const { email, firstName, lastName, password, role} = reqData;
      console.log(reqData, "This is the registeration details");

      const existingUser = await realUser.findOne({ email });
      // console.log(existingUser, "checking db return");

      if (existingUser) {
        throw new Error("User already exist, try login");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      console.log("Creating user with:", {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      const createdData = await realUser.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: role
      });

      return {
        status: "User Registered successfully",
        registeredData: {
          id: createdData._id,
          firstName: createdData.firstName,
          lastName: createdData.lastName,
          email: createdData.email,
          role: createdData.role
        },
      };
    } catch (err: any) {
      // console.error("SIGNUP ERROR MESSAGE:", err.message);
      // console.error("SIGNUP ERROR NAME:", err.name);
      // console.error("SIGNUP ERROR DETAILS:", err.errors);
      // console.error("FULL ERROR OBJECT:", err);

      throw new Error(err.message || "Unknown signup error");
    }
  };

  signIn = async (
    reqData: AuthUser
  ): Promise<{
    status: string;
    data: {
      token: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  }> => {
    const { email, password } = reqData;

    const user = await realUser.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      { email, id: user._id, role: user.role },
      JWT_SECRET,
      {
        expiresIn: "3h",
      }
    );

    return {
      status: "User login successful",
      data: {
        token,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };
  };
}

const realUserServices = new RealUserService();
export default realUserServices;
