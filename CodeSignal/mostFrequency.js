/*
Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array. Return the array of these digits in ascending order.

Example

For a = [25, 2, 3, 57, 38, 41], the output should be mostFrequentDigits(a) = [2, 3, 5].

Here are the number of times each digit appears in the array:

0 -> 0
1 -> 1
2 -> 2
3 -> 2
4 -> 1
5 -> 2
6 -> 0
7 -> 1
8 -> 1
The most number of times any number occurs in the array is 2, and the digits which appear 2 times are 2, 3 and 5. So the answer is [2, 3, 5].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

An array of positive integers.

Guaranteed constraints:
1 ≤ a.length ≤ 103,
1 ≤ a[i] < 100.

[output] array.integer

The array of most frequently occurring digits, sorted in ascending order.


*/
function mostFrequentDigits(a) {
  let digitCounter = {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
  }

  for(let i = 0; i < a.length; i++) {
      let stringDigit = a[i].toString();
      for(let i = 0; i < stringDigit.length; i++) {
          if(stringDigit[i] in digitCounter) {
              digitCounter[stringDigit[i]]++;
          }
      }
  }

  let mostCount = [];
  let max = -Infinity;
  for(let element in digitCounter) {
      if(max < digitCounter[element]) {
          max = digitCounter[element];
      }
  }

  for(let element in digitCounter) {
      if(digitCounter[element] === max) {
          mostCount.push(element);
      }
  }

  for(let i = 0; i < mostCount.length; i++) {
      mostCount[i] = Number(mostCount[i]);
  }
  return mostCount;
}
