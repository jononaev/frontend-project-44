import readlineSync from "readline-sync";

function general(description, getRound) {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name?");
  console.log("Hello, " + userName + "!");
  console.log(description);
  let i = 0;
  while (i < 3) {
    const [question, correctAnswer, reply] = getRound();
    readlineSync.question(`Question: ${question}`);
    let answer = readlineSync.question("Your answer:");
    let ans = Number(answer);
    if (ans === correctAnswer) {
      console.log("Correct!");
    } else if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${userName}`);
      break;
    }
    if (i === 2) {
      console.log("Congratulations, " + userName + "!");
      break;
    }
    i++;
  }
}
export default general;
