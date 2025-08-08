import mongoose from "mongoose";
import { Item, Order } from "../interfaces/ordersInterface";

const itemSchema = new mongoose.Schema<Item>(
  {
    productName: String,
    quantity: Number,
    price: Number,
  },
  { _id: false } // this will help me to ignore doc id in subdocs.
);

const orderSchema = new mongoose.Schema<Order>({
  orderId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  orderDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
    required: true,
  },
  items: {
    type: [itemSchema],
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

const order = mongoose.model("Order", orderSchema);
export default order;
