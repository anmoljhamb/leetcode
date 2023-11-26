function areSimilar(mat: number[][], k: number): boolean {
    const newMatrix: number[][] = [];
    k = k % mat[0].length;

    for (let i = 0; i < mat.length; i++) {
        newMatrix[i] = [];
        let j = k;
        for (; j < mat[0].length; j++) {
            newMatrix[i].push(mat[i][j]);
        }
        j = 0;
        for (; j < k; j++) {
            newMatrix[i].push(mat[i][j]);
        }
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (newMatrix[i][j] !== mat[i][j]) return false;
        }
    }

    return true;
}

console.log(
    areSimilar(
        [
            [4, 9, 10, 10],
            [9, 3, 8, 4],
            [2, 5, 3, 8],
            [6, 1, 10, 4],
        ],
        5
    )
);
