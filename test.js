import { add, div, mult, sub } from "./lib/math.js";
import readline from "readline";

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLineInterface.question("Enter the first number: ", (firstNumber) => {
  const num1 = Number(firstNumber);

  if (isNaN(num1)) {
    console.error("Invalid number.");
    return readLineInterface.close();
  }

  readLineInterface.question("Enter the second number: ", (secondNumber) => {
    const num2 = Number(secondNumber);

    if (isNaN(num2)) {
      console.error("Invalid number.");
      return readLineInterface.close();
    }

    readLineInterface.question(
      "Enter the operation (add, sub, mult, div): ",
      (operation) => {
        try {
          let result;

          switch ((operation.toLowerCase()).trim()) {
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
              console.error("Invalid operation.");
              readLineInterface.close();
              return;
          }

          console.log(`Result: ${result}`);
        } catch (error) {
          console.error(`Error: ${error.message}`);
        } finally {
          readLineInterface.close();
        }
      }
    );
  });
});
