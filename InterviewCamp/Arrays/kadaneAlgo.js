

const kadane = (arr) => {
  let max = 0, maxEnding = 0;
  max = Math.max(arr[max], arr[maxEnding]);

  for(let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(arr[i], maxEnding + arr[i]);
    max = Math.max(max, maxEnding);
  }

  return max;
}

console.log(kadane([1,2,-1,2,-3,2,-5]));