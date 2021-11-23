import { getRandomNumber } from '../utils.js';

const rules = 'What is the result of the expression?';

const getCalcGameData = () => {
  const Actions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const randomNumber1 = getRandomNumber(0, 10);
  const randomNumber2 = getRandomNumber(0, 10);

  const operators = Object.keys(Actions);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  const answer = Actions[randomOperator](randomNumber1, randomNumber2);

  return [question, answer];
};

export { rules, getCalcGameData };
