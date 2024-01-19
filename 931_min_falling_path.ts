function table(mat: number[][]) {
  const n = mat.length;

  let lastRow = [...mat[n - 1]];
  for (let i = n - 2; i > -1; i--) {
    const curr = [];
    for (let j = 0; j < n; j++) {
      const left = j > 0 ? lastRow[j - 1] : Infinity;
      const bottom = lastRow[j];
      const right = j < n - 1 ? lastRow[j + 1] : Infinity;

      curr.push(mat[i][j] + Math.min(left, bottom, right));
    }
    lastRow = curr;
  }

  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    ans = Math.min(lastRow[i], ans);
  }
  return ans;
}

function minFallingPathSum(mat: number[][]): number {
  return table(mat);
}
