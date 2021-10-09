const arrayChange = (arr) => {
  let largestEl = 0;
  for(let i = 0; i < arr.length; i++) {
    largestEl = Math.max(largestEl, arr[i]);
  }
  const arrExcludingLargest = arr.filter(el => el !== largestEl && el !== 0);
  return findCombo(arrExcludingLargest, largestEl, 0) ? true : false;
}

const findCombo = (arr, largestEl, sum) => {
  if(sum === largestEl) {
    return true;
  }
  if(sum > largestEl)  return;
  for(let i = 0; i < arr.length; i++) {
    const n = arr[i];
    const remaining = arr.slice(i + 1);
    let isValid = findCombo(remaining, largestEl, sum + n);
    if(isValid) return true;
    //return findCombo(remaining, largestEl, sum + n);
  }
}

console.log(arrayChange([2,3]))