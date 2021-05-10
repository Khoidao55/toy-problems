/*
Level: Very Easy
Find the nth number in the Fibonacci series. Fibonacci series is as follows:
1, 1, 2, 3, 5, 8, 13, 21, ..
After the first two 1’s, each number is the sum of the previous two numbers.
*/
const fibMap = (n) => {
  return fibbonaciRecurse(n, {});
}

const fibbonaciRecurse = (n, map) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  if(n in map) {
    return map[n];
  }
  let result = fibbonaciRecurse(n-1, map) + fibbonaciRecurse(n-2, map);
  map[n] = result;
  return result;
}

console.time('fib');
console.log(fibMap(70));
console.timeEnd('fib');