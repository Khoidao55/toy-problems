//Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

const smallestWindow = (str, pattern) => {
  let patternObj = {};
  for(let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if(char in patternObj) {
      patternObj[char]++;
    } else {
      patternObj[char] = 1;
    }
  }

  //find smallest substring
  let windowStart = 0;
  let substringArr = [];
  let matched = 0;

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let endChar = str[windowEnd];
    if(endChar in patternObj && patternObj[endChar] > 1) {
      patternObj[endChar]--;
      substringArr.push(endChar);
      matched++;
    } else {
      let shiftedChar = substringArr.shift();
      patternObj[shiftedChar]++;
      matched = 0;
      windowStart++;
      if(str[windowStart] in patternObj && patternObj[str[windowStart]] > 1) {
        matched++;
        substringArr.push(windowStart);
      }
    }
  }

  if(matched === Object.keys(patternObj).length) {
    return substringArr.join('');
  } else {
    return '';
  }
}

//aabdec, abc
//window: a
//{a:0, b:0, c:1}
//[a, b, ], matched = 2
//shifted = a;