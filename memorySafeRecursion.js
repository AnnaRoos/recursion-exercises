//From this article: https://medium.com/openmindonline/js-monday-06-adopting-memory-safe-recursion-d26dcee409c9#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2Mjk0OTE3NGYxZWVkZjRmOWY5NDM0ODc3YmU0ODNiMzI0MTQwZjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2Mjg2MTcwODMsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMjYxMTEwMTcyNTI0Njk2MTQ4OSIsImhkIjoiaHlwZXJpc2xhbmQuc2UiLCJlbWFpbCI6ImFubmEucm9vc0BoeXBlcmlzbGFuZC5zZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiQW5uYSBSb29zIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpSeWYzN0pMWnZaVS1wZ2ViWDhPcUV6WldwZnlqUkpLNi1DdHdSPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFubmEiLCJmYW1pbHlfbmFtZSI6IlJvb3MiLCJpYXQiOjE2Mjg2MTczODMsImV4cCI6MTYyODYyMDk4MywianRpIjoiZGM0NjQ3YWNkYzgwMjE3ZmZjY2ZkZTAxODZhMDBlMWUxNDk5MTlhMiJ9.ome1PznizCZpl0F2E0md-8mnR4PvxCyhtkynjAWb8mK_QLOM1ukL2_TDyd4KRO5QIOCIO9g3Rj9MrpddfNI4ki34QpdTI-Y-Pjx-xS6Hhcaw-KHFUvQpLvYkR6H6RK3wEJg64lhc6q6tf0t6-RUHll7MLwb0YPa7Q7o1NV6Day8Ag_Me-UVrDW6XsXsoggM4fQlDzLr2CMsUU29m35d6wGVOfMJ7oe4SCl2djUjDrFUFlk1HHt5mO9WpwilVmJ1p0Hk-XCBcOhRtApgdqZWJOKn5TxTvrE8dyYozDohq1eYbxmjzC_tQ_PQKDsYkMe9f3EorSBlNqrOecT84I5mloA
//Tail call elimination
//Implementing tail call elimination in our factorial function will ensure that we won’t add 
//a new stack frame to the call stack every time we adopt recursion
const tceFactorial = (num) => {
  const tce = (num, res) => {
    return num === 0 ? res : tce(num - 1, num * res);
  };
  return tce(num, 1);
};

console.log(tceFactorial(5));

//Trampolines
//A trampoline is a loop that iteratively invokes thunk-returning functions 
//But takes much longer time
const trampoline = fn => (...args) => {
  let result = fn(...args);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
}

function trampolinedFactorial(num) {
  function factorial(acc, num) {
    return num === 0 ? acc : () => factorial(acc * num, num - 1);
  }

  function trampoline(func) {
    let result = func;
    while (result && typeof (result) === 'function') {
      result = result();
    }
    return result;
  }
  return trampoline(factorial(1, num));
}

console.log(trampolinedFactorial(5));


//Universal memoization function from this article: https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0]; //just taking one argument here
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

//Creating a memoized function with the above

const memoizedFunction = memoize(recursiveFunction);

//Calling it

memoizedFunction(arguments);

//Fibonacci optimized using memoization

const memoizedCache = new Map();
memoizedCache.set(1, 0);
memoizedCache.set(2, 1);
memoizedCache.set(3, 1);

const optimizedFibonacci = (number) => {
  if (memoizedCache.has(number)) {
    return memoizedCache.get(number);
  }
  const result =
    optimizedFibonacci(number - 1) + optimizedFibonacci(number - 2);
  memoizedCache.set(number, result);
  return result;
};

console.log(optimizedFibonacci(11));

const memoFibonacci = (number, memo) => {
  memo = memo || {};
  if (memo[number]) return memo[number];
  if (number <= 3) return 1;
  return memo[number] = memoFibonacci(number - 1, memo) + memoFibonacci(number - 2, memo);
}


console.log(memoFibonacci(11));

