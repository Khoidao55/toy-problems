var findMaxConsecutiveOnes = function(nums) {
  let maxOnes = 0;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      let currentEl = nums[windowEnd];
      if(currentEl === 0) {
          windowStart = windowEnd + 1;
      } else {
       maxOnes = Math.max(maxOnes, (windowEnd - windowStart + 1));
      }
  }

  return maxOnes;
};