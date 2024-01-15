function recur(n: number) {
  if (n == 0 || n == 1) return 1;
  return recur(n - 1) + recur(n - 2);
}

function memo(n: number) {
  const memo: number[] = new Array<number>(n + 1).fill(-1);
  memo[0] = 1;
  memo[1] = 1;
  function rec(n: number) {
    if (memo[n] !== -1) {
      return memo[n];
    }
    memo[n] = rec(n - 1) + rec(n - 2);
    return memo[n];
  }
  rec(n);
  return memo[n];
}

function climbStairs(n: number) {
  return memo(n);
}
