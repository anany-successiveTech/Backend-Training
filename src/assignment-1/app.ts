// 9. In the project's root directory, generate an 'index.js' file to solicit two user inputs via commands. Execute all operations specified in 'lib/math.js' according to the given commands. The structure of your project would look something like this:
// 10. project-root/

// |-- index.js

// |-- lib/

// |   |-- math.js
// 11. Using the Node.js `fs` module, save the aforementioned solution to a CSV file in the following manner

import { add, sub, mult, div } from "../lib/math"
import readline from "readline";
import fs from "fs";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Enter the first number: ", (firstInput: string) => {
  const num1: number = Number(firstInput);

  readLine.question("Enter the second number: ", (secondInput: string) => {
    const num2: number = Number(secondInput);

    const addResult: number = add(num1, num2);
    const subResult: number = sub(num1, num2);
    const multResult: number = mult(num1, num2);
    let divResult: number | string = "Cannot divide by 0";

    if (num2 !== 0) {
      divResult = div(num1, num2);
    }

    console.log(`Add: ${addResult}`);
    console.log(`Sub: ${subResult}`);
    console.log(`Mult: ${multResult}`);
    console.log(`Div: ${divResult}`);

    const csv: string =
      `add,${num1},${num2},${addResult}\n` +
      `sub,${num1},${num2},${subResult}\n` +
      `mult,${num1},${num2},${multResult}\n` +
      `div,${num1},${num2},${divResult}\n`;

    fs.appendFile("results.csv", csv, (err) => {
      if (err) {
        console.error("Error writing to CSV:", err);
      }
      console.log("Results saved to results.csv");
      readLine.close();
    });
  });
});
