// 1.​ Find total revenue generated (sum of totalAmount).
// 2.​ Find total number of orders by status (Pending, Shipped, Delivered).
// 3. Find the top 3 customers who spent the most (sort by totalAmount).
// 4. Get the average order amount per customer.
// 5. Find products that were sold more than 10 times (total quantity).
// 6. List monthly revenue (group by month-year) for the last 6 months.
// 7. Find all customers who placed more than 2 orders.
// 8. Extract only the product names from all orders using $unwind and $project.
// 9.​ Apply filtering using $match (only Delivered orders) and then calculate revenue.
// 10. ​Calculate total quantity and total revenue per product (use $unwind and $group).

import express from "express";
// import orderController from "./controller";

const orderSeedRouter = express.Router();

// orderSeedRouter.get("/seed-orders", orderController.createOrders);
export default orderSeedRouter;
