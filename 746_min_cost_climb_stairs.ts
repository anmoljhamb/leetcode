function recurse(arr: number[], i: number): number {
  if (i === 0 || i === 1) return 0;
  return Math.min(
    arr[i - 1] + recurse(arr, i - 1),
    arr[i - 2] + recurse(arr, i - 2),
  );
}

function minCostClimbingStairs(cost: number[]): number {
  return recurse(cost, cost.length);
}
