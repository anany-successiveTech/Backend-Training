import { Request, Response } from "express";
import ordersMaker from "../service/assignment13/mongodbOperation";
import orders from "../models/orders";

class OrderController {
  createOrders = async () => {
    try {
      //   console.log(`step-1`);
      // const limit = Number(req.query.limit);
      //   console.log(`step-2`);

      const result = await ordersMaker.orderSeeder(50); // we should use await here, without that it was giving "Pending Promise"
      // console.log(result);
    } catch (error) {
      console.log(`Error is : ${error}`);
    }
  };
  showOrders = async (req: Request, res: Response) => {
    try {
      const limit: number = Number(req.query.limit);
      const page: number = Number(req.query.page);
      // console.log(limit, "->>>>>>>>", page);
      // console.log(req.query);
      
      const resultData = await orders
        .find()
        .skip((page - 1) * limit)
        .limit(limit);
      return res.status(200).json({
        status: true,
        message: "get the data successfully",
        data: resultData,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const orderController = new OrderController();
export default orderController;
