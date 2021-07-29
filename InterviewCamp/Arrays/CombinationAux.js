/*
print all combination of length 3
*/

const combinationAux = (arr) => {
  return printCombos(arr, [], 0, 0);
  //return answerArr;
}

const printCombos = (arr, buffer, startingIdx, bufferIdx) => {
  if(bufferIdx === 3) {
    console.log(buffer);
    return;
  }

  if(startingIdx === arr.length) {
    return;
  }

  for(let i = startingIdx; i < arr.length; i++) {
    buffer[bufferIdx] = arr[i];
    printCombos(arr, buffer, i + 1, bufferIdx + 1);
  }
}

console.log(combinationAux([1,2,3,4,5,6,7]));
// i = 4
// [1, , ]
// [1, 2, ]
// [1, 2, 3]