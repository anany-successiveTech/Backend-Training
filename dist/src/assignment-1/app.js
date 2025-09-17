// 9. In the project's root directory, generate an 'index.js' file to solicit two user inputs via commands. Execute all operations specified in 'lib/math.js' according to the given commands. The structure of your project would look something like this:
// 10. project-root/
// |-- index.js
// |-- lib/
// |   |-- math.js
// 11. Using the Node.js `fs` module, save the aforementioned solution to a CSV file in the following manner
import { add, sub, mult, div } from "../../lib/math.js";
import readline from "readline";
import fs from "fs";
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
readLine.question("Enter the first number: ", (firstInput) => {
    const num1 = Number(firstInput);
    readLine.question("Enter the second number: ", (secondInput) => {
        const num2 = Number(secondInput);
        const addResult = add(num1, num2);
        const subResult = sub(num1, num2);
        const multResult = mult(num1, num2);
        let divResult = "Cannot divide by 0";
        if (num2 !== 0) {
            divResult = div(num1, num2);
        }
        console.log(`Add: ${addResult}`);
        console.log(`Sub: ${subResult}`);
        console.log(`Mult: ${multResult}`);
        console.log(`Div: ${divResult}`);
        const csv = `add,${num1},${num2},${addResult}\n` +
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
//# sourceMappingURL=app.js.map