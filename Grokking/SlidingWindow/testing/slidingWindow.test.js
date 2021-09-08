const maxSumSubArr = require('../maxSumSubarray.js');
const smallestSubArr = require('../smallestSubArr.js');
const distinctSubstring = require('../distinctSubstring.js');
const maxFruitBasket = require('../fruitBasket.js');

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

describe('distinctSubstring', () => {
  test('returns the length of the longest substring with distinct k integers: expects 4', () => {
    expect(distinctSubstring("araaci", 2)).toBe(4);
  });
  test('returns the length of the longest substring with distinct k integers: expects 4', () => {
    expect(distinctSubstring("araaci", 1)).toBe(2);
  });
  test('returns the length of the longest substring with distinct k integers: expects 4', () => {
    expect(distinctSubstring("cbbebi", 3)).toBe(5);
  });
  test('returns the length of the longest substring with distinct k integers: expects 4', () => {
    expect(distinctSubstring("cbbebi", 10)).toBe(6);
  });
})

describe('fruit basket', () => {
  test('should return # of max fruits in a basket: expects 3', () => {
    expect(maxFruitBasket(['A', 'B', 'C', 'A', 'C'])).toBe(3);
  });
  test('should return # of max fruits in a basket: expects 5', () => {
    expect(maxFruitBasket(['A', 'B', 'C', 'B', 'B', 'C'])).toBe(5);
  })
})