function minCostClimbingStairs(cost: number[]): number {
    cost.push(0);

    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] = Math.min(cost[i] + cost[i + 1], cost[i] + cost[i + 2]);
    }

    return Math.min(cost[0], cost[1]);
}
