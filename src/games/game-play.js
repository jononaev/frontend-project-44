import general from "../index.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const evenOddHandler = () => {
  let number = Math.floor(Math.random() * 100);
  let question = String(number);
  let correctAnswer = number % 2 === 0 ? "yes" : "no";

  return [question, correctAnswer];
};
export function playGame() {
  general(description, evenOddHandler);
}
