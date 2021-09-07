const findAverage = (arr, k) => {
  //find continuous subarray averages with given K size.
  let resultArr = [];
  let conArrSum = 0;
  let startElement = 0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    conArrSum += arr[windowEnd];
    if(windowEnd >= k - 1) {
      /*we want to remove the first element and add the next element every time we
      move through the arr. Ex: if the window is 5, we want to keep the 4 elements, e
      xcluding the first element */
      resultArr.push(conArrSum / k);
      conArrSum -= arr[startElement];
      startElement++;
    }
  }
  return resultArr;
}


const arr = [1,3,2,6,-1,4,1,8,2];

//console.log(findAverage(arr, 5));

module.exports = findAverage;