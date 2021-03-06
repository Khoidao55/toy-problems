/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
  let left = 1;
  let right = n;

  while(left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      let APICall = guess(mid);
      if(APICall === -1) {
          right = mid - 1;
      } else if(APICall === 1) {
          left = mid + 1;
      } else {
          return mid;
      }
  }
};