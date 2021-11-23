import readlineSync from 'readline-sync';

const playGame = (rules, getGameData) => {
  const MAX_QUESTIONS = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ', name, '!');

  console.log(rules);

  for (let i = 0; i < MAX_QUESTIONS; i += 1) {
    const [question, answer] = getGameData();

    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
