function minCostClimbingStairs(cost: number[]): number {
    cost.unshift(0);
    cost.push(0);

    const dp: number[] = new Array(cost.length).fill(0);

    for (let i = 1; i < cost.length; i++) {
        dp[i] = Math.min(
            cost[i - 1] + dp[i - 1],
            i - 2 >= 0 ? cost[i - 2] + dp[i - 2] : 0
        );
    }

    return dp[cost.length - 1];
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([12, 100]));
console.log(minCostClimbingStairs([100, 12]));
