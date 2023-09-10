// Memoization DP

// function climbStairs(n: number, memo: Record<number, number> = {}): number {
//     if (n in memo) return memo[n];
//     if (n <= 2) return n;
//     memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//     return memo[n];
// }

// Tabular Form
function climbStairs(n: number) {
    const dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i <= n; i++) {
        dp[i + 1] += dp[i];
        dp[i + 2] += dp[i];
    }

    return dp[n];
}
