function helper(
    low: number,
    arr: number[],
    memo: Record<number, number> = {}
): number {
    if (low in memo) return memo[low];
    if (low >= arr.length) return 0;

    const temp1 = helper(low + 1, arr, memo);
    const temp2 = helper(low + 2, arr, memo);

    memo[low] = arr[low] + Math.min(temp1, temp2);
    return memo[low];
}

function minCostClimbingStairs(cost: number[]): number {
    cost.unshift(0);
    return helper(0, cost);
}

minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
minCostClimbingStairs([10, 15, 20]);
minCostClimbingStairs([12, 100]);
