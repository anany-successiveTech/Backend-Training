import { Document } from "mongoose";

export interface Item {
  productName: string;
  quantity: number;
  price: number;
}
export interface Order extends Document {
  orderId: string;
  customerName: string;
  orderDate: Date;
  status: "Pending" | "Delivered" | "Shipped";
  items: Item[];
  totalAmount: number;
}
