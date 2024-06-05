function floodFill(grid: number[][], x: number, y: number, newNum: number) {
  const visited: boolean[][] = [];
  const N = grid.length;
  const M = grid[0].length;
  for (let i = 0; i < N; i++) {
    const temp: boolean[] = [];
    for (let j = 0; j < M; j++) {
      temp.push(false);
    }
    visited.push(temp);
  }

  // console.log(visited);
  const ogNum = grid[x][y];

  function recurse(i: number, j: number) {
    if (i < 0 || i >= N) return;
    if (j < 0 || j >= M) return;
    if (visited[i][j]) return;
    if (grid[i][j] !== ogNum) {
      visited[i][j] = true;
      return;
    }

    grid[i][j] = newNum;
    visited[i][j] = true;
    recurse(i - 1, j);
    recurse(i + 1, j);
    recurse(i, j - 1);
    recurse(i, j + 1);
  }

  recurse(x, y);

  return grid;
}

console.log(
  solution(
    [
      [10, 10, 20],
      [20, 10, 10],
      [10, 10, 10],
    ],
    1,
    1,
    10,
  ),
);
