/*
A + sum(every digit in A) = B
Given B, print all possible A
Example:
12 + (1 + 2) = 15
123456789 + (1+2+3+4+5+6+7+8+9) = 123456834
*/

const sumEveryDigitInA = (n) => {
  const numString = n.toString().split("");
  let sum = 0;

  for (let i = 0; i < numString.length; i++) {
    sum += Number(numString[i]);
  }

  return n + sum;
};

console.log(sumEveryDigitInA(12));
console.log(sumEveryDigitInA(123456789));
