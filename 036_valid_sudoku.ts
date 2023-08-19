const N = 9;
const n = 3;

function isValidSudoku(board: string[][]): boolean {
    const row: Record<string, Set<string>> = {};
    const col: Record<string, Set<string>> = {};
    const box: Record<string, Set<string>> = {};

    for (let i = 0; i < N; i++) {
        row[i] = new Set<string>();
    }

    for (let i = 0; i < N; i++) {
        col[i] = new Set<string>();
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            box[`${i}${j}`] = new Set<string>();
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const curr = board[i][j];
            const temp = `${Math.floor(i / n)}${Math.floor(j / n)}`;

            if (curr === ".") continue;

            if (row[i].has(curr) || col[j].has(curr) || box[temp].has(curr)) {
                return false;
            }

            row[i].add(curr);
            col[j].add(curr);
            box[temp].add(curr);
        }
    }

    return true;
}
