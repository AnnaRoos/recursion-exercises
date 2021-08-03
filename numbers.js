const fibonacci = (number) => {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
};

console.log(fibonacci(2));

//Fibonacci optimized using memoization

const memoizedCache = new Map();
memoizedCache.set(0, 0);
memoizedCache.set(1, 1);

const optimizedFibonacci = (number) => {
  if (memoizedCache.has(number)) {
    return memoizedCache.get(number);
  }
  const result =
    optimizedFibonacci(number - 1) + optimizedFibonacci(number - 2);
  memoizedCache.set(number, result);
  return result;
};

console.log(optimizedFibonacci(2));

const numberToBinary = (number, result = '') => {
  if (number === 0) {
    return result;
  }
  result = (number % 2) + result;
  return numberToBinary(Math.floor(number / 2), result);
};

console.log(numberToBinary(23));
