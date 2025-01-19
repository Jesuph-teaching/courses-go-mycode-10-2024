import chalk from "chalk";
import Factorial, { Fibonacci } from "./utils.js";

console.log(
  chalk.blue("Welcome to our project") + " : " + chalk.green("Just a test ")
);
console.log(chalk.red(Factorial(4)));
console.log(chalk.yellow(Fibonacci(7)));
