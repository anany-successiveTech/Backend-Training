import express, { Request, Response, NextFunction } from "express";

const errorRouter = express.Router();

errorRouter.get("/error-demo", async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    await new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Intentional async error!")), 500)
    );
  } catch (error) {
    
    next(error); 
    // res.status(500).json({ success: false, message: (error as Error).message }); i am using/passing "(next(error))" to global error handeller.
    // which will gonna show the above formate.
  }
});

export default errorRouter;
