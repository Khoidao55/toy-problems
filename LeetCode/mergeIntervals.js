//time com: O(n log n) due to sorting
//space com: O(n) due to creating a new array to store subarrays.



var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const overlappingArr = [intervals[0]];
  for(const element of intervals) {
      let prev = overlappingArr[overlappingArr.length - 1];
      if(prev[1] >= element[0]) {
       prev[1] = Math.max(element[1], prev[1]);
      } else {
          overlappingArr.push(element);
      }
  }
  return overlappingArr;
};

// my solution
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const overlappingArr = [intervals[0]];
  let pointerTwo = 1;

  while(pointerTwo < intervals.length) {
      let firstElement = overlappingArr[overlappingArr.length - 1];
      let secondElement = intervals[pointerTwo][0];
      if(firstElement[1] >= secondElement) {
          firstElement[1] = Math.max(firstElement[1], intervals[pointerTwo][1]);
      } else {
          overlappingArr.push(intervals[pointerTwo]);
      }
      pointerTwo++;
  }
  return overlappingArr;
};