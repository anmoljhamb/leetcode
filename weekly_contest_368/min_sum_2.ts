function minimumSum(arr: number[]): number {
    let minAns = Infinity;
    let leftArr = [...arr];
    let rightArr = [...arr];

    for (let i = 1; i < arr.length; i++) {
        leftArr[i] = Math.min(leftArr[i], leftArr[i - 1]);
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        rightArr[i] = Math.min(rightArr[i], rightArr[i + 1]);
    }

    for (let i = 1; i < arr.length - 1; i++) {
        if (leftArr[i - 1] < arr[i] && arr[i] > rightArr[i + 1]) {
            minAns = Math.min(
                minAns,
                leftArr[i - 1] + arr[i] + rightArr[i + 1]
            );
        }
    }

    return minAns === Infinity ? -1 : minAns;
}

minimumSum([8, 6, 1, 5, 3]);
