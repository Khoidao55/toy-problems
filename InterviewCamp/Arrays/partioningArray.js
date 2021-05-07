/*
Level: Easy
You are given an array of integers. Rearrange the array so that all zeroes are at the beginning of the array.
For example,a = [4,2,0,1,0,3,0] -> [0,0,0,4,1,2,3]
*/

const partitionArray = (arr) => {
  let partition = arr.length - 1;
  let pointer = arr.length - 1;

  while(pointer >= 0) {
    if(arr[pointer] === 0) {
      [arr[pointer], arr[partition]] = [arr[partition], arr[pointer]];
      partition--;
    }

    pointer--;
  }

  return arr;
}

//console.log(partitionArray([4,2,0,1,0,3,0]));


/*
Problem: Dutch National Flag
Level: Medium
You are given an array of integers and a pivot. Rearrange the array in the
following order:[all elements less than pivot, elements equal to pivot, elements greater than pivot]

For example,a = [5,2,4,4,6,4,4,3] and pivot = 4 --> result = [3,2,4,4,4,4,5,6].

*/

const dutchFlagPartition = (arr, pivot) => {
  let startBound = 0;
  let endBound = arr.length - 1;
  let i = 0;

  while(i <= endBound) {
    if (arr[i] > pivot) {
      [arr[i], arr[endBound]] = [arr[endBound], arr[i]];
      endBound--;
    } else if (arr[i] < pivot) {
      [arr[i], arr[startBound]] = [arr[startBound], arr[i]];
      startBound++;
      i++;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(dutchFlagPartition([3,2,4,1,6,3,7,5], 4));