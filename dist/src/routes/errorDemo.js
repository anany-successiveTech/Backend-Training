var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
const errorRouter = express.Router();
errorRouter.get("/error-demo", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new Promise((_, reject) => setTimeout(() => reject(new Error("Intentional async error!")), 500));
    }
    catch (error) {
        next(error);
        // res.status(500).json({ success: false, message: (error as Error).message }); i am using/passing "(next(error))" to global error handeller.
        // which will gonna show the above formate.
    }
}));
export default errorRouter;
//# sourceMappingURL=errorDemo.js.map