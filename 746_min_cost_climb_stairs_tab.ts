function minCostClimbingStairs(cost: number[]): number {
    cost.unshift(0);
    cost.push(0);

    const dp: number[] = new Array(cost.length).fill(0);

    console.log(cost);

    console.log(dp);

    return dp[cost.length - 1];
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([12, 100]));
