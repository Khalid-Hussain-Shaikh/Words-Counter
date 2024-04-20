#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log("=".repeat(60));
console.log(
  chalk.bold.cyanBright("\tWelcome to Khalid Shaikh - Words Counter")
);
console.log("=".repeat(60));

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    type: "input",
    name: "Sentence",
    message: "Enter your Sentence to count the words:",
  },
]);
const words = answers.Sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(words);
console.log(chalk.yellow(`Your sentence word count is: ${words.length}`));
console.log("=".repeat(60));
