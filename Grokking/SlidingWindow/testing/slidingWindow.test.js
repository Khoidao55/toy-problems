const maxSumSubArr = require('../maxSumSubarray.js');
const smallestSubArr = require('../smallestSubArr.js');

describe('MaxSumSubArr', () => {
  test('return the max sum of continuous subarrays: expects 9', () => {
    expect(maxSumSubArr([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });
  test('return the max sum of continuous subarrays: expects 7', () => {
    expect(maxSumSubArr([2, 3, 4, 1, 5], 2)).toBe(7);
  });
});

describe('smallestSubArr', () => {
  test('returns the # of elements in the smallest subarray to = k or higher: expects 2', () => {
    expect(smallestSubArr([2, 1, 5, 2, 3, 2], 7)).toBe(2);
  });
  test('returns the # of elements in the smallest subarray to = k or higher: expects 1', () => {
    expect(smallestSubArr([2, 1, 5, 2, 8], 7)).toBe(1);
  });
  test('returns the # of elements in the smallest subarray to = k or higher: expects 3', () => {
    expect(smallestSubArr([3, 4, 1, 1, 6], 8)).toBe(3);
  });
})