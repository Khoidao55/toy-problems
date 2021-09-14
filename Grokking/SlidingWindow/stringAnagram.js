/*
Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!N! permutations (or anagrams) of a string having NN characters. For example, here are the six anagrams of the string “abc”:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

*/

const find_string_anagrams = function(str, pattern) {
  let patternObj = {};
   for(let i = 0; i < pattern.length; i++) {
     let char = pattern[i].toLowerCase();
     if(char in patternObj) {
       patternObj[char]++;
     } else {
       patternObj[char] = 1;
     }
   }

   let matched = 0;
   let output = [];
   let windowStart = 0;
   let copyPattern = { ...patternObj };
   for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
     let startChar = str[windowEnd];
     if(matched === Object.keys(copyPattern).length) return output;
     if(startChar in copyPattern && copyPattern[startChar] > 0) {
       matched++;
       copyPattern[startChar]--;
       output.push(windowStart);
       windowStart++;
     } else {
       matched = 0;
       output = [];
       copyPattern = { ...patternObj };
     }

   }
   return output;
 };
