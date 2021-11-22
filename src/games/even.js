import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import cli from '../cli.js';

const MAX_QUESTIONS = 3;

const isEven = (number) => (number % 2 === 0);

const playEvenOrOdd = () => {
  console.log('Welcome to the Brain Games!');
  const name = cli('May I have your name? ');

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rules);

  let counter = 0;

  for (let i = 0; i < MAX_QUESTIONS; i += 1) {
    counter += 1;

    const randomNumber = getRandomNumber(0, 100);
    console.log('Question: ', randomNumber);

    const rightAnswer = isEven(randomNumber) === true ? 'yes' : 'no';

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playEvenOrOdd;
