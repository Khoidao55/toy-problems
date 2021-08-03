/*
print all combination of length 3
*/

const combinationAux = (arr) => {
  debugger;
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

//onsole.log(combinationAux([1,2,3,4,5,6,7]));
// i = 4
// [1, , ]
// [1, 2, ]
// [1, 2, 3]

const phoneMnemonics = (n) => {
  let phoneLetters = {
    '0': [],
    '1': [],
    '2': ['A', 'B', 'C'],
    '3': ['D', 'E', 'F'],
    '4': ['G', 'H', 'I'],
    '5': ['J', 'K', 'L'],
    '6': ['M', 'N', 'O'],
    '7': ['P', 'Q', 'R', 'S'],
    '8': ['T', 'U', 'V'],
    '9': ['W', 'X', 'Y', 'Z']
  }

  solvePhoneMnemonics(n.split(''), [], 0, 0, phoneLetters);
}

const solvePhoneMnemonics = (n, buffer, nextIdx, bufferIdx, phoneLetters) => {
  if(bufferIdx === 3 || nextIdx === n.length) {
    console.log(buffer);
    return;
  }

  if(nextIdx === n.length) {
    return;
  }

  let letters = phoneLetters[n[nextIdx]];
  if(letters.length === 0) {
    solvePhoneMnemonics(n, buffer, nextIdx + 1, bufferIdx, phoneLetters);
  }
  for(let char of letters) {
    buffer[bufferIdx] = char;
    solvePhoneMnemonics(n, buffer, nextIdx + 1, bufferIdx + 1, phoneLetters);
  }
}

console.log(phoneMnemonics('123'));