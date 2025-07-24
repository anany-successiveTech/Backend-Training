// 8. Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, and division, respectively in math.js. Utilize the lodash dependency for executing the aforementioned operations. Export all the above methods to make them accessible in any file.

import _ from "lodash";

const add = (num1:number, num2:number) => _.add(num1, num2);

const sub = (num1:number, num2:number) => _.subtract(num1, num2);

const mult = (num1:number, num2:number) => _.multiply(num1, num2);

const div = (num1:number, num2:number) => {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return _.divide(num1, num2);
};
export{
  add,
  sub,
  div,
  mult,
};
