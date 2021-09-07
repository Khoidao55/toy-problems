//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const maxSumSubArr = (arr, k) => {
  let maxSum = -Infinity;
  let possibleSum = 0;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    possibleSum += arr[windowEnd];

    if(windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, possibleSum);
      possibleSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}


module.exports = maxSumSubArr;