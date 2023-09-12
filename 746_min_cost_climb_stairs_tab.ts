function minCostClimbingStairs(cost: number[]): number {
    cost.unshift(0);
    cost.push(0);

    const dp: number[] = new Array(cost.length + 1).fill(0);

    console.log(cost);

    for (let i = 1; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], i - 2 >= 0 ? dp[i - 2] : 0);
    }

    console.log(dp);

    return dp[cost.length - 1];
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([12, 100]));
