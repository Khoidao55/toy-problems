/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let string = '';
   for(let i = 0; i < s.length; i++) {
       let char = s[i].toLowerCase();
       if(char.match(/[a-z]/i) || !isNaN(parseInt(char))) string += char;
   }
   return string === string.split('').reverse().join('');
};