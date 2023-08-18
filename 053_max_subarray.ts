function maxSubArray(arr: number[]): number {
    let sumSoFar = 0;
    let maxSum = -Infinity;
    let maxSoFar = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        sumSoFar += arr[i];
        maxSum = Math.max(sumSoFar, maxSum);
        maxSoFar = Math.max(maxSoFar, arr[i]);
        if (sumSoFar < 0) {
            sumSoFar = 0;
        }
    }
    return maxSum;
}
