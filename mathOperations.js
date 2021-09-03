const sum = (number) => {
  return number <= 1 ? number : sum(number - 1);
};

console.log(sum(10));

const factorial = (number) => {
  return number <= 1 ? number : number * factorial(number - 1);
};

console.log(factorial(5));

const factorialTwo = (number) => {
  if (number > 0) {
    return number * factorial(number - 1);
  }
  return 1;
};

 
//Tail call optmization not fully supported in Javascript

const tailFactorial = (number, multiplyer) => {
  if (number > 0) {
    return tailFactorial(number - 1, number * multiplyer);
  }
  return multiplyer;
};

const factorialOptimized = (number) => {
  return tailFactorial(number, 1);
};



