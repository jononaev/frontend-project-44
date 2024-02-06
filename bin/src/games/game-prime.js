import general from "../index.js";

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRound = () => {
  let number = Math.round(Math.random() * 10);
  let question = String(number);
  let correctAnswer = isPrime(number) ? "yes" : "no";

  return [question, correctAnswer];
};

export function prime() {
  general(description, getRound);
}
