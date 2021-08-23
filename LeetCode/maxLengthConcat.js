function maxLength(arr: string[]): number {
  if(arr.length === 1) {
      let uniqSet = new Set();
      for(let i = 0; i < arr[0].length; i++) {
          uniqSet.add(arr[0][i]);
      }
      return uniqSet.size;
  }

  let maximumUniqStringLength: number = 0;

  let pointerOne: number = 0;
  let pointerTwo: number = pointerOne + 1;
  let continuousPointer: number = pointerTwo;
  let possibleUniqString = '';
  possibleUniqString += arr[pointerOne];

  while(pointerTwo < arr.length) {
      if(continuousPointer === arr.length) {
          possibleUniqString = '';
          possibleUniqString += arr[pointerOne];
          pointerOne++;
          pointerTwo = pointerOne + 1;
          continuousPointer = pointerTwo;
      }
      if(isUniqueString(possibleUniqString)) {
          possibleUniqString += arr[continuousPointer];
          continuousPointer++;
          maximumUniqStringLength = Math.max(maximumUniqStringLength, possibleUniqString.length);
      } else {
          continuousPointer++;
      }
      console.log(possibleUniqString);
  }
  return maximumUniqStringLength;
};


function isUniqueString(text: string): boolean {
  let uniqChar = {};
  for(let i = 0; i < text.length; i++) {
      if(text[i] in uniqChar) {
          return false;
      } else {
          uniqChar[text[i]] = 1;
      }
  }
  return true;
}