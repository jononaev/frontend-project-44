#!/usr/bin/env node
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
/* eslint-disable */
import getBirthYear, { question } from "./src/cli.js";

console.log("Welcome to the Brain Games!");
const name = getBirthYear();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const ask = question();
if (ask % 2 === 0) {
  console.log("yes");
} else {
  console.log("no");
}
