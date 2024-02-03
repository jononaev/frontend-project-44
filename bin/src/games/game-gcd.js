import general from "../index.js";
const description = "Find the greatest common divisor of given numbers.";
const getRound = () => {
  const random1 = Math.floor(Math.random() * 20);
  const random2 = Math.floor(Math.random() * 30);

  const question = `${random1} ${random2}`;

  function NOD(random2, random1) {
    if (random1 > random2) return NOD(random1, random2);
    else if (!random1) return random2;
    return NOD(random1, random2 % random1);
  }
  let nod = NOD(random1, random2 % random1);

  const correctAnswer = nod;

  return [question, correctAnswer];
};
export function gcd() {
  general(description, getRound);
}
