//Given a string, find the length of the longest substring, which has no repeating characters.

const noRepeats = str => {
  let lengthOfString = 0;
  let noRepeatSubstring = [];
  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    noRepeatSubstring.push(str[windowEnd]);
    if(!isRepeat(noRepeatSubstring)) {
      noRepeatSubstring.shift();
    }
    lengthOfString = Math.max(lengthOfString, noRepeatSubstring.length);
  }
  return lengthOfString;
}

const isRepeat = str => {
  let strObj = {};

  for(let i = 0; i < str.length; i++) {
    if(str[i] in strObj) {
      return false;
    } else {
      strObj[str[i]] = 1;
    }
  }
  return true;
}

module.exports = noRepeats;