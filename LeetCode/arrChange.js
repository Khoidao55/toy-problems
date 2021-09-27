const arrayChange = (arr) => {
  let largestEl = 0;
  for(let i = 0; i < arr.length; i++) {
    largestEl = Math.max(largestEl, arr[i]);
  }
  const arrExcludingLargest = arr.filter(el => el !== largestEl);
  debugger;
  return findCombo(0, arrExcludingLargest, largestEl, 0);
}

const findCombo = (start, arr, largestEl, sum) => {
  if(sum === largestEl) return true;
  if(start === arr.length) return false;

  for(let i = start; i < arr.length; i++) {
    const possibleSum = sum + arr[start];
    if(possibleSum > largestEl) {
      return findCombo(start + 1, arr, largestEl, sum);
    } else {
      return findCombo(start + 1, arr, largestEl, possibleSum);
    }
  }
}

console.log(arrayChange([3,1,2,6]));
