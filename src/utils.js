const MAX_QUESTIONS = 3;

const getRandomNumber = (min, max, digit = 0) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    // eslint-disable-next-line
    [min, max] = [max, min];
  }

  return digit === 0
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : ((Math.random() * (max - min + min)) + min).toFixed(digit);
};

export { getRandomNumber, MAX_QUESTIONS };
