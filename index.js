// 9. In the project's root directory, generate an 'index.js' file to solicit two user inputs via commands. Execute all operations specified in 'lib/math.js' according to the given commands. The structure of your project would look something like this:
// 10. project-root/

// |-- index.js

// |-- lib/

// |   |-- math.js
// 11. Using the Node.js `fs` module, save the aforementioned solution to a CSV file in the following manner



import { add, div, mult, sub } from "./lib/math.js";
import readline from "readline";
import fs from "fs";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => new Promise((res) => readLine.question(query, res));

const main = async () => {
  try {
    const firstNumber = await question("Enter the first number: ");
    const num1 = Number(firstNumber);
    if (isNaN(num1)) throw new Error("Invalid first number");

    const secondNumber = await question("Enter the second number: ");
    const num2 = Number(secondNumber);
    if (isNaN(num2)) throw new Error("Invalid second number");

    const operation = await question(
      "Enter the operation (add, sub, mult, div): "
    );

    let result;
    switch (operation.toLowerCase().trim()) {
      case "add":
        result = add(num1, num2);
        break;
      case "sub":
        result = sub(num1, num2);
        break;
      case "mult":
        result = mult(num1, num2);
        break;
      case "div":
        result = div(num1, num2);
        break;
      default:
        console.log("Invalid operation");
        readLine.close();
        return;
    }

    console.log(`The result is: ${result}`);

    const csvLine = `${operation},${num1},${num2},${result}\n`;

    fs.appendFile("results.csv", csvLine, (err) => {
      if (err) {
        console.error("Failed to save to CSV:", err);
      }
      console.log("Result saved to results.csv");
    });
  } catch (error) {
    console.log(`Error has occurred: ${error.message}`);
  } finally {
    readLine.close();
  }
};
main();
