#!/usr/bin/env node
/*console.log("Welcome to the Brain Games!");*/
/*console.log("May I have your name? John");*/
/*console.log("Hello, John!");*/

import getBirthYear from "./src/cli.js";

const user = "";
console.log("Welcome to the Brain Games!");
const name = getBirthYear(user);
console.log("Hello, " + name + "!");
