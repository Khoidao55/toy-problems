//Given a string, find the length of the longest substring in it with no more than K distinct characters.

const distinctSubstring = (str, k) => {
  let maxSubStringLength = -Infinity;
  let substringArr = [];
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    substringArr.push(str[windowEnd]);
    if(!isDistinct(substringArr, k)) {
      maxSubStringLength = Math.max(maxSubStringLength, substringArr.length - 1);
      substringArr.shift(str[windowStart]);
      windowStart++;
    }
  }
  if(windowStart === 0) {
    return substringArr.length;
  }
  return maxSubStringLength;
}

const isDistinct = (strArr, k) => {
  let distinct = {};
  for(let i = 0; i < strArr.length; i++) {
      distinct[strArr[i]] = 1;
  }
  //console.log(Object.keys(distinct).length);
  if(Object.keys(distinct).length > k) {
    return false;
  }
  return true;
}

console.log(distinctSubstring("cbbebi", 10));
module.exports = distinctSubstring;