import { getRandomNumber } from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const getGcdGameData = () => {
  const randomNumber1 = getRandomNumber(0, 30);
  const randomNumber2 = getRandomNumber(0, 30);

  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = getGcd(randomNumber1, randomNumber2);

  return [question, answer];
};

export { rules, getGcdGameData };
