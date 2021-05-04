/*
You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.

Example

For s = "a", the output should be
countVowelConsonant(s) = 1;

For s = "abcde", the output should be
countVowelConsonant(s) = 8.

The letters in s, converted to 1s and 2s and added together as described above: 1 + 2 + 2 + 2 + 1 = 8.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string consisting only of lowercase English letters.

Guaranteed constraints:
0 ≤ s.length ≤ 104.

[output] integer
*/
function countVowelConsonant(s) {
  let sum = 0;
  let vowels = {
      'a' : 'a',
      'e' : 'e',
      'i' : 'i',
      'o' : 'o',
      'u' : 'u',
  }

  for(let i = 0; i < s.length; i++) {
      if(s.charAt(i) in vowels) {
          sum += 1;
      } else {
          sum += 2;
      }
  }
  return sum;
}
