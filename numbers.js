const fibonacci = (number) => {
    return number < 2 ? number : fibonacci(number - 1) + fibonacci(number - 2);
};

console.log(fibonacci(2));


const numberToBinary = (number, result = '') => {
  if (number === 0) {
    return result;
  }
  result = (number % 2) + result;
  return numberToBinary(Math.floor(number / 2), result);
};

console.log(numberToBinary(23));
