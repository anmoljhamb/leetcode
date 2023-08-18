function maxSubArray(arr: number[]): number {
    let sumSoFar = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        sumSoFar += arr[i];
        maxSum = Math.max(sumSoFar, maxSum);
        if (sumSoFar < 0) {
            sumSoFar = 0;
        }
    }
    return maxSum;
}
