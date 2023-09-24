function choose(n: number, r: number) {
    const dp: number[] = new Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) {
        dp[i] = i * dp[i - 1];
    }
    return dp[n] / (dp[n - r] * dp[r]);
}

function champagneTower(
    poured: number,
    query_row: number,
    query_glass: number
): number {
    const portion = choose(query_row, query_glass) / Math.pow(2, query_row);
    const available = Math.max(poured - (query_row * (query_row + 1)) / 2, 0);
    return Math.min(portion * available, 1);
}

console.log(champagneTower(4, 2, 1));
