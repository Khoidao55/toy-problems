//Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallestSubArr = (arr, s) => {
  let smallestSubArrayLength = Infinity;
  let sumOfContinuousArr = 0;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sumOfContinuousArr += arr[windowEnd];
    while(sumOfContinuousArr >= s) {
      smallestSubArrayLength = Math.min(smallestSubArrayLength, windowEnd - windowStart + 1);
      sumOfContinuousArr -= arr[windowStart];
      windowStart++;
    }
  }
  return smallestSubArrayLength || 0;
}

module.exports = smallestSubArr;