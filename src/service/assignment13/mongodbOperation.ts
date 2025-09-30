import order from "../../models/orders";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";

class OrdersMaker {
  orderSeeder = async (dataLimit: number) => {
    try {
      const createRandomOrders = () => {
        const customerName = faker.person.fullName();
        const orderDate = faker.date.recent({ days: 180 });
        const status = faker.helpers.arrayElement([
          "Pending",
          "Shipped",
          "Delivered",
        ]);

        const productList = [
          { name: "Laptop", price: 1000 },
          { name: "Mouse", price: 25 },
          { name: "Keyboard", price: 45 },
          { name: "Monitor", price: 200 },
          { name: "Phone", price: 700 },
          { name: "Tablet", price: 400 },
          { name: "Printer", price: 150 },
          { name: "USB Cable", price: 10 },
          { name: "Webcam", price: 80 },
          { name: "Speaker", price: 60 },
        ];

        const numItems = faker.number.int({ min: 1, max: 5 });

        const items = Array.from({ length: numItems }, () => {
          const product = faker.helpers.arrayElement(productList);
          const quantity = faker.number.int({ min: 1, max: 5 });

          return {
            productName: product.name,
            quantity,
            price: product.price,
          };
        });

        const totalAmount = items.reduce(
          (sum, item) => sum + item.quantity * item.price,
          0
        );

        const objectId = faker.database.mongodbObjectId();

        return {
          _id: new mongoose.Types.ObjectId(),
          orderId: faker.string.alphanumeric(8).toLocaleUpperCase(),
          customerName,
          orderDate,
          status,
          items,
          totalAmount,
        };
      };
      const fakeOrders = faker.helpers.multiple(createRandomOrders, {
        count: dataLimit,
      });
      // const count = await order.countDocuments();
      // if (count) {
      //   console.log(`Data already exist : ${count}`);
      //   return;
      // }
      const fakeData = await order.create(fakeOrders);
      //   console.log(JSON.stringify(fakeData, null, 2));
      return {
        data: fakeData,
      };
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong");
    }
  };
}

const ordersMaker = new OrdersMaker();
export default ordersMaker;
