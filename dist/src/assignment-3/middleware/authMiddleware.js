import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log(authHeader, "authentication data");
    if (!authHeader ||
        typeof authHeader !== "string" ||
        !authHeader.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ message: "Unauthorized: Missing or malformed token" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        // console.log(decoded, "checking the data");
        if (!decoded || !decoded.email) {
            return res
                .status(401)
                .json({ message: "Unauthorized: Invalid token structure" });
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        next(error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
export default authMiddleware;
//# sourceMappingURL=authMiddleware.js.map