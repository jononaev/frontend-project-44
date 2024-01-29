import general from "../index.js";
const description = "What is the result of the expression?";
const getRound = () => {
  const random1 = Math.round(Math.random() * 10);
  const random2 = Math.round(Math.random() * 10);
  const opretors = ["+", "-", "*"];
  let opindex = Math.floor(Math.random() * 3);
  let opretor = opretors[opindex];
  const question = `${random1} ${opretor} ${random2}`;

  function result() {
    if (opretor === "+") {
      return random1 + random2;
    } else if (opretor === "-") {
      return random1 - random2;
    } else {
      return random1 * random2;
    }
  }
  const correctAnswer = result();
  return [question, correctAnswer];
};

export function Calc() {
  general(description, getRound);
}
