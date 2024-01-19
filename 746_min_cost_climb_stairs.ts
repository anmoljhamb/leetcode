function tab(arr: number[]) {
  const dp = new Array<number>(arr.length + 1);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= arr.length; i++) {
    dp[i] = Math.min(arr[i - 1] + dp[i - 1], arr[i - 2] + dp[i - 2]);
  }
  return dp[arr.length];
}

function minCostClimbingStairs(cost: number[]): number {
  return tab(cost);
}
