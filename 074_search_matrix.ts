function searchMatrix(matrix: number[][], target: number): boolean {
    const M = matrix.length;
    const N = matrix[0].length;

    let low = 0,
        high = M - 1;

    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);

        if (matrix[mid1][0] <= target && matrix[mid1][N - 1] >= target) {
            let i = 0;
            let j = N - 1;

            while (i <= j) {
                let mid2 = Math.floor((i + j) / 2);
                if (matrix[mid1][mid2] === target) {
                    return true;
                } else if (target < matrix[mid1][mid2]) {
                    j = mid2 - 1;
                } else {
                    i = mid2 + 1;
                }
            }

            return false;
        } else if (target < matrix[mid1][0]) {
            high = mid1 - 1;
        } else if (target > matrix[mid1][N - 1]) {
            low = mid1 + 1;
        }
    }
    return false;
}

export default searchMatrix;
