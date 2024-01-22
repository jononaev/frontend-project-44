import readlineSync from "readline-sync";

export const playGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    let question = readlineSync.question("Question: ");

    if (question % 2 === 0) {
      let evenNum = readlineSync.question("Answer: ");

      if (evenNum === "no") {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log("Let's try again, " + userName + "!");
        break;
      }
    } else {
      let oddNum = readlineSync.question("Answer: ");
      if (oddNum === "yes") {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again, " + userName + "!");
        break;
      }
    }
    if (i === 2) {
      console.log("Congratulations, " + userName + "!");
      break;
    }
    console.log("Correct!");
    i++;
  }
};
