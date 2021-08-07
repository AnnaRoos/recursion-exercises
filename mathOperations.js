const sumValues = (number, sum = 0) => {
  if (number < 1) {
    return sum;
  }
  sum += number;
  return sumValues(number - 1, sum);
};

console.log(sumValues(10));

//same function - shorter
const recursiveSummation = (number) => {
  if (number <= 1) {
    return number;
  }
  return number + sumValues(number - 1);
};

console.log(recursiveSummation(10));

const factorial = (number) => {
  if (number <= 1) {
    return number;
  }
  return number * factorial(number - 1);
};

console.log(factorial(5));

const factorialTwo = (number) => {
  if (number > 0) {
    return number * factorial(number - 1);
  }
  return 1;
};

const factorialTernary = (number) => {
  return number < 2 ? 1 : number * factorial(number - 1);
};
 
//Tail-call recursion optmization not fully supported in Javascript

const tailFactorial = (number, multiplyer) => {
  if (number > 0) {
    return tailFactorial(number - 1, number * multiplyer);
  }
  return multiplyer;
};

const factorialOptimized = (number) => {
  return tailFactorial(number, 1);
};
