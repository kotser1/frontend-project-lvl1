import readlineSync from 'readline-sync';
import { getRandomNumber, MAX_QUESTIONS } from '../utils.js';
import cli from '../cli.js';

const playGameCalc = () => {
  const Actions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  console.log('Welcome to the Brain Games!');
  const name = cli('May I have your name? ');

  const rules = 'What is the result of the expression?';
  console.log(rules);

  let counter = 0;

  for (let i = 0; i < MAX_QUESTIONS; i += 1) {
    counter += 1;

    const randomNumber1 = getRandomNumber(0, 10);
    const randomNumber2 = getRandomNumber(0, 10);

    const operators = Object.keys(Actions);
    const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);

    const rightAnswer = Actions[randomOperator](randomNumber1, randomNumber2).toString();

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

export default playGameCalc;
