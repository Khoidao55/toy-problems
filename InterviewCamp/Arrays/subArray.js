
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

console.log(subArraySum([1,2,3,5,2], 8));