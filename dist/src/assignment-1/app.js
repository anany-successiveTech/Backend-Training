"use strict";
// 9. In the project's root directory, generate an 'index.js' file to solicit two user inputs via commands. Execute all operations specified in 'lib/math.js' according to the given commands. The structure of your project would look something like this:
// 10. project-root/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// |-- index.js
// |-- lib/
// |   |-- math.js
// 11. Using the Node.js `fs` module, save the aforementioned solution to a CSV file in the following manner
const math_1 = require("../lib/math");
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const readLine = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
readLine.question("Enter the first number: ", (firstInput) => {
    const num1 = Number(firstInput);
    readLine.question("Enter the second number: ", (secondInput) => {
        const num2 = Number(secondInput);
        const addResult = (0, math_1.add)(num1, num2);
        const subResult = (0, math_1.sub)(num1, num2);
        const multResult = (0, math_1.mult)(num1, num2);
        let divResult = "Cannot divide by 0";
        if (num2 !== 0) {
            divResult = (0, math_1.div)(num1, num2);
        }
        console.log(`Add: ${addResult}`);
        console.log(`Sub: ${subResult}`);
        console.log(`Mult: ${multResult}`);
        console.log(`Div: ${divResult}`);
        const csv = `add,${num1},${num2},${addResult}\n` +
            `sub,${num1},${num2},${subResult}\n` +
            `mult,${num1},${num2},${multResult}\n` +
            `div,${num1},${num2},${divResult}\n`;
        fs_1.default.appendFile("results.csv", csv, (err) => {
            if (err) {
                console.error("Error writing to CSV:", err);
            }
            console.log("Results saved to results.csv");
            readLine.close();
        });
    });
});
//# sourceMappingURL=app.js.map