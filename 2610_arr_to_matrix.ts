function findMatrix(arr: number[]): number[][] {
    const matrix: number[][] = []
    const visited: boolean[] = new Array<boolean>(arr.length).fill(false)
    let mat_length = 0
    const currSet = new Set<number>()

    while (mat_length !== arr.length) {
        console.log(mat_length)
        console.log(arr.length)
        for (let i = 0; i < arr.length; i++) {
            if (!visited[i]) {
                if (currSet.has(arr[i])) {
                    continue;
                }
                currSet.add(arr[i]);
                visited[i] = true;
            }
        }
        mat_length += currSet.size;
        matrix.push(Array.from(currSet));
        currSet.clear()
    }

    console.log(matrix);
    return matrix;
};

findMatrix([1, 3, 4, 1, 2, 3, 1])
