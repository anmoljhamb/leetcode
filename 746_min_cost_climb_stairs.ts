function optimized(arr: number[]) {
  let prev1 = 0;
  let prev2 = 0;
  let ans = 0;
  for (let i = 2; i <= arr.length; i++) {
    ans = Math.min(arr[i - 1] + prev1, arr[i - 2] + prev2);
    prev2 = prev1;
    prev1 = ans;
  }
  return ans;
}

function minCostClimbingStairs(cost: number[]): number {
  return optimized(cost);
}
