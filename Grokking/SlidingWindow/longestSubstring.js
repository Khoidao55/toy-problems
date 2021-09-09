//Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

const longestSubstring = (str, k) => {
  let longestSubstring = -Infinity;
  let charObj = {};
  let numOfRepeatingChar = 0;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let currentChar = str[windowEnd];
    if(!(currentChar in charObj)) {
      charObj[currentChar] = 0;
    }
    charObj[currentChar]++;
    numOfRepeatingChar = Math.max(numOfRepeatingChar, charObj[currentChar]);

    if((windowEnd - windowStart + 1 - numOfRepeatingChar) > k) {
      let startChar = str[windowStart];
      windowStart++;
      charObj[startChar]--;
    }

    longestSubstring = Math.max(longestSubstring, windowEnd - windowStart + 1);
  }
  return longestSubstring;
}

//sum: 4
//char{ b: 1, c: 2}

module.exports = longestSubstring;