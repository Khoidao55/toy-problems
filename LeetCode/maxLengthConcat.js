// function maxLength(arr: string[]): number {
//   if(arr.length === 1) {
//       let uniqSet = new Set();
//       for(let i = 0; i < arr[0].length; i++) {
//           uniqSet.add(arr[0][i]);
//       }
//       return uniqSet.size;
//   }

//   let maximumUniqStringLength: number = 0;

//   let pointerOne: number = 0;
//   let pointerTwo: number = pointerOne + 1;
//   let continuousPointer: number = pointerTwo;
//   let possibleUniqString = '';
//   possibleUniqString += arr[pointerOne];

//   while(pointerTwo < arr.length) {
//       if(continuousPointer === arr.length) {
//           possibleUniqString = '';
//           possibleUniqString += arr[pointerOne];
//           pointerOne++;
//           pointerTwo = pointerOne + 1;
//           continuousPointer = pointerTwo;
//       }
//       if(isUniqueString(possibleUniqString)) {
//           possibleUniqString += arr[continuousPointer];
//           continuousPointer++;
//           maximumUniqStringLength = Math.max(maximumUniqStringLength, possibleUniqString.length);
//       } else {
//           continuousPointer++;
//       }
//       console.log(possibleUniqString);
//   }
//   return maximumUniqStringLength;
// };


// function isUniqueString(text: string): boolean {
//   let uniqChar = {};
//   for(let i = 0; i < text.length; i++) {
//       if(text[i] in uniqChar) {
//           return false;
//       } else {
//           uniqChar[text[i]] = 1;
//       }
//   }
//   return true;
// }

/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    let maxUniqueLength = 0;
    if(isUnique(arr[0])) maxUniqueLength = Math.max(maxUniqueLength, arr[0].length);
    let pointerOne = 0;
    let pointerTwo = 1;
    let uniqueString = arr[pointerOne];
    debugger;
    while(pointerTwo < arr.length) {
        if(pointerTwo === arr.length) {
            if(isUnique(uniqueString)) {
                //uniqueString += arr[pointerTwo];
                maxUniqueLength = Math.max(maxUniqueLength, uniqueString.length);
            }
            pointerOne++;
            pointerTwo = pointerOne + 1;
            uniqueString = arr[pointerOne];
        }
        if(isUnique(uniqueString + arr[pointerTwo])) {
            uniqueString += arr[pointerTwo];
            maxUniqueLength = Math.max(maxUniqueLength, uniqueString.length);
        }
        pointerTwo++;
    }
    return maxUniqueLength;
};

const isUnique = str => {
    console.log('unique', str);
    let strObj = {};
    for(let char of str) {
        if(char in strObj) {
            return false;
        } else {
            strObj[char] = 1;
        }
    }
    return true;
}

console.log(maxLength(["cha","r","act","ers"]));