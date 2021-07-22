
const subArraySum = (arr, target) => {
  let pointerOne = 0;
  let pointerTwo = 0;
  let sum = arr[pointerOne];
  while(pointerOne < arr.length) {
    if(pointerOne > pointerTwo) {
      end = start;
      sum = arr[pointerOne];
    }
    if (sum < target) {
      pointerTwo++;
      sum += arr[pointerTwo];
    } else if (sum > target) {
      sum -= arr[pointerOne];
      pointerOne++;
    } else {
      return [pointerOne, pointerTwo];
    }
  }
  return null;
}

//console.log(subArraySum([1,2,3,5,2], 8));

/*
Level: Medium
Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to 0.
For example: [2,4,-2,1,-3,5,-3] --> [4,-2,1,-3]
*/

const prefixSum = (arr) => {
  let sumMap = {};
  let sum = 0;
  let arrayOfIndexes = [];
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(sum === 0) {
      arrayOfIndexes.push(arr[0], i);
      break;
    }

    if(sum in sumMap) {
      arrayOfIndexes.push(sumMap[sum] + 1, i);
      break;
    } else {
      sumMap[sum] = i;
    }
  }

  if (arrayOfIndexes.length < 2) {
    return null;
  } else {
    return arr.slice(arrayOfIndexes[0], arrayOfIndexes[1] + 1);
  }
}

console.log(prefixSum([2,4,-2,1,-3,5,-3]));