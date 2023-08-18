function maxSubarraySumCircular(arr: number[]): number {
    let sumSoFar = 0;
    let sumSoFar1 = 0;
    let minSum = Infinity;
    let maxSum = -Infinity;
    let totalSum = arr.reduce((prev, curr) => prev + curr, 0);
    for (let i = 0; i < arr.length; i++) {
        sumSoFar += arr[i];
        sumSoFar1 += arr[i];
        maxSum = Math.max(maxSum, sumSoFar1);
        minSum = Math.min(minSum, sumSoFar);
        if (sumSoFar > 0) {
            sumSoFar = 0;
        }
        if (sumSoFar1 < 0) {
            sumSoFar1 = 0;
        }
    }
    // console.log(`totalSum: ${totalSum}`);
    // console.log(`maxSum: ${maxSum}`);
    // console.log(`minSum: ${minSum}`);
    // console.log(`totalSum-minSum: ${totalSum - minSum}`);
    if (totalSum === minSum) {
        // means, that it's best if we exclude the entire thing
        return maxSum;
    }
    return Math.max(maxSum, totalSum - minSum);
}
