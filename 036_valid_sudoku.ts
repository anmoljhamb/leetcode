const N = 9;
const n = 3;

function getBox(board: string[][], i: number, j: number) {
    const temp: string[] = [];
    const x = Math.floor(i / n) * n;
    const y = Math.floor(j / n) * n;
    for (let low = x; low < x + n; low++) {
        for (let high = y; high < y + n; high++) {
            temp.push(board[low][high]);
        }
    }
    return temp;
}

function getRow(board: string[][], i: number, j: number) {
    const temp: string[] = [];
    for (let low = 0; low < N; low++) {
        temp.push(board[i][low]);
    }
    return temp;
}

function getCol(board: string[][], i: number, j: number) {
    const temp: string[] = [];
    for (let low = 0; low < N; low++) {
        temp.push(board[low][j]);
    }
    return temp;
}

function containsDuplicates(arr: string[]) {
    arr = arr.filter((x) => x !== ".");
    return arr.length !== new Set(arr).size;
}

function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === ".") continue;
            const x = getBox(board, i, j);
            const y = getRow(board, i, j);
            const z = getCol(board, i, j);

            // console.log(`${i}, ${j}`);
            // console.log(x);
            // console.log(y);
            // console.log(z);

            if (
                containsDuplicates(x) ||
                containsDuplicates(y) ||
                containsDuplicates(z)
            ) {
                return false;
            }
        }
    }

    return true;
}
