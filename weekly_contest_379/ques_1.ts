const diag = (x: number, y: number) => {
  return Math.sqrt(x * x + y * y);
};

function areaOfMaxDiagonal(dimensions: number[][]): number {
  let maxDiag = 0;
  let maxArea = 0;

  dimensions.forEach(([x, y]) => {
    const d = diag(x, y);
    if (d === maxDiag) {
      maxArea = Math.max(maxArea, x * y);
    } else if (d > maxDiag) {
      maxArea = x * y;
      maxDiag = d;
    }
  });

  return maxArea;
}
