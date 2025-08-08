import ordersMaker from "../service/assignment13/mongodbOperation";

class OrderController {
  createOrders = async () => {
    try {
      //   console.log(`step-1`);
      // const limit = Number(req.query.limit);
      //   console.log(`step-2`);
    
      const result = await ordersMaker.orderSeeder(50); // we should use await here, without that it was giving "Pending Promise"
      console.log(result);
    } catch (error) {
     console.log(`Error is : ${error}`)
    }
  };
}

const orderController = new OrderController();
export default orderController;
