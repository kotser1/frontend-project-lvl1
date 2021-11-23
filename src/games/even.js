import { getRandomNumber } from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenGameData = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = randomNumber;
  const answer = isEven(randomNumber) === true ? 'yes' : 'no';

  return [question, answer];
};

export { getEvenGameData, rules };
