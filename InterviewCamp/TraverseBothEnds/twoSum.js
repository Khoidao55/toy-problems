//sorted array
const twoSum = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let sumArr = [];

  while(start < end) {
    let sum = start + end;

    if(sum > target) {
      end--;
    } else if(sum < target) {
      start++;
    } else {
      sumArr.push(start, end);
      break;
    }
  }
  return sumArr;
}

console.log(twoSum([1,2,3,4,5,6,7], 11))