function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const exists = new Array<boolean>(grid.length * grid.length + 1).fill(
        false
    );
    const ans = [0, 0];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (exists[grid[i][j]]) {
                ans[0] = grid[i][j];
            }
            exists[grid[i][j]] = true;
        }
    }

    for (let i = 1; i <= grid.length * grid.length; i++) {
        if (!exists[i]) {
            ans[1] = i;
            return ans;
        }
    }

    return ans;
}
