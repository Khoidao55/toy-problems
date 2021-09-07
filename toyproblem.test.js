const findAverage = require('./Grokking/SlidingWindow/FindAverage.js');

test('findAverage => input: [1,3,2,6,-1,4,1,8,2], should return:[2.2, 2.8, 2.4, 3.6, 2.8]', () => {
  expect(findAverage([1,3,2,6,-1,4,1,8,2], 5)).toStrictEqual([2.2, 2.8, 2.4, 3.6, 2.8]);
})