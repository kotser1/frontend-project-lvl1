import { getRandomNumber } from '../utils.js';

const rules = 'What number is missing in the progression?';

const generateProgression = () => {
  const startNumber = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progression = [startNumber];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + step);
  }

  return progression;
};

const getProgressionGameData = () => {
  const progression = generateProgression();
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[randomIndex];

  const progressionCopy = progression.slice();
  progressionCopy[randomIndex] = '..';
  const question = progressionCopy.join(' ');

  return [question, answer];
};

export { rules, getProgressionGameData };
