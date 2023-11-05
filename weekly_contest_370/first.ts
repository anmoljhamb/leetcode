function findChampion(grid: number[][]): number {
    const isChampion = new Array(grid.length).fill(true);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (i !== j) {
                if (grid[i][j] === 1) {
                    isChampion[j] = false;
                }
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        if (isChampion[i]) {
            return i;
        }
    }

    return 0;
}
