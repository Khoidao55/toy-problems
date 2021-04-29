/*
write a function called same, which accepts two arrays. The function should return true if every value in the array
has its corresponding value squared in the second array. The frequency of values must be the same.
*/

const same = (arrOne, arrTwo) => {
  let sameFrequency = true;
  let squaredArrayObject = {};
  if(arrOne.length !== arrTwo.length) {
    return false;
  }

  for(let i = 0; i < arrTwo.length; i++) {
    squaredArrayObject[arrTwo[i]] = 1;
  }
  console.log(squaredArrayObject);

  for(let i = 0; i < arrOne.length; i++) {
    let squaredValue = Math.pow(arrOne[i], 2);
    if(squaredValue in squaredArrayObject && squaredArrayObject[arrOne[i]] !== 0) {
      squaredArrayObject[arrOne[i]]--;
      continue;
    } else {
      sameFrequency = false;
    }
  }
  console.log(squaredArrayObject);
  return sameFrequency;
}

console.log(same([1,2,2], [4,4,1]));
