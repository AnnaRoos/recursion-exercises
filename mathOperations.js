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

//Another way of writing it - from this article: https://medium.com/openmindonline/js-monday-06-adopting-memory-safe-recursion-d26dcee409c9#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2Mjk0OTE3NGYxZWVkZjRmOWY5NDM0ODc3YmU0ODNiMzI0MTQwZjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2Mjg2MTcwODMsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMjYxMTEwMTcyNTI0Njk2MTQ4OSIsImhkIjoiaHlwZXJpc2xhbmQuc2UiLCJlbWFpbCI6ImFubmEucm9vc0BoeXBlcmlzbGFuZC5zZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiQW5uYSBSb29zIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpSeWYzN0pMWnZaVS1wZ2ViWDhPcUV6WldwZnlqUkpLNi1DdHdSPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFubmEiLCJmYW1pbHlfbmFtZSI6IlJvb3MiLCJpYXQiOjE2Mjg2MTczODMsImV4cCI6MTYyODYyMDk4MywianRpIjoiZGM0NjQ3YWNkYzgwMjE3ZmZjY2ZkZTAxODZhMDBlMWUxNDk5MTlhMiJ9.ome1PznizCZpl0F2E0md-8mnR4PvxCyhtkynjAWb8mK_QLOM1ukL2_TDyd4KRO5QIOCIO9g3Rj9MrpddfNI4ki34QpdTI-Y-Pjx-xS6Hhcaw-KHFUvQpLvYkR6H6RK3wEJg64lhc6q6tf0t6-RUHll7MLwb0YPa7Q7o1NV6Day8Ag_Me-UVrDW6XsXsoggM4fQlDzLr2CMsUU29m35d6wGVOfMJ7oe4SCl2djUjDrFUFlk1HHt5mO9WpwilVmJ1p0Hk-XCBcOhRtApgdqZWJOKn5TxTvrE8dyYozDohq1eYbxmjzC_tQ_PQKDsYkMe9f3EorSBlNqrOecT84I5mloA
const tceFactorial = (num) => {
  const tce = (num, res) => {
    return num === 0 ? res : tce(num - 1, num * res);
  }
  return tce(num, 1);
}

console.log(tceFactorial(5));


//Trampolined factorial

