/*
aaa => 3a
b2a2bb3c => b2a3b3c
baabb100ccc5dd => b2a2b102c6d
*/

const encoding = (string) => {
  let collectionOfNumbers = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  }

  let outputString = '';
  let continuousString = '';
  let continuousNumber = '';

  for(let i = 0; i < string.length; i++) {
    if(string[i] in collectionOfNumbers) {
      continuousNumber += string[i];
    } else {
      if(continuousNumber.length === 0) {
        continuousString += string[i];
        if(continuousString.charAt(0) === string[i + 1]) {
          continue;
        }
        else {
          continuousString.length === 1 ? outputString += continuousString.charAt(0) : outputString += continuousString.length + continuousString.charAt(0);
          continuousString = '';
        }
      } else {
        let numberInt = Number(continuousNumber);
        continuousString += string[i];
        if(continuousString.charAt(0) === string[i + 1]) {
          continue;
        }
        else {
          outputString += (numberInt + continuousString.length - 1) + continuousString.charAt(0);
          continuousNumber = '';
          continuousString = '';
        }
      }
    }
  }
  return outputString;
}
console.log('input: aaa', '\n' ,'correct output: 3a', '\n', 'code output:', encoding('aaa'));
console.log('input: b2a2bb3c', '\n', 'correct output: b2a3b3c', '\n', 'code output:', encoding('b2a3b3c'));
console.log('input: baabb100ccc5dd','\n','correct output: b2a2b102c6d', '\n','code output:', encoding('baabb100ccc5dd'));

