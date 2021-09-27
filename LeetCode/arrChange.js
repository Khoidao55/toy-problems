const arrayChange = (arr) => {
  let largestEl = 0;
  for(let i = 0; i < arr.length; i++) {
    largestEl = Math.max(largestEl, arr[i]);
  }
  const arrExcludingLargest = arr.filter(el => el !== largestEl);
  for(let i = 0; i < arrExcludingLargest.length; i++) {
    if(findCombo(i, arrExcludingLargest, largestEl, 0)) return true;
  }
  return false;
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

// const arrayChange = (arr) => {
//   let largestEl = 0;
//   for(let i = 0; i < arr.length; i++) {
//     largestEl = Math.max(largestEl, arr[i]);
//   }
//   const arrExcludingLargest = arr.filter(el => el !== largestEl);

//   let travellingPointer = 0;
//   let sum = 0;

//   for(let i = travellingPointer; i < arrExcludingLargest.length; i++) {
//     let possibleSum = sum + arr[i];
//     if(possibleSum === largestEl) return true;
//     if(possibleSum > largestEl) continue;
//     else {
//       sum = possibleSum;
//     }
//   }
//   return false;
// }

console.log(arrayChange([2,2,1,6]));
