/*
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have n!n! permutations.
*/


const permutationString = (string, pattern) => {
  //let isPermutation = false;
  let patternObj = {};
  for(let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if(char in patternObj) {
      patternObj[char]++;
    } else {
      patternObj[char] = 1;
    }
  }

  let windowStart = 0;
  let matched = 0;
  for(let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    let startChar = string[windowEnd];
    if(matched === Object.keys(patternObj).length) return true;
    if(startChar in patternObj && patternObj[startChar] > 0) {
      matched++;
    } else {
      windowStart++;
      matched = 0;
    }
  }
  return false;
}