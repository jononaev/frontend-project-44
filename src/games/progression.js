import general from "../index.js";

const description = "What number is missing in the progression?";
const getRound = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const progression = [];
  for (let i = 1; i <= 10; i += 1) {
    const current = firstNumber * i;
    progression.push(current);
  }
  const hiddenNumber = Math.floor(Math.random() * 10);
  const answer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = "..";
  const question = progression.join(" ");

  return [question, answer];
};

export function progression() {
  general(description, getRound);
}
