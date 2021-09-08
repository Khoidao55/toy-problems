/*
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
*/

const maxFruitBasket = (arr) => {
  const fruitBasket = {};
  let maxFruit = -Infinity;
  let fruitArr = [];
  let windowStart = 0;

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let fruit = arr[windowEnd];
    if(Object.keys(fruitBasket).length === 2 && !(fruit in fruitBasket)) {
      let leftMost = fruitArr.shift();
      delete fruitBasket[leftMost];
    }
    fruitArr.push(fruit);
    fruitBasket[fruit] += 1;
    maxFruit = Math.max(maxFruit, fruitArr.length);
  }

  return maxFruit;
}
// [b, c]

// {b:1}

module.exports = maxFruitBasket;