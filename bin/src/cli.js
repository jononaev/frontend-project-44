import readlineSync from "readline-sync";

export default (name) => {
  const userName = readlineSync.question(`May I have your name? `);

  return userName;
};
