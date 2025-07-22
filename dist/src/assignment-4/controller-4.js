var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../../models/users.js";
export const creatUser = (req, res) => {
    try {
        const userData = req.body;
        return res.status(201).json({
            message: "User created successfully",
            user: userData,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
export const queriedData = (req, res) => {
    const { limit, page } = req.query;
    res.json({
        message: "Query parameters are valid",
        limit,
        page,
    });
};
export const accessFromLocation = (req, res) => {
    res.status(200).json({
        message: "Access granted. You are allowed based on your location.",
    });
};
// Search user Route in the dataBase.
export const findUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const SearchedUser = yield User.findOne({
        email: email
    });
    if (SearchedUser) {
        return;
    }
});
// User register route.
export const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.create(req.body);
        res.status(201).json({
            message: "User registered successfully",
            data: user,
        });
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                error: "Email already exists",
            });
        }
        return res.status(500).json({
            error: "Failed to register user",
            detail: error.message,
        });
    }
});
export const loginUser = (req, res) => {
    res.status(200).json({ message: "Login successful", data: req.body });
};
//# sourceMappingURL=controller-4.js.map