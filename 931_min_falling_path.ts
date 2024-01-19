function helper(mat: number[][], i: number, j: number): number {
  if (j < 0 || j >= mat.length) return Infinity;
  if (i === mat.length - 1) return mat[i][j];

  const curr =
    mat[i][j] +
    Math.min(
      helper(mat, i + 1, j - 1),
      helper(mat, i + 1, j),
      helper(mat, i + 1, j + 1),
    );

  return curr;
}

function minFallingPathSum(mat: number[][]): number {
  let ans = Infinity;
  for (let i = 0; i < mat.length; i++) {
    const curr = helper(mat, 0, i);
    ans = Math.min(ans, curr);
  }
  return ans;
}
