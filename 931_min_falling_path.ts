function table(mat: number[][]) {
  const n = mat.length;
  const dp = new Array<number[]>(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(Infinity);
  }

  for (let j = 0; j < n; j++) {
    dp[n - 1][j] = mat[n - 1][j];
  }
  for (let i = n - 2; i > -1; i--) {
    for (let j = 0; j < n; j++) {
      const left = j > 0 ? dp[i + 1][j - 1] : Infinity;
      const bottom = dp[i + 1][j];
      const right = j < n - 1 ? dp[i + 1][j + 1] : Infinity;

      dp[i][j] = mat[i][j] + Math.min(left, bottom, right);
    }
  }

  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, dp[0][i]);
  }
  return ans;
}

function minFallingPathSum(mat: number[][]): number {
  return table(mat);
}
