const reversedString = (input) => {
  if (input === '') {
    return '';
  }
  return reversedString(input.substring(1)) + input[0];
};

console.log(reversedString('hello'));

const isPalindrome = (input) => {
  if (input.length === 0 || input.length === 1) {
    return true;
  }
  if (input[0] === input[input.length - 1]) {
    return isPalindrome(input.substring(1, input.length - 1));
  }

  return false;
};

console.log(isPalindrome('nitalarbralatin'));
