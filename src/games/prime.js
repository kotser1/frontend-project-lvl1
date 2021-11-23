import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getPrimeGameData = () => {
  const question = getRandomNumber(0, 20);
  const answer = isPrime(question) === true ? 'yes' : 'no';

  return [question, answer];
};

export { rules, getPrimeGameData };
