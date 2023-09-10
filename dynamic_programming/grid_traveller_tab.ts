const grid_traveller = (m: number, n: number): number => {
    const grid: number[][] = [...new Array(m + 1)].map(() =>
        new Array(n + 1).fill(0)
    );

    grid[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i + 1 <= m) {
                grid[i + 1][j] += grid[i][j];
            }
            if (j + 1 <= n) {
                grid[i][j + 1] += grid[i][j];
            }
        }
    }

    return grid[m][n];
};

console.log(grid_traveller(3, 2));
console.log(grid_traveller(3, 3));
// console.log(grid_traveller(5, 5));
