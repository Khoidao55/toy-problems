//Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

const longestSubstring = (str, k) => {
  let charObj = {};
  let longestSubstring = 0;
  let windowStart = 0;
  let longestRepeatingChar = 0;

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let endChar = str[windowEnd];
    if(!(endChar in charObj)) charObj[endChar] = 1;
    charObj[endChar] += 1;
    longestRepeatingChar = Math.max(longestRepeatingChar, charObj[endChar]);
    //keep track of how many characters are not repeated inside of this window
    //take length of window + 1 - the longest repeating chars
    if(((windowEnd - windowStart + 1) - longestRepeatingChar) > k) {
      charObj[windowStart] -= 1;
      windowStart++;
    }
    longestSubstring = Math.max(longestSubstring, windowEnd - windowStart);
  }
  return longestSubstring;
}

/*
k = 2;
"aabccbb"
[a, b, c, c]
longest = 2;
{a: 2, b: 1, c:2}
*/
module.exports = longestSubstring;