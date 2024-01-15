function optimal(n: number) {
  if (n <= 1) return 1;
  let prev1 = 1;
  let prev2 = 1;
  let curr = 0;
  for (let i = 0; i < n - 1; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return curr;
}

function climbStairs(n: number) {
  return optimal(n);
}
