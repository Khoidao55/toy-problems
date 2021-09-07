const maxSumSubArr = require('../maxSumSubarray.js');

test('return the max sum of continuous subarrays: expects 9', () => {
  expect(maxSumSubArr([2, 1, 5, 1, 3, 2], 3)).toBe(9);
})
test('return the max sum of continuous subarrays: expects 7', () => {
  expect(maxSumSubArr([2, 3, 4, 1, 5], 2)).toBe(7);
})