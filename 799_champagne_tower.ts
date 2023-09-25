function champagneTower(
    poured: number,
    query_row: number,
    query_glass: number
): number {
    const dp: number[][] = [...new Array(query_row + 1)].map((_, index) =>
        new Array(index + 1).fill(0)
    );
    dp[0][0] = poured;

    for (let i = 0; i < query_row; i++) {
        for (let j = 0; j <= i; j++) {
            if (dp[i][j] > 1) {
                const temp = dp[i][j] - 1;
                dp[i + 1][j] += temp / 2;
                dp[i + 1][j + 1] += temp / 2;
                dp[i][j] -= temp;
            }
        }
    }
    return Math.min(dp[query_row][query_glass], 1);
}

console.log(champagneTower(6, 3, 1));
