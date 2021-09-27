/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
  let memoize = {};
  return tribonnaciSolver(n, memoize);
};

const tribonnaciSolver = (n, memo) => {
  if(n === 0) return 0;
  if(n <= 2) return 1;

  if(n in memo) {
      return memo[n];
  } else {
      memo[n] = tribonnaciSolver(n-3,memo) + tribonnaciSolver(n-2,memo) + tribonnaciSolver(n-1,memo);
  }

  return memo[n];
}