/* eslint-disable semi */
/* eslint-disable */
import readlineSync from "readline-sync";

export default () => {
  const userName = readlineSync.question("May I have your name? ");
  return userName;
};

export const question = () => {
  const ask = readlineSync.question("Question: ");
  return ask;
};
