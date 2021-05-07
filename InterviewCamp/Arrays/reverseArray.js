const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([3,4,2,3,7,1]));