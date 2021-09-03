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

