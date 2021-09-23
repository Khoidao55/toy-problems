/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let count = 0;
  for(let i = s.length - 1; i >= 0; i--) {
      let char = s[i];
      if(char !== ' ') {
          count++;
          if(s[i - 1] === ' ') break;
      }
  }
  return count;
};